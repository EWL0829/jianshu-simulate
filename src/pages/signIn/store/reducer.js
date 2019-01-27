import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    isLogIn: false, // 初始登录状态
    detailMsg: '',  // 成功提示
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.GET_LOG_IN:
            return state.set('isLogIn', action.logInStatus);
        case constants.GET_LOG_OUT:
            return state.set('isLogIn', action.logInStatus);
        default:
            return state;
    }
};