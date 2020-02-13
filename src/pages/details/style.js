import styled from 'styled-components';

export const DetailWrapper = styled.div`
    width: 620px;
    margin: 0 auto;
    padding: 56px 0;
`;

export const DetailTitle = styled.div`
    margin: 50px 0 20px 0;
    font-size: 34px;
    font-weight: bold;
    color: #333
`;

export const AuthorInfo = styled.div`
    width: 620px;
    height: 48px;
    margin: 30px 0 40px 0;
    .header-img {
        display: block;
        float: left;
        width: 48px;
        height: 48px;
        border-radius: 50%
    }
`;

export const AuthorInfoName = styled.div`
    height: 48px;
    line-height: 24px;
    margin-left: 63px;
    padding: 5px 0;
    box-sizing: border-box;
    .info-things {
        font-size: 14px;
        color: #969696
    }
    .info-name {
        text-decoration: none;
        color: #000;
    }
`;

export const AuthorFollow = styled.div`
    display: inline;
    font-size: 12px;
    background: #3DB922;
    padding: 2px 8px;
    border-radius: 9px;
    color: #fff;
    margin-left: 10px;
    cursor: pointer;
    .add-span {
        font-size: 14px;
        line-height: 100%
    }
`; 

export const DetailContent = styled.div`
    color: #2f2f2f;
    p {
        margin-bottom: 35px
    }
    b {
        font-weight: bold;
    }
    img {
        width: 700px;
        margin:0 0 35px -40px;
    }
`;