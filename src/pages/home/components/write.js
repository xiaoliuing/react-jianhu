import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import {
    WriteWrapper,
    WriteSwitch,
    WriteContent,
    WriteContentItem,
    ContentItemInfo,
    WButton
} from '../style';

class Write extends PureComponent {
    render() {
        const { list } = this.props; 
        return (
            <WriteWrapper>
                推荐作者
                <WriteSwitch>
                    换一批
                </WriteSwitch>
                <WriteContent>
                    {
                        list.map((item) => {
                            return (
                                <WriteContentItem key={ item.get('id') }>
                                    <img alt='' src={ item.get('headUrl') }/>
                                    <ContentItemInfo>
                                        { item.get('nick') } <p className='p-love'>+&nbsp;关注</p>
                                        <p className='p-cont'>写了{ item.get('worldNums') }字&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ item.get('loverNums') }喜欢</p>
                                    </ContentItemInfo>
                                </WriteContentItem>
                            )
                        })
                    }
                    <WButton>查看全部&nbsp;&nbsp;></WButton>
                </WriteContent>
            </WriteWrapper>
        )
    }
    componentDidMount() {
        this.props.getList();
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'writeList'])
})

const mapDispatch = (dispatch) => ({
    getList() {
        dispatch(actionCreators.getWriterList());
    }
})

export default connect(mapState, mapDispatch)(Write);