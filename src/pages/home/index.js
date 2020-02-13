import React, { PureComponent } from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import Types from './components/types';
import Write from './components/write';
import Advert from './components/advert';
import Commends from './components/commends';
import QRCode from './components/qrcode';
import List from './components/list';
import toTopPng from '../../static/images/totop.png'
import { 
    HomeWrapper,
    HomeLeft,
    AutoPlayImg,
    SwitchLeft,
    SwitchRight,
    AutoPlayImgUl,
    AutoPlayImgItemLi,
    SwitchOl,
    SwitchLi,
    HomeRight,
    BackTop
} from './style';
class Home extends PureComponent {

    constructor(props) {
        super(props);
        this.state = ({
            imgList: [require('./../../static/images/b_1.jpg'), require('./../../static/images/b_2.jpg'), require('./../../static/images/b_3.jpg')],
            autoIndex: 0,
            playTime: 2000,
            mouseHover: false
        })
        this.toLeftImgs = this.toLeftImgs.bind(this);
        this.toRightImgs = this.toRightImgs.bind(this);
        this.mousePlayEnter = this.mousePlayEnter.bind(this);
        this.mousePlayLeave = this.mousePlayLeave.bind(this);
    }
    render() {
        const { imgList, autoIndex, mouseHover } = this.state;
        return (
            <HomeWrapper>
                <HomeLeft>
                    <AutoPlayImg
                        onMouseEnter={ this.mousePlayEnter }
                        onMouseLeave = { this.mousePlayLeave }
                    >
                        <SwitchLeft className={ mouseHover ? 'right-left' : 'right-left hide'} onClick={ this.toLeftImgs }>+</SwitchLeft>
                        <SwitchRight onClick={ this.toRightImgs } className={ mouseHover ? 'right-left' : 'right-left hide'}>+</SwitchRight>
                        <AutoPlayImgUl id='rightto'>
                            {
                                imgList.map((item, index) => {
                                    return (
                                        <AutoPlayImgItemLi key={ index }>
                                            <img alt='' src={item} />
                                        </AutoPlayImgItemLi>
                                    )
                                })
                            }
                        </AutoPlayImgUl>
                        <SwitchOl>
                            <SwitchLi className={autoIndex === 0 ? 'active showto' : 'showto'} />
                            <SwitchLi className={autoIndex === 1 ? 'active showto' : 'showto'}/>
                            <SwitchLi className={autoIndex === 2 ? 'active showto' : 'showto'}/>    
                        </SwitchOl>                  
                    </AutoPlayImg>                   
                    <Types />
                    <List name='xiaoliu'/>
                </HomeLeft>
                <HomeRight>
                    <Commends />
                    <QRCode />
                    <Advert />
                    <Write />
                </HomeRight>
                { this.props.topShow ? <BackTop onClick={this.props.backToTop}><img alt='' src={ toTopPng } className='backtop-png' /></BackTop> : ''}
            </HomeWrapper>
        )
    }


    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvevts();
        this.changeIndex();
        this.change = setInterval(()=>this.changeNum(),this.state.playTime);
    }

    changeIndex() {
        const _this = this;
        $('.showto').click(function(){
            const index = $(this).index();
            _this.setState({
                autoIndex: index
            })
            $('#rightto').stop().animate({'margin-left': -index * 625},500);
        })
    }

    changeNum() {
        const index = this.state.autoIndex;
        if( index === 2 ) {
            this.setState({
                autoIndex: 0
            })
            $('#rightto').stop().animate({'margin-left': 0 },500);
        }else {
            let num = index + 1;
            $('#rightto').stop().animate({'margin-left': -num * 625},500);
            this.setState({
                autoIndex: num
            })
        }
    }

    bindEvevts() {
        window.addEventListener('scroll', this.props.chageScrollTop)
    }




    toRightImgs() {
        if(this.state.autoIndex === 2) {
            $('#rightto').stop().animate({'margin-left': 0 },500);
            this.setState({
                autoIndex: 0
            })
            return ;
        }
        const num = this.state.autoIndex + 1;
        $('#rightto').stop().animate({'margin-left':-num*625},500);       
        this.setState({
            autoIndex: num
        })
    }

    toLeftImgs() {
        if(this.state.autoIndex === 0) {
            $('#rightto').stop().animate({'margin-left': -2 * 625 },500);
            this.setState({
                autoIndex: 2
            })
            return ;
        }     
        $('#rightto').stop().animate({'margin-left': (1 - this.state.autoIndex) * 625},500); 
        const num = this.state.autoIndex - 1;       
        this.setState({
            autoIndex: num
        })
    }

    mousePlayEnter() {
        clearInterval(this.change);
        this.setState({
            mouseHover: true
        })
    }
    mousePlayLeave() {
        this.change = setInterval(()=>this.changeNum(),this.state.playTime);
        this.setState({
            mouseHover: false
        })
    }
}




const mapState = (state) => ({
    topShow: state.getIn(['home','topShow'])
})

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getListInfo());
    },
    backToTop() {
        window.scrollTo(0,0);
    },
    chageScrollTop() {
        if(document.documentElement.scrollTop > 300) {
            dispatch(actionCreators.toTopToggle(true));
        }else {
            dispatch(actionCreators.toTopToggle(false));
        }
    }
})

export default connect(mapState, mapDispatch)(Home);