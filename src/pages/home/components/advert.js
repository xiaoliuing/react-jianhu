import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import {
    AdvertWrapper,
    AdvertDiv
} from '../style';

class Advert extends PureComponent {
    render() {
        return (
            <Link to='//www.travelzoo.com' target="_blank">
                <AdvertWrapper>
                    <AdvertDiv>广告</AdvertDiv>
                </AdvertWrapper>
            </Link>
        )
    }
}

export default Advert;