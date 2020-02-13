import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { 
    TopicWrapper,
    TopicWrapperItem
} from '../style';

class Types extends PureComponent {
    render() {
        const { list } = this.props;
        return (
            <TopicWrapper>
                {
                    list.map((item) => {
                        return (
                            <TopicWrapperItem key={item.get('id')}>
                                <img className='topicItem-pic' alt='' src={item.get('imgUrl')} />
                                {item.get('title')}
                            </TopicWrapperItem>
                        )
                    })
                }           
            </TopicWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'topicList'])
})

export default connect(mapState, null)(Types);