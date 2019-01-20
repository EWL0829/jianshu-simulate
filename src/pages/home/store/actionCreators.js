// 返回的是一个函数形式的action，而非是一个对象
import axios from "axios";
import * as constants from './constants';

const changeHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList,
  recommendWriterList: result.recommendWriterList,
});

const loadMoreList = (param) => ({
  type: constants.LOAD_MORE_LIST,
  articleList: param.result,
  nextPage: param.page,
});

const checkTopY = (param) => ({
  type: constants.CHECK_SCROLL_TOP,
  showBackTopBtn: param.scrollY > 400,
  scrollY: param.scrollY,
});

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data;
      dispatch(changeHomeData(result));
    });
  };
};

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) => {
      const result = res.data.data;
      dispatch(loadMoreList({
        result,
        page: page + 1,
      }));
    });
  };
};

export const checkScrollTop = (scrollY) => {
  return (dispatch) => {
    dispatch(checkTopY({
      scrollY
    }));
  }
};