import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';    //引入immutable.js对state进行更改操作

//将state变成immutable对象
const defaultStore = fromJS({
    title: '',
    headerImg: '',
    nickName: '',
    numList: [],
    contents: ''
});

export default (state = defaultStore , action) => {
    //（1）switch判断
    switch(action.type) {
        case actionTypes.GET_DETAIL_DATA:
            return state.merge({
                title: fromJS(action.result.title),
                headerImg: fromJS(action.result.headerImg),
                nickName: fromJS(action.result.nickName),
                numList: fromJS(action.result.numList),
                contents: fromJS(action.result.contents),
            })
        default:
            return state
    }
}