import * as actionTypes from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable'; 
export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS
})
export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR
})
export const getListItem = (data) => ({
    type: actionTypes.GET_LIST_ITEN,
    data: fromJS(data),                    //将普通数组data，转换成immutable类型的data
    totalPage: Math.ceil(data.length/10)
})

export const getListItemJson = () => {
    return (dispatch) => {
        axios.get('/api/ListItem.json').then((res) => {
            const data = res.data;
            dispatch(getListItem(data.data));
        }).catch(() => {
            console.log('error');
        })
    }
}

export const mouseEnter = () => ({
    type: actionTypes.MOUSE_ENTER
}) 

export const mouseLeave = () => ({
    type: actionTypes.MOUSE_LEAVE
})

export const clickChangePage = (page) => ({
    type: actionTypes.CHANGE_PAGE,
    page
})