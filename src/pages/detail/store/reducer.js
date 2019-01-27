import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    title: '',  // 详情页标题
    author: '', // 详情页作者
    content: '',
});

const getDetailInfo = (state, action) => {
    return state.merge({
       title: action.title,
       author: action.author,
       content: action.content,
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