import React, { PureComponent } from 'react';
import { SignBox, Logo, SignMain, SignTitle, Input, InputBox, Button } from './styled.js';
import { Link, withRouter, Redirect } from 'react-router-dom';
import classNames from 'classnames';
import { actionCreators } from './store';
import { connect } from 'react-redux';

class Sign extends PureComponent {
    constructor (props) {
        super(props);

        this.state = {
            account: '',
            password: '',
        };
    }

    render () {
        const { match, isLogIn } = this.props;
        const { url } = match;
        const isSignIn = url.indexOf('sign_in') > -1;
        const isSignUp = url.indexOf('sign_up') > -1;
        const btnCon = isSignIn ? '登录' : '注册';

        const signInClass = classNames('sign-in-tab sign-tab-item', {
            active: isSignIn,
        });
        const signUpClass = classNames('sign-up-tab sign-tab-item', {
            active: isSignUp,
        });
        const btnClass = classNames({
           'sign-in-btn': isSignIn,
           'sign-up-btn': isSignUp,
        });

        const phoneInputBox =
            isSignUp ?
                <InputBox>
                    <i className='iconfont user'>&#xe64d;</i>
                    <Input placeholder='请输入您的手机号码' innerRef={(input) => {
                        this.phoneNumber = input
                    }}/>
                </InputBox>
                : null;

        if (isLogIn) {
            return <Redirect to='/'/>;
        }
        return (
            <SignBox className="sign">
                <Link to='/'><Logo/></Link>
                <SignMain>
                    <SignTitle>
                        <div className="normal-title">
                            <Link to='/sign_in' className={signInClass}>登录</Link>
                            <b>·</b>
                            <Link to='/sign_up' className={signUpClass}>注册</Link>
                        </div>
                    </SignTitle>
                    <InputBox className='account'>
                        <i className='iconfont user'>&#xe64d;</i>
                        <Input placeholder='请输入您的账号' innerRef={(input) => {
                            this.account = input
                        }}/>
                    </InputBox>
                    {
                        phoneInputBox
                    }
                    <InputBox className='password'>
                        <i className='iconfont pwd'>&#xe62b;</i>
                        <Input placeholder='请输入您的密码' type='password' innerRef={(input) => {
                            this.password = input
                        }}/>
                    </InputBox>
                    <Button className={btnClass} onClick={() => this.props.logIn(this.account, this.password)}>{btnCon}</Button>
                </SignMain>
            </SignBox>
        )
    }
}

const mapStateToProps = (state) => ({
    isLogIn: state.getIn(['signIn', 'isLogIn']),
});

const mapDispatchToProps = (dispatch) => ({
    logIn (accountEle, passwordEle) {
        const action = actionCreators.getLogIn(accountEle.value, passwordEle.value);
        dispatch(action);
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Sign));