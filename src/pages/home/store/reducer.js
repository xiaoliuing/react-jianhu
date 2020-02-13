import { fromJS } from 'immutable';    //引入immutable.js对state进行更改操作
import * as actionTypes from './actiontypes';
import typePicOne from '../../../static/images/1.jpg';
import typePicTwo from '../../../static/images/2.jpg';

//将state变成immutable对象
const defaultStore = fromJS({
    codeShow: false,
    page: 1,
    topShow: false,
    topicList: [{
        id: 1,
        title: '就会',
        imgUrl: typePicOne
    }, {
        id: 2,
        title: '今山官方',
        imgUrl: typePicTwo
    }],
    listList: [],
    //write.js
    writeList: []
});

const addHomeList = (state, action) => {
    return state.merge({
        listList: state.get('listList').concat(action.list),
        page: action.nextPage
    });
}

export default (state = defaultStore , action) => {
    //（1）switch判断
    switch(action.type) {
        case actionTypes.MOUSE_ENTER:
            return state.set('codeShow', true);
        case actionTypes.MOUSE_LEAVE:
            return state.set('codeShow', false);
        case actionTypes.GET_LIST_INFO:
            return state.set('listList', fromJS(action.list));
        case actionTypes.ADD_HOME_LIST:
            return addHomeList(state, action);
        case actionTypes.TO_TOP_TOGGLE:
            return state.set('topShow', action.show);
        case actionTypes.GET_WRITER_LIST:
            return state.set('writeList', fromJS(action.list));
        default:
            return state;
    }
}