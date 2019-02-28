import styled from "styled-components";
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
	height:56px;
	border-bottom:1px solid #f0f0f0;
	position:relative;
	z-index:1;
`
export const Logo = styled.div`
	height:56px;
	display:block;
	width:100px;
	position:absolute;
	left:0;
	top:0;
	background:url(${logoPic});
	background-size:contain;
`

export const Nav = styled.div
`
	width:960px;
	height:100%;
	margin:0 auto;
`
export const NavItem = styled.div
`
line-height:56px;
padding:0 15px;
color:#333;
&.left{
	float:left;
}
&.right{
	float:right;
	color:#969696;
}
&.active{
	color:#ea6f5a;
}
`
export const SearchWrapper = styled.div
`
float:left;
position:relative;
.zoom{
	position:absolute;
	right:5px;
	bottom:5px;
	width:30px;
	height:30px;
	border-radius:15px;
	line-height:30px;
	text-align:center;
	&.focus{
		background:#777;
		color:#fff;
	}
}

`
export const NavSearch = styled.input.attrs({
	placeholder: '搜索'
})
`
	width:160px;
	height:38px;
	margin-top:9px;
	padding:0 35px 0 20px;
	box-sizing:border-box;
	border:none;
	outline:none;
	border-radius:19px;
	background:#eee;
	font-size:14px;
	color:#666;
	&::placeholder{
		color:#999;
	}
	&.focus{
		width:240px;
	}
	&.fade-enter{
		transition: all 200ms ease-out;
	}
	&.fade-enter-active{
		width:240px;
	}
	&.fade-exit{
		transition: all 200ms ease-out;
	}
	&.fade-exit-active{
		width:160px;
	}
	
`
export const SearchInfo = styled.div`
	position:absolute;
	left:0;
	top:56px;
	width:250px;
	margin-top:9px;
	border-radius:4px;
	box-shadow: 0 0 8px rgba(0,0,0,.2);
	border-bottom: 1px solid #f0f0f0;
	padding: 20px 20px 5px;
	background:#fff;
`
export const SearchInfoTitle = styled.div`
	height:20px;
	margin-bottom:10px;
`
export const SearchInfoSwitch = styled.a`
	float:right;
	font-size:13px;
	color:#969696;
	cursor:pointer;
	.spin{
		float:left;
		display:block;
		font-size:12px;
		margin-right:2px;
		transition:all 200ms ease-in;
		transform-origin:center center;
	}
`
export const SearchInfoList = styled.div`

`
export const SearchInfoItem = styled.a`
	float:left;
	margin:0 10px 15px 0;
	padding:2px 6px;
	font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
    
`
export const Addition = styled.div
`
	position:absolute;
	right:0;
	top:0;
	height:56px;
`
export const Button = styled.div
`
	float:right;
	margin-top:9px;
	line-height:38px;
	border-radius:19px;
	border:1px solid #ec6149;
	margin-right:20px;
	padding:0 20px;
	font-size:14px;
	&.ref{
		color:#ec6149;
	}
	&.writting{
		color:#fff;
		background:#ec6149;
	}
`
