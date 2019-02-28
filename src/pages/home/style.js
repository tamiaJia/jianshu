import styled from 'styled-components';

export const HomeWrapper = styled.div`
	width:960px;
	margin:0 auto;
	overflow:hidden;
`
export const HomeLeft = styled.div`
	float:left;
	width:625px;
	margin-left:15px;
	padding-top:30px;
	.banner-img{
		width:625px;
		height:270px;
	}
`
export const HomeRight = styled.div`
	float:left;
	width:280px;
`
export const ListItem = styled.div`
	overflow:hidden;
	padding:20px 0;
	border-bottom:1px solid #dcdcdc;
	.list-pic{
		display:block;
		width: 148px;
		height: 100px;
		border-radius: 4px;
		border: 1px solid #f0f0f0;
		float:right;
	}

`
export const ListInfo = styled.div`
	float:left;
	width:458px;
	.title{
		line-height:27px;
		font-size:18px;
		color:#333;
		font-weight:bold;
	}
	.desc{
		font-size:13px;
		line-height:24px;
		color:#999;

	}
`
export const RecommendWrapper = styled.div`
	margin:30 0;
	width:280px;
`
export const RecommendItem = styled.div`
	margin:30 0;
	width:280px;
	height:50px;
	background:url(${(props) => props.imgUrl});
	background-size:contain;
`
export const LoadMore = styled.div`
	width:100%;
	height:40px;
	line-height:40px;
	text-align:center;
	background:#a5a5a5;
	color:#fff;
	border-radius:20px;
	cursor:pointer;
	margin: 30px 0;
`
export const BackTop = styled.div`
	position:fixed;
	right:100px;
	bottom:100px;
	width:60px;
	height:60px;
	line-height:60px;
	text-align:center;
	border:1px solid #ccc;
	font-size:14px;
	cursor:pointer;
`

