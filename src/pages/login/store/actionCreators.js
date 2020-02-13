import * as actionTypes from './actionTypes';
import axios from 'axios';

const loginAction = () => ({
    type: actionTypes.LOGIN_IN,
    value: true
})

const registerState = () => ({
    type: actionTypes.REGISTER_IN
})

export const loginOut = () => ({
    type: actionTypes.LOGIN_OUT,
    value: false
})

export const loginShow = () => ({
    type: actionTypes.LOGIN_TEXT_SHOW
})

export const registerShow = () => ({
    type: actionTypes.REGISTER_TEXT_SHOW
})

export const registerGoTo = () => ({
    type: actionTypes.REGISTER_GO_TO
})

export const loginGoTo = () => ({
    type: actionTypes.LOGIN_GO_TO
})

export const toLogin = (account, password, check) => {
    return (dispatch) =>{
        axios.get('/api/login.json?account=' + account +'&password=' + password + '&check=' + check)
            .then((res) =>{
                const loginState = res.data.data;
                if(loginState) {
                    dispatch(loginAction())
                }else {
                    alert('登陆失败!');
                }
            }).catch(() => {
                console.log('error');
            })
    }
}

export const toRegister = (nick, tel, password) => {
    return (dispatch) => {
        axios.get('/api/register.json?nick=' + nick + '&tel=' + tel + '&password=' + password)
            .then((res) => {
                const register = res.data.data;
                if(register) {
                    dispatch(registerState())
                }else {
                    alert('注册失败!');
                }
            }).catch(() => {
                console.log('error');
            })
    }
}