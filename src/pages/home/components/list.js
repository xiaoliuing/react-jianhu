import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store';
import {
    ListItem,
    ListItemInfo,
    LoadMore
} from '../style';
class List extends PureComponent {

    componentDidMount = () => {
        console.log(this.props);
    }

    render() {
        const { list, page, handleMoreList } = this.props;
        return (
            <div>
                {
                    list.map((item, index) => {
                        return (
                            <Link to={'/details/' + item.get('id')} key={ index }>
                                <ListItem>
                                    <img className='pic' alt='' src={ item.get('imgUrl') }/>
                                    <ListItemInfo>
                                        <h3 className='title'>{ item.get('title') }</h3>
                                        <p className='cont'>{ item.get('content') }</p>
                                    </ListItemInfo>
                                </ListItem> 
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={ () => handleMoreList(page) }>阅读更多</LoadMore>
            </div>
        )
    }
}
const mapState = (state) => ({
    list: state.getIn(['home', 'listList']),
    page: state.getIn(['home', 'page'])
}) 

const mapDispatch = (dispatch) => ({
    handleMoreList(page) {
        dispatch(actionCreators.getHomeList(page))
    }
})
export default connect(mapState, mapDispatch)(List);