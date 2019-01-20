// import * as constants from './constants';
// fromJS方法，把一个js对象转换成一个immutable对象
import { fromJS } from 'immutable';
import * as constants from './constants';

// 我的一点想法，转换immutable对象时尽量将转换写在同一个文件中，防止漏写错写，或者重复转换
// 要始终记住一点，fromJS会深层次的将转换的对象转为immutable对象，对比，immutable的List方法是浅层的转换，List主要针对数组的转换
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  recommendWriterList: [],
  articlePage: 1,
  showScrollBtn: false, // 是否展示回到顶部按钮
  scrollY: 0,
});

// 为防止switch方法逐渐臃肿，可以将返回的新状态抽出来
const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),                     // 标题列表
    articleList: fromJS(action.articleList),                 // 文章列表
    recommendList: fromJS(action.recommendList),             // 推荐列表
    recommendWriterList: fromJS(action.recommendWriterList), // 推荐作者列表
  });
};

const loadMoreList = (state, action) => {
  return state.merge({
    articleList: state.get('articleList').concat(fromJS(action.articleList)),
    articlePage: action.nextPage,  // 更新页数，我的想法：会被immutable转换的只有对象一类，数字这种不会被转
  });
};

const ToggleBackTopShow = (state, action) => {
  // return state.set('showScrollBtn', action.showBackTopBtn);
  return state.merge({
    showScrollBtn: action.showBackTopBtn,
    scrollY: action.scrollY,
  });
};

// reducer传出的一定是一个纯函数，由固定的输入一定会有固定的输出，且不会修改输入的内容
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return changeHomeData(state, action);
    case constants.LOAD_MORE_LIST:
      return loadMoreList(state, action);
    case constants.CHECK_SCROLL_TOP:
      return ToggleBackTopShow(state, action);
    default:
      return state;
  }
};