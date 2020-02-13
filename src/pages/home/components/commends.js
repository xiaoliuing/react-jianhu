import React, { PureComponent } from 'react';
import commPicOne from '../../../static/images/r1.png';
import commPictwo from '../../../static/images/r2.png';
import commPicThree from '../../../static/images/r3.png';
import commPicFour from '../../../static/images/r4.png';
import commPicFive from '../../../static/images/r5.png';
import {
    CommendWrapper,
    CommendWrapperItem
} from '../style';

class Commends extends PureComponent {
    render() {
        return (
            <CommendWrapper>
                <CommendWrapperItem imgUrl={ commPicOne } />
                <CommendWrapperItem imgUrl={ commPictwo } />
                <CommendWrapperItem imgUrl={ commPicThree } />
                <CommendWrapperItem imgUrl={ commPicFour } />
                <CommendWrapperItem imgUrl={ commPicFive } />
            </CommendWrapper>
        )
    }
}

export default Commends;