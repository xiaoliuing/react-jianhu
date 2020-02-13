import * as actionTypes from './actiontypes';
import { fromJS } from 'immutable';
import axios from 'axios';

export const mouseEnter = () => ({
    type: actionTypes.MOUSE_ENTER
})

export const mouseLeave = () => ({
    type: actionTypes.MOUSE_LEAVE
})

export const toTopToggle = (show) => ({
    type: actionTypes.TO_TOP_TOGGLE,
    show
})


const changeHomeData = (result) => ({
    type: actionTypes.GET_LIST_INFO,
    list: result.listList
})

const addHomeList = (list, nextPage) => ({
    type: actionTypes.ADD_HOME_LIST,
    list: fromJS(list.listList),
    nextPage
})

const getListData = (list) => ({
    type: actionTypes.GET_WRITER_LIST,
    list
})

export const getListInfo = () => {
    return (dispatch) => {
        axios.get('api/home.json')
            .then((res) => {
                const result = res.data.data;
                dispatch(changeHomeData(result));
            })
            .catch(() => {
                console.log('error')
            })
    }
}

export const getHomeList = (page) => {
    return (dispatch) => {
        axios.get('api/home.json?page=' + page)
            .then((res) => {
                const list = res.data.data;
                dispatch(addHomeList(list, page + 1));
            })
            .catch(() => {
                console.log('error')
            })
    }
}

export const getWriterList = () => {
    return (dispatch) => {
        axios.get('api/writer.json')
            .then((res) => {
                const list = res.data.data;
                dispatch(getListData(list));
            })
            .catch(() => {
                console.log('error')
            })
    }
}