import * as actionType from './actionType';
import axios from 'axios';

const changeLogin = () => ({
	type:actionType.CHANGE_LOGIN,
	value: true
})
export const logout = () => ({
	type:actionType.LOGOUT,
	value:false
})
export const login = (account, password) => {
	return (dispatch) => {
		axios.get(`/api/login.json?account=${account}&password=${password}` ).then((res) => {
			if(res.data.data){
				dispatch(changeLogin())
			}else{
				alert('登录失败')
			}
		})
	};
}
