import { fromJS } from 'immutable';    //引入immutable.js对state进行更改操作
import * as actionTypes from './actionTypes';

//将state变成immutable对象
const defaultStore = fromJS({
    loginState: false,
    toggleshow: true
});
export default (state = defaultStore , action) => {
    //（1）switch判断
    switch(action.type) {
        case actionTypes.LOGIN_IN:
            return state.set('loginState', action.value);
        case actionTypes.LOGIN_OUT:
            return state.set('loginState', action.value);
        case actionTypes.REGISTER_IN:
            return state.set('toggleshow', true);
        case actionTypes.LOGIN_TEXT_SHOW:
            return state.set('toggleshow', true);
        case actionTypes.REGISTER_TEXT_SHOW:
            return state.set('toggleshow', false);
        case actionTypes.REGISTER_GO_TO:
            return state.set('toggleshow', false);
        case actionTypes.LOGIN_GO_TO:
            return state.set('toggleshow', true);
        default:
            return state;
    }
}