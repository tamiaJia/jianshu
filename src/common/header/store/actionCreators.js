import { actionType } from "./index";
import axios from 'axios';
import { fromJS } from 'immutable';

export const change_focus = () => ({
	type: actionType.CHANGE_FOCUS
})
export const change_blur = () => ({
	type: actionType.CHANGE_BLUR
})
export const change_mouse = () => ({
	type: actionType.MOUSE_ENTER
})
export const change_leave = () => ({
	type: actionType.MOUSE_LEAVE
})
export const change_page = (page) => ({
	type: actionType.CHANGE_PAGE,
	page
})

export const getList = () => {
	return (dispatch) => {
		axios.get('./api/headerList.json').then((res) => {
			const data = res.data;
			const action = changeList(data.data)
			dispatch(action)
		}).catch(() => {
			console.log('error')
		})
	}
}

const changeList = (data) => ({
	type: actionType.CHANGE_LIST,
	data : fromJS(data),
	totalPage: Math.ceil(data.length/10)
})