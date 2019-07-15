import * as constants from './constants';
// fromJS方法，把一个js对象转换成一个immutable对象
import { fromJS } from 'immutable';

const defaultState = fromJS({
    imgList: [
        'https://upload.jianshu.io/admin_banners/web_images/4601/3f4d6684a208a27d92ea7b5b9759c9dc5049d4c0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
        'https://upload.jianshu.io/admin_banners/web_images/4605/1d5cb81933dbb48ab0aa53d481a1300fc5406e7f.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
        'https://upload.jianshu.io/admin_banners/web_images/4606/5d7f5855af24cb8cd161f37d9f9af47342714f34.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
        'https://upload.jianshu.io/admin_banners/web_images/4588/c9d175a9865206d371742d53c41ed4a042c5d00b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
        'https://upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
    ],
    imgListPage: 0,
});

export default (state = defaultState, action) => {
    switch(action.type) {
        // case constants.TURN_SLIDER_PAGE:
        //     return state.set('page', action.imgListPage);
        default:
            return state;
    }
};
