import axios from 'axios';
import { CHANGE_HOME_DATA, ADD_HOME_LIST,TOGGLE_TOP_SHOW } from './actionType'

const getHomeData = (data) => ({
	type:CHANGE_HOME_DATA,
	anticleList: data.anticleList
})
const addHomeList = (list, nextpage) => ({
	type:ADD_HOME_LIST,
	list: list.anticleList,
	nextpage
})
export const getHomeInfo = () => {
	return (dispatch) => {
		axios.get('/api/home.json').then((res) => {
			let data = res.data.data;
			dispatch(getHomeData(data))
		})
	}
}
export const getMoreList = (page) => {
	return (dispatch) => {
		axios.get(`/api/homeList.json?page=${page}`).then((res) => {
			let data = res.data.data;
			dispatch(addHomeList(data,page+1))
		})
	};
}
export const toggleTopShow = (flag) => ({
	type:TOGGLE_TOP_SHOW,
	flag
})