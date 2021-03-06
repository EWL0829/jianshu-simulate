import React, { Component } from 'react';
import { actionCreators }  from './store';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
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
            handlePageChange
        } = this.props;
        // 需要使用immutable的方法将immutable对象转换为一般的Js对象
        const newList = list.toJS();
        const pageList = [];

        if(newList.length > 0) {
            for(let i = page * 10; i < (page+1) * 10; i++) {
                newList[i] !== undefined && pageList.push(newList[i]);
            } 
        }
         
        

        if(focused || mouseIn) {
            return (
                <SearchInfo 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handlePageChange(page, totalPage, this.spinIcon)}>
                            <i ref={(icon) => {this.spinIcon = icon}} className='iconfont spin'>&#xe88c;</i>
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

    render (){
        const {focused, handleSearchFocus, handleSearchBlur, list} = this.props;
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left active'>
                        <Icon className='iconfont'>&#xe604;</Icon>
                        首页
                    </NavItem>
                    <NavItem className='left download-APP'>
                        <Icon className='iconfont'>&#xe666;</Icon>
                        下载APP
                    </NavItem>
                    <NavItem className='left search-box'>
                        <CSSTransition
                            timeout={500}
                            in={focused}
                            classNames='slide'
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={()=>handleSearchFocus(list)}
                                onBlur={handleSearchBlur}
                            >
                            </NavSearch>
                        </CSSTransition>
                        <Icon className={`iconfont magnifier ${focused ? 'active' : ''}`}>&#xe618;</Icon>
                        {
                            this.getListArea(focused)
                        }
                    </NavItem>
                    <NavItem className='right log-in'>登录</NavItem>
                    <NavItem className='right font-change'>
                        <Icon className='iconfont' style={{fontSize:'20px', color: '#969696'}}>&#xe602;</Icon>
                    </NavItem>
                </Nav>
                <Addition>
                    <Button className='write-btn'>
                        <Icon className='iconfont'>&#xe601;</Icon>
                        写文章
                    </Button>
                    <Button className='sign-up'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }

}

const mapStatetoProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list:    state.getIn(['header', 'list']),
        page:    state.getIn(['header', 'pag'], 'notfound'),
        mouseIn: state.getIn(['header', 'mouseIn']),
        totalPage: state.getIn(['header', 'totalPage']),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleSearchFocus(list) {
            const newList = list.toJS();
            if(newList.length <= 0) {
                dispatch(actionCreators.getList());
            }
            dispatch(actionCreators.searchFocus());
        },
        handleSearchBlur() {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handlePageChange(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/gi, '');
            if(originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spin.style.transform = `rotate(${originAngle + 180}deg)`;

            if((page+1) < totalPage) {
                dispatch(actionCreators.changePage(page + 1));
            } else {
                dispatch(actionCreators.changePage(1));
            }
        }
    };
};
export default connect(mapStatetoProps, mapDispatchToProps)(Header);


















