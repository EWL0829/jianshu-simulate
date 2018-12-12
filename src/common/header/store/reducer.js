import * as constants from './constants';
// fromJS方法，把一个js对象转换成一个immutable对象
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    list: [],
    page: 0,
    totalPage: 1,
    mouseIn: false,
});


// reducer传出的一定是一个纯函数，由固定的输入一定会有固定的输出，且不会修改输入的内容
export default (state = defaultState, action) => {

    switch(action.type) {
        case constants.SEARCH_FOCUS:
            return state.set('focused', true);
        case constants.SEARCH_BLUR:
            return state.set('focused', false);
        case constants.CHANGE_LIST:
            return state.merge({
                'list': action.data,
                'totalPage': action.totalPage
            });
        case constants.MOUSE_ENTER:
            return state.set('mouseIn', true);
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn', false);
        case constants.CHANGE_PAGE:
            return state.set('page', action.page);
        default: 
            return state;
    }

};