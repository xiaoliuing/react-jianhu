import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store'
import codePic from '../../../static/images/code.png';
import { CodeWrapper, CodeWrapperText, CodePngShow, Div } from '../style';
class QRCode extends PureComponent {
    getCodeType() {
        const { codeIn } = this.props;
        if(codeIn) {
            return (
                <CodePngShow src={ codePic } >
                    <img className='showCode-png' src={ codePic } alt='' />
                    <Div />
                </CodePngShow>
            )
        }else {
            return null;
        }
    }
    render() {
        const { handleMouseEnter, handleMouseLeave } = this.props;
        return (
            <CodeWrapper
                onMouseEnter = { handleMouseEnter }
                onMouseLeave = { handleMouseLeave }
            >   
                { this.getCodeType() }
                <img className='code-pic' alt='' src={ codePic } />
                <CodeWrapperText>
                    <h4 className='title'>下载简书手机App ></h4>
                    <p className='cont'>随时随地发现和创作内容</p>
                </CodeWrapperText>
            </CodeWrapper>
        )
    }
}

const mapState = (state) => {
    return {
        codeIn: state.getIn(['home', 'codeShow'])
    }
}

const mapDispatch = (dispatch) => {
    return {
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        }
    }
}

export default connect(mapState, mapDispatch)(QRCode);