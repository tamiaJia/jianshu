import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';
import {
	ListItem,
	ListInfo,
	LoadMore,
} from '../style';
class List extends PureComponent{
	render(){
		const { list,getMoreList,page } = this.props;
		return (
            <div>
			{
		     list.map((item,index) => {
			   return (
                   <Link key={index} to={`/detail/${item.get('id')}`}>
                       <ListItem >
                           <img className='list-pic' src={item.get('listPic')} alt=''/>
                           <ListInfo>
                               <h3 className='title'>{ item.get('title') }</h3>
                               <p className='desc'>{ item.get('desc') }</p>
                           </ListInfo>
                       </ListItem>
                   </Link>
               );
			  })
			}
			<LoadMore onClick = { () => getMoreList(page) }>获取更多+</LoadMore>
			</div>
        );
	}
}
const mapState = (state) => ({
   list: state.getIn(['home','anticleList']),
   page: state.getIn(['home','articlePage'])
})
const mapDispatch = (dispatch) => ({
	getMoreList(page){
		dispatch(actionCreators.getMoreList(page));
	}
})
export default connect(mapState,mapDispatch)(List)