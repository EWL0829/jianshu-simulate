import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    title: '',  // 详情页标题
    author: '', // 详情页作者
    content: '',
    avatar: '',
    date: null,
    wordNumber: null,
    readNumber: null,
    commentNumber: null,
    likedNumber: null,
});

const getDetailInfo = (state, action) => {
    return state.merge({
        title: action.title,
        author: action.author,
        content: action.content,
        avatar: action.avatar,
        date: action.date,
        wordNumber: action.wordNumber,
        readNumber: action.readNumber,
        commentNumber: action.commentNumber,
        likedNumber: action.likedNumber,
    });
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.GET_DETAIL_INFO:
            return getDetailInfo(state, action);
        default:
            return state;
    }
};