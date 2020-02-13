import React, { Component } from 'react';
import Logo from '../../static/images/misc-logo.png';
import MiscPhone from '../../static/images/misc-phone.png';
import MiscCode from '../../static/images/code.png';
import MiscImg1 from '../../static/images/misc-pic1.png';

import { 
  TopBox,
  TopboxItem,
  TitleContent,
  Title,
  ContentDiv,
  CodeDApp,
  NextImgBox,
  NextImgBoxItem
 } from './style'

class Downloadapp extends Component {
  render () {
    return (
      <div>
        <TopBox>
          <TopboxItem>

            <TitleContent>
              <img src={ Logo } alt='' className="logo-img"/>
              <Title>
                <p className="p1">创作你的创作</p>
                <p className="p2">一个优质创作社区</p>
              </Title>
            </TitleContent>

            <ContentDiv>
              <img src={ MiscPhone } alt='' className="phone-img"/>
              <CodeDApp>
                <img src={ MiscCode } alt='' className="code-img"/>
                <p className="p1">扫码下载简书App</p>
                <p className="p2">随时随地发现和创作内容</p>
              </CodeDApp>
            </ContentDiv>

          </TopboxItem>
        </TopBox>

        <NextImgBox>

          <NextImgBoxItem>
            <p>
              <h3>轻松创作精美图文</h3>
              <h6>简单优雅的设计，可以一次上传多张图片、实时保存、多</h6>
              <h5>端同步，使创作分享更方便快捷</h5>
            </p>
            <img src={ MiscImg1 } alt=''/>
          </NextImgBoxItem>
          
        </NextImgBox>
      </div>
    )
  }
}

export default Downloadapp;