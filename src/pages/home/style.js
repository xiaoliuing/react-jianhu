import styled from 'styled-components';
import advertImg from '../../static/images/advert.jpg';

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
    padding-top: 56px;
`;

export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    width: 625px; 
`;

export const AutoPlayImg = styled.div`
    position: relative;
    width: 625px;
    height: 270px;
    line-height: 270px;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    .right-left {
        position: absolute;
        top: 115px;
        width: 40px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: #fff;
        background: #000;
        cursor: pointer;        
        font-size: 20px;
    }
    .hide {
        opacity: 0;
    }
`;

export const SwitchRight = styled.div`
    right: 0;
    border-radius: 4px 0 0 4px;
    opacity: 0.6;
    
`;

export const SwitchLeft = styled.div`
    left: 0;
    border-radius: 0 4px 4px 0;
    opacity: 0.6;
`;

export const AutoPlayImgUl = styled.ul`
    width: 9999px;
    height: 270px;
`;

export const AutoPlayImgItemLi = styled.li`
    width: 625px;
    height: 100%;
    float: left;
    img {
        width: 625px;
        height: 100%;
    }
`;

export const SwitchOl = styled.ol`
    position: absolute;
    bottom: 20px;
    left: 267.5px;
`;

export const SwitchLi = styled.li`
    width: 20px;
    height: 2px;
    border-radius: 1px;
    background: #000;
    opacity: 0.6;
    float: left;
    margin: 0 5px;
    cursor: pointer;
    &.active {
        background: #fff;
    }
`;

export const HomeRight = styled.div`
    width: 280px;
    float: right;
`;

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px; 
    border-bottom: 1px solid #dcdcdc
`;

export const TopicWrapperItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    margin-left: 18px;
    margin-bottom: 10px;
    font-size: 14px;
    background: #f7f7f7;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    padding-right: 10px;
    .topicItem-pic {
        width: 32px;
        height: 32px;
        margin-right: 10px;
        display: block;
        float: left
    }
`; 

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        width: 150px;
        height: 100px;
        display: block;
        float: right;
        border-radius: 4px;
    }
`;

export const ListItemInfo = styled.div`
    width: 458px;
    float: left;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .cont {
        line-height: 24px;
        font-size: 13px;
        color: #999
    }
`;

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 30px 0;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    font-size: 15px;
    cursor: pointer
`;

export const CommendWrapper = styled.div`
    margin: 27px 0 14px 0;
    width: 280px;
`;

export const CommendWrapperItem = styled.div`
    width: 280px;
    height: 50px;
    margin-bottom: 6px;
    background: url(${(props) => props.imgUrl});
    background-size: contain
`;

export const CodeWrapper = styled.div`
    position: relative;
    width: 280px;
    padding: 10px 20px;
    box-sizing: border-box;
    border: 1px solid #F0F0F0;
    border-radius: 5px;
    cursor: pointer;
    .code-pic {
        display: block;
        float: left;
        width: 60px;
        height: 60px;
    }
`;

export const CodePngShow = styled.div`
    position: absolute;
    top: -195px;
    left: 50px;
    padding: 10px;
    background-color: #fff;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    box-shadow: 0px 6px 5px #dcdcdc;
    .showCode-png {
        width: 160px;
        height: 160px;
    }
`;

export const Div = styled.div`
    position: absolute;
    bottom: -8.5px;
    left: 83px;
    width: 14px;
    height: 14px;
    background-color: #fff;
    border-right: 1px solid #dcdcdc;
    border-bottom: 1px solid #dcdcdc;
    transform: rotate(45deg);
`;

export const CodeWrapperText = styled.div`
    height: 60px;
    line-height: 25px;
    padding: 5px 0;
    margin-left: 75px;
    box-sizing: border-box;
    .title {
        font-size: 15px;
    }
    .cont {
        font-size: 13px;
        color: #999  
    }
`;

export const AdvertWrapper = styled.div`
    overflow: hidden;
    position: relative;
    width: 280px;
    height: 160px;
    margin: 40px 0 0 0;
    background-image: url(${advertImg});
    background-size: contain;
    border-radius: 4px;
    cursor: pointer;
`;

export const AdvertDiv = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 13px;
    padding: 3px 5px;
    background: #040101;
    color: #C6BFB8
`;

export const WriteWrapper = styled.div`
    width: 280px;
    padding: 40px 0;
    color: #969696;
    font-size: 13px;
`;

export const WriteSwitch = styled.div`
    float: right;
    margin-right: 0; 
    cursor: pointer;
`;

export const WriteContent = styled.div`
    width: 280px;
    margin: 20px 0;
`;

export const WriteContentItem = styled.div`
    width: 280px;
    height: 48px;
    margin-bottom: 17px;
    img {
        display: block;
        float: left;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        cursor: pointer;
    }
    .p-love {
        display: inline;
        float: right;
        font-size: 15px;
        color: #42C02E;
        cursor: pointer;
    }
    .p-cont {
        font-size: 12px;
        color: #969696;
    }
`;

export const WButton = styled.button`
    width: 280px;
    height: 40px;
    line-height: 40px;
    border-radius: 4px;
    font-size: 14px;
    border: 1px solid #dcdcdc;
    background: #f7f7f7;
    color: #787878;
    cursor: pointer;
`;

export const ContentItemInfo = styled.div`
    color: #000;
    line-height: 22px;
    font-size: 15px;
    padding-top: 4px;
    box-sizing: border-box;
    margin-left: 58px;
    p {
        font-size: 12px;
    }
`;

export const BackTop = styled.div`
    position: fixed;
    right: 50px;
    bottom: 50px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border: 1px solid #dcdcdc;
    font-size: 40px;
    .backtop-png {
        width: 20px;
        height: 20px;
        margin: 15px
    }
`;