import React, { PureComponent } from 'react';
import { contents } from './store';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import detailImgOne from '../../static/images/detail1.jpg';
import { 
    DetailWrapper, 
    DetailTitle,
    AuthorInfo,
    AuthorInfoName,
    AuthorFollow,
    DetailContent 
} from './style';
 
class Details extends PureComponent {

    getNumsList(nums) {
        const _numsList = nums.toJS();
        return (
            <p className='info-things'>{ _numsList[0] }&nbsp;&nbsp;字数{ _numsList[1] }&nbsp;&nbsp;阅读 { _numsList[2] }&nbsp;&nbsp;评论 { _numsList[3] }&nbsp;&nbsp;喜欢 { _numsList[4] }</p>
        )
    }
    render() {
        const { title, headerImg, nickName, contents, numList } = this.props;
        return (
            <DetailWrapper>
                <DetailTitle>{ title }</DetailTitle>
                <AuthorInfo>
                    <Link to=''>
                        <img className='header-img' alt='' src={ headerImg } />
                    </Link>
                    <AuthorInfoName>
                        <Link to='' className='info-name'>{ nickName }</Link>
                        <AuthorFollow><span className='add-span'>+</span>&nbsp;&nbsp;关注</AuthorFollow>
                        { this.getNumsList(numList) }
                    </AuthorInfoName>
                </AuthorInfo>
                <DetailContent dangerouslySetInnerHTML={{__html: contents}}>
                </DetailContent>
            </DetailWrapper>
        )
    }
    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    headerImg: state.getIn(['detail', 'headerImg']),
    nickName: state.getIn(['detail', 'nickName']),
    numList: state.getIn(['detail', 'numList']),
    contents: state.getIn(['detail', 'contents'])
})

const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(contents.getJsonData(id));
    }
})
export default connect(mapState, mapDispatch)(withRouter(Details));