// 返回的是一个函数形式的action，而非是一个对象
import axios from "axios";
import * as constants from './constants';

const getDetailInfo = (result) => ({
    type: constants.GET_DETAIL_INFO,
    title: result.title,
    author: result.author,
    content: result.content,
    avatar: result.avatar,
    date: result.date,
    wordNumber: result.wordNumber,
    readNumber: result.readNumber,
    commentNumber: result.commentNumber,
    likedNumber: result.likedNumber,
});

export const getDetail = (id) => {
    return (dispatch) => {
        axios.get(`/api/detail.json?id=${id}`).then((res) => {
           const result = res.data.data;
           dispatch(getDetailInfo(result));
        });
    };
};