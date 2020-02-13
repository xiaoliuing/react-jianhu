import styled from 'styled-components';
import backgroundimg from '../../static/images/misc-background.png';

export const TopBox = styled.div`
  width: 100%;
  height: 504px;
  margin-top: 57px;
  padding-top: 50px;
  box-sizing: border-box;
`;

export const TopboxItem = styled.div`
  width: 960px;
  height: 450px;
  margin: 0 auto;
  padding: 0 15px;
  box-sizing: border-box;
  background: url(${backgroundimg}) no-repeat center 50px;
  background-size: 80% auto;
`;

export const TitleContent = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  .logo-img {
    width: 100px;
    height: 100px;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  .p1 {
    font-size: 30px;
    color: #333;
    line-height: 43px;
  }
  .p2 {
    font-size: 28px;
    font-weight: 200;
    color: #333;
    line-height: 34px;
  }
`;

export const ContentDiv = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  padding-top: 40px;
  box-sizing: border-box;
  .phone-img {
    width: 410px;
    height: 314px;
  }
`;

export const CodeDApp = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  .code-img {
    width: 140px;
    height: 140px; 
  }
  .p1 {
    font-size: 25px;
    color: #333;
    padding: 10px 0;
  }
  .p2 {
    font-size: 16px;
    color: #333;
    font-weight: 200;
  }
`;

export const NextImgBox = styled.div`
  width: 100%;
  height: 525px;
  padding-top: 100px;
  box-sizing: border-box;
`;

export const NextImgBoxItem = styled.div`
  width: 930px;
  height: 377px; 
  position: relative;
  margin: 0 auto;
  img {
    width: 100%;
    height: 100%;
  }
  h3 {
    font-size: 30px;
    color: #333;
    position: absolute;
    top: 20px;
    left: 80px;
  }
  h6 {
    font-size: 18px;
    color: #333;
    position: absolute;
    top: 80px;
    font-weight: 200;
    left: 80px;
  }
  h5 {
    font-size: 18px;
    color: #333;
    position: absolute;
    top: 110px;
    font-weight: 200;
    left: 80px;
  }
`;