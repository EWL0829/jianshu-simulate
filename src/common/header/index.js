import React, { Component } from 'react';
import { actionCreators } from './store';
import { actionCreators as LogInActionCreators } from '../../pages/signIn/store';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button,
    Icon,
} from './style';


// Header是一个无状态组件
class Header extends Component {

    getListArea = () => {
        const {
            list,
            focused,
            page,
            totalPage,
            mouseIn,
            handleMouseEnter,
            handleMouseLeave,
            handlePageChange,
        } = this.props;
        // 需要使用immutable的方法将immutable对象转换为一般的Js对象
        const newList = list.toJS();
        const pageList = [];

        if (newList.length > 0) {
            for (let i = page * 10; i < (page + 1) * 10; i++) {
                newList[i] !== undefined && pageList.push(newList[i]);
            }
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handlePageChange(page, totalPage, this.spinIcon)}>
                            <i ref={(icon) => {
                                this.spinIcon = icon
                            }} className='iconfont spin'>&#xe88c;</i>
                            换一换
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            pageList.map((item, index) => {
                                return (
                                    <SearchInfoItem key={item}>{item}</SearchInfoItem>
                                )
                            })
                        }
                    </SearchInfoList>
                </SearchInfo>
            );
        } else {
            return null;
        }
    };

    linkTo = (link) => {
        const { history } = this.props;
        history.push(link);
    };

    render () {
        const { focused, handleSearchFocus, handleSearchBlur, list, login, logOut } = this.props;
        console.log('signIn', login);
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo/>
                </Link>
                <Nav>
                    <NavItem className='left active'>
                        <Icon className='iconfont'>&#xe604;</Icon>
                        首页
                    </NavItem>
                    <NavItem className='left download-APP'>
                        <Icon className='iconfont'>&#xe666;</Icon>
                        下载App
                    </NavItem>
                    <NavItem className='left search-box'>
                        <CSSTransition
                            timeout={500}
                            in={focused}
                            classNames='slide'
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => handleSearchFocus(list)}
                                onBlur={handleSearchBlur}
                            >
                            </NavSearch>
                        </CSSTransition>
                        <Icon className={`iconfont magnifier ${focused ? 'active' : ''}`}>&#xe618;</Icon>
                        {
                            this.getListArea(focused)
                        }
                    </NavItem>
                    {
                        !login ?
                            <NavItem className='right log-in' onClick={() => this.linkTo('/sign_in')}>登录</NavItem> :
                            <NavItem className='right log-in' onClick={() => logOut()}>退出</NavItem>
                    }
                    <NavItem className='right font-change'>
                        <Icon className='iconfont' style={{ fontSize: '20px', color: '#969696' }}>&#xe602;</Icon>
                    </NavItem>
                </Nav>
                <Addition>
                    <Link to='/write'>
                        <Button className='write-btn'>
                            <Icon className='iconfont'>&#xe601;</Icon>
                            写文章
                        </Button>
                    </Link>
                    <Button className='sign-up' onClick={() => this.linkTo('/sign_up')}>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page'], 'notfound'),
        mouseIn: state.getIn(['header', 'mouseIn']),
        totalPage: state.getIn(['header', 'totalPage']),
        login: state.getIn(['signIn', 'isLogIn']),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleSearchFocus (list) {
            (list.size === 0) && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleSearchBlur () {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter () {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave () {
            dispatch(actionCreators.mouseLeave());
        },
        handlePageChange (page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/gi, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spin.style.transform = `rotate(${originAngle + 180}deg)`;

            if ((page + 1) < totalPage) {
                dispatch(actionCreators.changePage(page + 1));
            } else {
                dispatch(actionCreators.changePage(1));
            }
        },
        logOut () {
            dispatch(LogInActionCreators.getLogOut());
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));


















