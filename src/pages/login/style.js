import styled from 'styled-components';

export const LoginWrapper = styled.div`
    position: absolute;
    z-index: 1000;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #eee
`;

export const Logo = styled.div`
    position: absolute;
    top: 90px;
    left: 80px;
    width: 110px;
    cursor: pointer;
    img {
        width: 110px
    }
`;

export const LoginBox = styled.div`
    width: 400px;
    margin: 100px auto;
    padding: 20px 0 40px 0;
    background: #fff;
    box-shadow: 0 0 8px rgba(0, 0, 0, .1);
`;

export const LoginTitle = styled.div`
    width: 400px;
    margin: 30px 0 50px 0;
    text-align: center;
    font-weight: bold;
    color: #969696;
`;

export const LoginTitleItem = styled.div`
    display: inline;
    padding: 0 10px 10px 10px;
    margin: 0 10px;
    font-size: 18px;
    font-weight: normal;
    cursor: pointer;
    &.login-border {
        color: #ea6f5a;
        border-bottom: 2px solid #ea6f5a;
        font-weight: bold;
    }
    &:hover {
        border-bottom: 2px solid #ea6f5a;
    }
`;

export const Input = styled.input`
    display: block;
    width: 200px;
    height: 25px;
    line-height: 25px;
    padding: 0 10px;
    margin: 10px auto;
    color: #777;
    border: 1px solid #C8C8C8;
    border-radius: 2px;
`;

export const Button = styled.div`
    width: 220px;
    height: 35px;
    line-height: 35px;
    color: #fff;
    background: #3194d0;
    border-radius: 17.5px;
    margin: 10px auto;
    text-align: center;
    cursor: pointer;
    &.top-margin {
        margin-top: 20px;
    }
`;

export const TipsNews = styled.div`
    width: 220px;
    margin: 10px auto;
    padding-top: 10px;
    font-size: 13px;
    color: #969696;
    p {
        display: inline；
        float: right;
        line-height: 100%;
        cursor: pointer;
    }
    p:hover {
        color: #000
    }
`;

export const InputRadio = styled.input`
    margin: 0 5px 0 0;
`;

export const RegisterWrapper = styled.div`
    width: 220px;
    margin: 0 auto;
`;

export const RegisterTips = styled.div`
    width: 220px;
    text-align: center;
    font-size: 11px;
    color: #969696;
    p {
        margin-bottom: 5px
    }
    b {
        color: #3194D0;
        cursor: pointer;
    }
`;

