import  { actionType }  from "./index";
import { fromJS } from 'immutable';

const defaultState =fromJS({
	focus: false,
	list: [],
	mouseIn: false,
	page:1,
	totalPage:1
})

export default (state = defaultState, action) => {
	switch(action.type){
		case actionType.CHANGE_FOCUS:
		 return state.set('focus',true);
		case actionType.CHANGE_BLUR:
		 return state.set('focus',false);
		case actionType.CHANGE_LIST:
		 return state.set('list',action.data).set('totalPage',action.totalPage);
		case actionType.MOUSE_ENTER:
		 return state.set('mouseIn',true);
		case actionType.MOUSE_LEAVE:
		 return state.set('mouseIn',false);
		case actionType.CHANGE_PAGE:
		 return state.set('page',action.page);
	  	default:
	  	return state;	
	}
}