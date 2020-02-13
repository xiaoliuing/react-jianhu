import * as actionTypes from './actionTypes';
import axios from 'axios';
  
const setAction = (result) => ({
    type: actionTypes.GET_DETAIL_DATA,
    result
})
export const getJsonData = (id) => {
    return (dispatch) => {
        axios.get('/api/detailone.json?id=' + id)
            .then((res) => {
                const result = res.data.data;
                dispatch(setAction(result))
            })
    }
}