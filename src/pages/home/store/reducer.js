import { fromJS } from 'immutable';
import { CHANGE_HOME_DATA, ADD_HOME_LIST,TOGGLE_TOP_SHOW } from './actionType'

const defaultState = fromJS({
	anticleList:[],
	articlePage:1,
	showScroll:false
})
const changeHomeData = (state, action) => {
	return state.merge({
		'anticleList': fromJS(action.anticleList)
	});
}
const addHomeList = (state, action) => {
	return state.merge({
 	'anticleList':state.get('anticleList').concat(fromJS(action.list)),
 	'articlePage': action.nextpage
 });
}
export default (state = defaultState, action) => {
	switch(action.type){
		case CHANGE_HOME_DATA:
			return changeHomeData(state,action)
		case ADD_HOME_LIST:
		 return addHomeList(state,action)
		case TOGGLE_TOP_SHOW:
		  return state.set('showScroll',action.flag)
     default:
	 return state;
	}
}