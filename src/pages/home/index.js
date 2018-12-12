import React, {Component} from 'react';
import {HomeWrapper, HomeLeft, HomeRight} from './styled';
import Topic from './components/Topics';
import Writer from './components/Writer';
import List from './components/List';
import Recommend from './components/Recommend';

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4528/cfbfae092b2d7f29a4bc52e906dfd89a5e8ac16d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="图片加载失败"/>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />

        </HomeRight>

      </HomeWrapper>
    );
  }
}

export default Home;