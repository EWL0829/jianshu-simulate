import React, { PureComponent } from 'react';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './styled';
import Topic from './components/Topics';
import AppDownload from './components/DownloadApp';
import Writers from './components/Writer';
import List from './components/List';
import Recommend from './components/Recommend';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Home extends PureComponent {
  // 回到顶部
  handleBackTop = () => {
    window.scrollTo(0, 0);
  };


  componentDidMount() {
    // 由于Home组件是一个UI层面组件，所以不应该有太多的业务逻辑在里面，如果有，就要像本节这样抽取到props中的方法内部
    this.props.changeHomeData();
    this.bindEvents();
  }

  bindEvents = () => {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      this.props.checkScrollTop(scrollY);
    });
  };

  // 之前在React工程中很少遇到直接给window绑定事件的情况，此次要谨记，给window绑定对象之后，如果失去了
  componentWillUnmount() {
    window.removeEventListener('scroll', () => {
      const scrollY = window.scrollY;
      this.props.checkScrollTop(scrollY);
    });
  }

  render() {
    const { showScrollBtn } = this.props;

    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' src="https://upload.jianshu.io/admin_banners/web_images/4528/cfbfae092b2d7f29a4bc52e906dfd89a5e8ac16d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="图片加载失败" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <AppDownload />
          <Writers />
        </HomeRight>
        {
          showScrollBtn ? <BackTop onClick={this.handleBackTop}>顶部</BackTop> : null
        }
      </HomeWrapper>
    );
  }
}

// mapDispatchToProps属于容器组件，我们应该让容器组件去做逻辑处理，但是同时我们使用了redux-thunk，所以应该将异步操作放在action中管理
const mapDispatchToProps = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action); // 此处的action实际上是一个函数，而非之前的对象，但是由于redux-thunk中间件的存在，所以action的类型可以是函数
  },
  checkScrollTop(scrollY) {
    const action = actionCreators.checkScrollTop(scrollY);
    dispatch(action);
  }
});

const mapStateToProps = (state) => {
  return ({
    showScrollBtn: state.getIn(['home', 'showScrollBtn']),
    scrollY: state.getIn(['home', 'scrollY']),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);