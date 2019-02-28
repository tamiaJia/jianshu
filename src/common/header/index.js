import React, { Component} from "react";
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from "./store";
import { actionCreators as loginActionCreators } from "../../pages/login/store";
import { Link } from 'react-router-dom';
import {
	HeaderWrapper, 
	Logo,
	Nav,
	NavItem,
	SearchWrapper,
	NavSearch,
	Addition,
	Button,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem
} from "./style";

class Header extends Component{
	render(){
	const { focus,handleInputFocus,handleInputBlur,list,login,logout } = this.props
	return (
			<HeaderWrapper>
				<Link to='/'>
					<Logo />
				</Link>
				<Nav>
					<NavItem className = "left active">首页</NavItem>
					<NavItem className = "left">下载App</NavItem>
					<NavItem className = "right">
						<i className='iconfont'>&#xe636;</i>
					</NavItem>
					{
						login?
						 <NavItem className = "right" onClick={logout}>退出</NavItem>:
						 <Link to='/login'>
						 	<NavItem className = "right">登录</NavItem>
						 </Link> 
					}
					
					<SearchWrapper>
						<CSSTransition
							timeout = { 200 }
							in = { focus }
							classNames = 'fade'
						>
						<NavSearch 
							className = { focus ? 'focus' : '' }
							onFocus = { () => {handleInputFocus(list)} }
							onBlur = { handleInputBlur }
							>
						</NavSearch>
						</CSSTransition>
						<i className = { focus ? 'focus zoom iconfont' : 'iconfont zoom'}>&#xe614;</i>	
						{this.getListArea()}
					</SearchWrapper>
				</Nav>
				<Addition>
					<Link to='/write'>
						<Button>
							<i className='iconfont'>&#xe624;</i>
							写文章
						</Button>
					</Link>
					<Button className='reg'>注册</Button>
				</Addition>
			</HeaderWrapper>
		)
}
getListArea (){
	const { focus,list,mouseIn,handleMouseEnter,handleMouseLeave,handleChangeSearch,page,totalPage } = this.props
	const newList = list.toJS();
	const pageList = [];
	if(newList.length){
		for(let i = (page-1) * 10; i < page * 10; i++){
			pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
		}
	}
	if(focus || mouseIn){
		return (
			<SearchInfo 
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			>
				<SearchInfoTitle>
					热门搜索
					<SearchInfoSwitch onClick={() => handleChangeSearch(page,totalPage,this.spinIcon)}>
					<i ref={(icon) => {this.spinIcon = icon}}className='iconfont spin'>&#xe62d;</i>换一批
					</SearchInfoSwitch>
				</SearchInfoTitle>
				<SearchInfoList>
					{pageList}
				</SearchInfoList>
			</SearchInfo>
			)
		}else{
			return null
		}
	}
}

const mapStateToProps = (state) => {
	return {
		focus: state.getIn(['header','focus']),
		list: state.getIn(['header','list']),
		mouseIn: state.getIn(['header','mouseIn']),
		page: state.getIn(['header','page']),
		totalPage: state.getIn(['header','totalPage']),
		login: state.getIn(['login','login'])
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus(list){
			list.size === 0 && dispatch(actionCreators.getList())
			dispatch(actionCreators.change_focus())
		},
		handleInputBlur(){
			dispatch(actionCreators.change_blur())
		},
		handleMouseEnter(){
			dispatch(actionCreators.change_mouse())
		},
		handleMouseLeave(){
			dispatch(actionCreators.change_leave())
		},
		handleChangeSearch(page,totalPage,spin){
			let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
			if(originAngle){
				originAngle = parseInt(originAngle,10)
			}else{
				originAngle = 0
			}
			spin.style.transform = `rotate(${originAngle + 360}deg)`
			if(page < totalPage){
				dispatch(actionCreators.change_page(page+1))
			}else{
				dispatch(actionCreators.change_page(1))
			}
			
		},
		logout() {
			dispatch(loginActionCreators.logout())
		}

	};
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)