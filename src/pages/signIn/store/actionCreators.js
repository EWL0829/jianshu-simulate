import axios from "axios";
import * as constants from './constants';

const logIn = () => ({
    type: constants.GET_LOG_IN,
    logInStatus: true,
});

const showErrMsg = (params) => ({
    type: constants.SHOW_ERR_MSG,
    errMsg: params.errMsg,
});

export const getLogIn = (account, password) => {
    if (!account && !password) {
        return (dispatch) => {
            dispatch(showErrMsg({
                errMsg: '账户名或密码为空',
            }));
        }
    }
    return (dispatch) => {
        axios.get(`/api/login.json?account=${account}&password=${password}`).then((res) => {
            const result = res.data.data;
            const { code } = result;
            if (code === 0) {
                dispatch(logIn());
            }
        });
    };
};

export const getLogOut = () => ({
    type: constants.GET_LOG_OUT,
    logInStatus: false,
});