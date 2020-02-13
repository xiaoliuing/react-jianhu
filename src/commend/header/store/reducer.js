import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';    //引入immutable.js对state进行更改操作

//将state变成immutable对象
const defaultStore = fromJS({
    focused: false,
    mouseEnter: false,
    page: 1,
    totalPage: 1,
    list: []
});

export default (state = defaultStore , action) => {
    //（1）switch判断
    switch(action.type) {
        case actionTypes.SEARCH_FOCUS:
            return state.set('focused', true);
        case actionTypes.SEARCH_BLUR:
            return state.set('focused', false);
        case actionTypes.GET_LIST_ITEN:
            return state.merge({        //merge()方法可以同时改变多个数据内容
                list: action.data,
                totalPage: action.totalPage
            })
            //state.set('list', action.data).set('totalPage', action.totalPage);
        case actionTypes.MOUSE_ENTER:
            return state.set('mouseEnter', true);
        case actionTypes.MOUSE_LEAVE:
            return state.set('mouseEnter', false);
        case actionTypes.CHANGE_PAGE:
            return state.set('page', action.page);
        default:
            return state
    }
    //（2）if判断
    // if(action.type === actionTypes.SEARCH_FOCUS){
    //     return state.set('focused', true);
    // }
    // if(action.type === actionTypes.SEARCH_BLUR){
    //     return state.set('focused', false);
    // }
    // if(action.type === actionTypes.GET_LIST_ITEN) {
    //     return state.set('list', action.data)
    // }
    // return state;
}

// const defaultStore = {
//     focused: false
// };

// export default (state = defaultStore , action) => {
//     if(action.type === actionTypes.SEARCH_FOCUS){
//         return {
//             focused: true
//         }
//     }
//     if(action.type === actionTypes.SEARCH_BLUR){
//         return {
//             focused: false
//         }
//     }
//     return state;
// }