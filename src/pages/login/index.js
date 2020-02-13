import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom'
import { actionCreators } from './store';
//import store from '../../store';
import { connect } from 'react-redux';
import logoImg from '../../static/logo1.png'
import {
    LoginWrapper,
    Logo,
    LoginBox,
    LoginTitle,
    LoginTitleItem,
    Input,
    InputRadio,
    TipsNews,
    Button,
    RegisterWrapper,
    RegisterTips
} from './style';

class Login extends PureComponent {
    constructor(props) {
        super(props);
        this.state = ({
            // show: true,
            toIndex: false
        })
        // this.loginTextShow = this.loginTextShow.bind(this);
        // this.registerTextShow = this.registerTextShow.bind(this);
        this.toIndexClick = this.toIndexClick.bind(this);
        // this.handleStoreChange = this.handleStoreChange.bind(this);
        // store.subscribe(this.handleStoreChange)
    }

    getLoginType(show) {
        const { loginIn, registerIn } = this.props;
        if(show) {
            return (
                <div>
                    <Input placeholder='账号' id='input1' ref={(input) => {this.account = input}}/>
                    <Input placeholder='密码' type='password' ref={(input) => {this.password = input}}/>
                    <TipsNews>
                        <InputRadio 
                            type="checkbox" 
                            ref={(input) => {this.check = input}}
                        />
                        记住我
                        <p>登陆遇到问题?</p>
                    </TipsNews>
                    <Button onClick={ () => loginIn(this.account, this.password, this.check) }>登录</Button>
                </div> 
            )
        }else {
            return (
                <RegisterWrapper>
                    <Input placeholder='你的昵称' ref={(input) => {this.nick = input}}/>
                    <Input placeholder='手机号' ref={(input) => {this.tel = input}}/>
                    <Input placeholder='设置密码' type='password' ref={(input) => {this.password = input}}/>
                    <Button 
                        className='top-margin'
                        onClick={ () => registerIn(this.nick, this.tel, this.password) }
                    >注册</Button>
                    <RegisterTips>
                        <p>点击 “注册” 即表示您同意并愿意遵守简书</p>
                        <p><b>用户协议</b>&nbsp;&nbsp;和&nbsp;&nbsp;<b>隐私政策</b></p>
                    </RegisterTips>
                </RegisterWrapper>
            )
        }
    }
    render() {
        const { loginState, loginTextShow, registerTextShow, toggleshow } = this.props;
        if(!loginState && !this.state.toIndex) {
            return (
                <LoginWrapper>
                    <Logo onClick={ this.toIndexClick }>
                        <img alt='' src={ logoImg } />
                    </Logo>
                    <LoginBox>
                        <LoginTitle>
                            <LoginTitleItem 
                                onClick={ loginTextShow } 
                                className={toggleshow ? 'login-border': ''}
                            >登录</LoginTitleItem>·
                            <LoginTitleItem 
                                onClick={ registerTextShow }
                                className={ toggleshow ? '': 'login-border'}
                            >注册</LoginTitleItem>
                        </LoginTitle>
                        { this.getLoginType(toggleshow) }
                    </LoginBox>
                </LoginWrapper>
            )
        }else {
            return <Redirect to='/' />
        }
        
    }

    // loginTextShow() {
    //     this.setState(() => ({
    //         show: true
    //     }))
    // };
    // registerTextShow() {
    //     this.setState(() => ({
    //         show: false
    //     }))
    // };
    toIndexClick() {
        this.setState(() => ({
            toIndex: true
        }))
    };

    // handleStoreChange() {
    //     if(store.getState().getIn(['login', 'registerState'])) {           
    //         this.setState(() => ({
    //             show: true
    //         }))
    //     }       
    // }
}

const mapState = (state) => ({
    loginState: state.getIn(['login', 'loginState']),
    toggleshow: state.getIn(['login', 'toggleshow'])
})

const mapDispatch = (dispatch) => ({
    loginIn(accountElem, passwordElem, checkElem) {
        dispatch(actionCreators.toLogin(accountElem.value, passwordElem.value, checkElem.checked));
    },
    registerIn(nickElem, telElem, passwordElem, ) {
        dispatch(actionCreators.toRegister(nickElem.value, telElem.value, passwordElem.value));
    },
    loginTextShow() {
        dispatch(actionCreators.loginShow());
    },
    registerTextShow() {
        dispatch(actionCreators.registerShow());
    }
})

export default connect(mapState, mapDispatch)(Login);