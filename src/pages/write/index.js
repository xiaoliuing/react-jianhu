import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { Div } from './style';

class Login extends PureComponent {
    render() {
        const { loginState } = this.props;
        if(loginState) {
            return <Div>写文章~~~</Div>
        }else {
            return <Redirect to='/login' />
        }
        
    }
}

const mapState = (state) => ({
    loginState: state.getIn(['login', 'loginState']) 
})

export default connect(mapState, null)(Login);