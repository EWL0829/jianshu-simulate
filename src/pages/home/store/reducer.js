// import * as constants from './constants';
// fromJS方法，把一个js对象转换成一个immutable对象
import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [
        {
            id: 1,
            title: '社会热点',
            imgUrl: 'https://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
        },
        {
            id: 2,
            title: '社会热点2',
            imgUrl: 'https://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
        }
    ],
    articleList: [
        {
            id: 1,
            title: '厂工，快递员、程序员纷纷晒出工资条，抱怨太累，网友回复很现实',
            subTitle: '不知不觉，2018年已经接近尾声 过去的一年，大家付出了多少？又收获了多少？ 不知道是不是生活太艰难，最近网上不同职业的员工，纷纷晒出工资条，并...',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/12050823-5dcac44ce048367e?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
        },
        {
            id: 2,
            title: '厂工，快递员、程序员纷纷晒出工资条，抱怨太累，网友回复很现实2',
            subTitle: '不知不觉，2018年已经接近尾声 过去的一年，大家付出了多少？又收获了多少？ 不知道是不是生活太艰难，最近网上不同职业的员工，纷纷晒出工资条，并...',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/10506224-94a2b1e475c77e61.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
        }
    ],
    recommendList: [
        {
            id: 1,
            imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png',
            contentUrl: 'https://www.jianshu.com/trending/weekly?utm_medium=index-banner-s&utm_source=desktop',
        }, 
        {
            id: 2,
            imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png',
            contentUrl: 'https://www.jianshu.com/trending/weekly?utm_medium=index-banner-s&utm_source=desktop',

        },
        {
            id: 3,
            imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png',
            contentUrl: 'https://www.jianshu.com/trending/weekly?utm_medium=index-banner-s&utm_source=desktop',

        },
        {
            id: 4,
            imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png',
            contentUrl: 'https://www.jianshu.com/trending/weekly?utm_medium=index-banner-s&utm_source=desktop',

        },
        {
            id: 5,
            imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png',
            contentUrl: 'https://www.jianshu.com/trending/weekly?utm_medium=index-banner-s&utm_source=desktop',
            
        }
    ]
});


// reducer传出的一定是一个纯函数，由固定的输入一定会有固定的输出，且不会修改输入的内容
export default (state = defaultState, action) => {

    switch(action.type) {
        
        default: 
            return state;
    }

};