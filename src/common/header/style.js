import styled from 'styled-components';
import logoImg from '../../statics/nav-logo.png';
export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
    href: '/'
})`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${logoImg}) top left/ 100% auto no-repeat;
`;

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
    padding: 0 15px;
`;

export const NavItem = styled.div`
    height: 100%;
    line-height: 26px;
    padding: 15px;
    font-size: 17px;
    box-sizing: border-box;
    &.left {
        float: left;
    }
    &.right {
        float: right;
    }
    &.active {
        color: #ea6f5a;
    }
    &.log-in {
        font-size: 15px;
        color: #969696;
        cursor: pointer;
    }
    &.font-change {
        cursor: pointer;x
    }
    &.download-APP:hover {
        background: #eee;
        cursor: pointer;
    }
    &.search-box {
        position: relative;
    }
    
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索',
})`
    width: 240px;
    height: 38px;
    border-radius:19px;
    outline:none;
    border: 1px solid #eee;
    background: #eee;
    padding: 0 40px 0 20px; 
    margin: -5px 0 0 0;
    font-size: 14px;
    box-sizing: border-box;
    color: #a0a0a0;
    font-weight: 400;
    &::placeholder {
        color: #999;
    }
    &.slide-enter {
        transition: all .5s ease-out;
    }
    &.slide-enter-active {
        width: 320px;
    }
    &.slide-enter-done {
        width: 320px;
    }
    &.slide-exit {
        transition: all .5s ease-out;
    }
    &.slide-exit-active {
        width: 240px;
    }
    &.slide-exit-done {
        width: 240px;
    }

`
export const SearchInfo = styled.div`
    position: absolute;
    left: 20px;
    top: 57px;
    width: 250px;
    // height: 100px;
    background: red;
    padding: 20px 20px 10px;
    border-bottom: 1px solid #f0f0f0;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    border-radius: 4px;
    &:before {
        content: "";
        left: 20px;
        width: 25px;
        height: 25px;
        transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        top: -5px;
        // z-index: -1;
        position: absolute;
        background-color: #fff;
        // box-shadow: 0 0 8px rgba(0,0,0,.2);
        box-sizing: border-box;

    }
`
export const SearchInfoTitle = styled.div`
    height: 20px;
    line-height: 20px;
    margin: 0 0 10px 0;
    color: #969696;
    font-size: 14px;
`
export const SearchInfoSwitch = styled.div`
    height: 20px;
    line-height: 20px;
    margin: 0 0 10px 0;
    float: right;
    cursor: pointer;
    font-size: 13px;
    user-select: none;
    &:hover {
        color: #2f2f2f;
    }
    
    .spin {
        display: block;
        float:left;
        vertical-align: middle;
        transition: all .3s ease-in;
        transform-origin: center center;
    }
`

export const SearchInfoList = styled.div`
    overflow: hidden;
`

export const SearchInfoItem = styled.a`
    display: inline-block;
    line-height: 20px;
    cursor: pointer;
    padding: 0 6px;
    font-size: 12px;
    color: #969696;
    border: 1px solid #ddd;
    border-radius: 3px;
    margin: 0 10px 10px 0;
    &:hover {
        color: #333;
        border-color: #b4b4b4;
    }
`

export const Addition = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 56px;
`
export const Button = styled.button`
    float: right;
    line-height: 38px;
    border-radius: 20px;
    margin: 9px 20px 0 0;
    font-size: 15px;
    padding: 0 20px;
    box-sizing: border-box;
    border: 1px solid #ec6149;
    color: #ea6f5a;
    cursor: pointer;
    &.sign-up:hover {
        background: rgba(236,97,73,.05);
    }
    &.write-btn {
        color: #fff;
        background: #ea6f5a;
        &:hover {
            background: #ec6149;
        }
    }
`

export const Icon = styled.i`
    display: inline-block;
    font-size: 20px!important;
    margin: 0 5px 0 0;
    &.magnifier {
        position: absolute;
        top: 15px;
        right: 16px;
        cursor: pointer;
        color: #969696;
        font-size: 16px!important;
        width:27px;
        height:27px;
        line-height: 27px;
        text-align: center;
        &.active {
            background: #999;
            border-radius: 50%;
            color: #fff;
        }
    }
`












