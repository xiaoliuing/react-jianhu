import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { GlobalStyle } from './../../style';
import { Iconfonts } from '../../static/iconfonts/iconfont';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import { 
    HeaderWrapper,
    Logo,
    Navbar,
    Navbaritem,
    NavWropper,
    NavSearch,
    SearchInfo,
    ToInputDiv,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoListItem,
    Addition,
    Button
} from './style';

//（1）页面第一种写法
class Header extends PureComponent {
    getSearchInfo() {
        const { focused, list, page, totalPage,  mouseEnter, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        const pageList = [];
        const newList = list.toJS();  //将immutable类型的数组（不能被“list[i]”遍历出来）,得转换成普通数组
        if(newList.length) {
           for(let i= (page - 1) * 10; i < page * 10; i ++ ) {
                pageList.push(
                    <SearchInfoListItem key={ newList[i] }>{ newList[i] }</SearchInfoListItem>
                )
            } 
        }
        
        if(focused || mouseEnter) {
            return (
                <SearchInfo 
                    onMouseEnter={ handleMouseEnter }
                    onMouseLeave={ handleMouseLeave }
                >
                    <ToInputDiv />
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={ () => handleChangePage(page, totalPage, this.spinIcon)}>
                            <i ref={(icon) => {this.spinIcon = icon}} className='iconfont spin'>&#xe678;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}               
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }
    render() {
        const { focused, list, login, handleInputFocus, handleInputBlur, loginOut, registerTo, loginTo } = this.props;
        return (
            <HeaderWrapper>
                <GlobalStyle />
                <Link to='/'>
                    <Logo/>
                </Link>
                <Iconfonts />
                <Navbar>
                    <Navbaritem className='left active'>首页</Navbaritem>
                    <Link to="/downloadapp"><Navbaritem className='left' >下载App</Navbaritem></Link>
                    { 
                        login ? <Navbaritem className='right fontsize' onClick={ loginOut }>退出</Navbaritem> : 
                        <Link to='/login'><Navbaritem className='right fontsize' onClick={ loginTo } >登录</Navbaritem></Link> 
                    }
                    <Navbaritem className='right'><i className='iconfont'>&#xe6af;</i></Navbaritem>                
                    <NavWropper>
                        <CSSTransition
                            in={focused}
                            timeout={400}
                            classNames='slide'
                        >
                            <NavSearch className={focused ? 'focused' : ''} 
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            >
                            </NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe609;</i>
                        { this.getSearchInfo() }
                    </NavWropper>
                </Navbar>
                <Addition>
                    <Link to='/writer'>
                        <Button className='write' onClick={ loginTo }>
                            <i className='iconfont'>&#xe616;</i>                        
                            写文章
                        </Button>
                    </Link>
                    <Link to='/login'>
                        <Button className='reg' onClick={ registerTo }>注册</Button>
                    </Link>
                </Addition>
            </HeaderWrapper>
        )
    }  
}
//（2）页面第二种写法（无状态组件）
// const getSearchInfo = (show) => {
//     if(show) {
//         return (
//             <SearchInfo>
//                 <SearchInfoTitle>
//                     热门搜索
//                     <SearchInfoSwitch>换一批</SearchInfoSwitch>
//                 </SearchInfoTitle>
//                 <SearchInfoList>
//                     <SearchInfoListItem>教育</SearchInfoListItem>
//                     <SearchInfoListItem>叫傲</SearchInfoListItem>
//                     <SearchInfoListItem>完全</SearchInfoListItem>
//                     <SearchInfoListItem>饿巍</SearchInfoListItem>
//                     <SearchInfoListItem>威尔</SearchInfoListItem>
//                     <SearchInfoListItem>测试</SearchInfoListItem>
//                 </SearchInfoList>
//             </SearchInfo>
//         )
//     }else{
//         return null;
//     }
// }

// const Header = (props) => {
//     const { focused, handleInputFocus, handleInputBlur } = props;
//     return (
//         <HeaderWrapper>
//             <GlobalStyle />
//             <Logo/>
//             <Iconfonts />
//             <Navbar>
//                 <Navbaritem className='left active'>首页</Navbaritem>
//                 <Navbaritem className='left'>下载App</Navbaritem>
//                 <Navbaritem className='right fontsize'>登录</Navbaritem>
//                 <Navbaritem className='right'><i className='iconfont'>&#xe6af;</i></Navbaritem>                
//                 <NavWropper>
//                     <CSSTransition
//                         in={focused}
//                         timeout={400}
//                         classNames='slide'
//                     >
//                         <NavSearch className={focused ? 'focused' : ''} 
//                             onFocus={handleInputFocus}
//                             onBlur={handleInputBlur}
//                         >
//                         </NavSearch>
//                     </CSSTransition>
//                     <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe609;</i>
//                     { getSearchInfo(focused) }
//                 </NavWropper>
//             </Navbar>
//             <Addition>
//                 <Button className='write'>
//                     <i className='iconfont'>&#xe616;</i>                        
//                     写文章
//                 </Button>
//                 <Button className='reg'>注册</Button>
//             </Addition>
//         </HeaderWrapper>
//     )
// }

const mapStateToProps = (state) => {
    return {
        //focused: state.header.get('focused')       //immutable
        //focused: state.get('header').get('focused')  //redux-immtable
        focused: state.getIn(['header','focused']),     //redux-immtable,等价于上一行写法
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseEnter: state.getIn(['header', 'mouseEnter']),
        login: state.getIn(['login', 'loginState'])            
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            //(1)第一种写法
            // if(list.size === 0) {
            //    dispatch(actionCreators.getListItemJson()); 
            // } 
            //（2）第二种写法
            (list.size === 0) && dispatch(actionCreators.getListItemJson());         
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage, spin) {
            //过滤transform属性中非数字部分，得到纯数字
            console.log(spin);
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, ''); 
            if(originAngle) {
                originAngle = parseInt(originAngle, 10); //字符串转换成十进制数
            }else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate('+ (originAngle + 360) +'deg)';
            if(page < totalPage) {
                dispatch(actionCreators.clickChangePage(page + 1));
            }else {
                dispatch(actionCreators.clickChangePage(1));
            }
        },
        loginOut() {
            dispatch(loginActionCreators.loginOut());
        },
        registerTo() {
            dispatch(loginActionCreators.registerGoTo());
        },
        loginTo() {
            dispatch(loginActionCreators.loginGoTo());
        }
    }
}
export default connect(mapStateToProps , mapDispatchToProps)(Header);