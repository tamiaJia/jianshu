import { fromJS } from 'immutable';
import * as actionType from './actionType';

const defaultState = fromJS({
	login:false
})

export default (state = defaultState, action) => {
	switch(action.type){
	 case actionType.LOGOUT:
	  return state.set('login',action.value)
	 case actionType.CHANGE_LOGIN:
	  return state.set('login',action.value)
     default:
	 return state;
	}
}