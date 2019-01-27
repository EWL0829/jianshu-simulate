import styled from 'styled-components';
import logoImg from '../../statics/sign_in_nav_logo.png';

export const SignBox = styled.div`
  height: 100%;
  min-height: 750px;
  background: #f1f1f1;
  text-align: center;
  font-size: 14px;
  
  &:before {
    content: '';
    display: inline-block;
    height: 370px;
    vertical-align: middle;
    box-sizing: border-box;
  }
`;

export const Logo = styled.div`
  width: 100px;
  height: 47px;
  position: absolute;
  top: 56px;
  margin: 0 0 0 50px;
  background: url(${logoImg}) top left/ 100% auto no-repeat;
`;

export const SignMain = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 400px;
  margin: 60px auto 0;
  padding: 50px 50px 30px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .1);
  vertical-align: middle;
`;

export const SignTitle = styled.h4`
  font-size: 18px;
  margin: 0 auto 50px;
  padding: 10px;
  font-weight: 400;
  color: #969696;
  
  .sign-tab-item {
    padding: 10px;
    color: #969696;
    
    &.active {
      font-weight: 500;
      color: #ea6f5a;
      border-bottom: 2px solid #ea6f5a;
    }
  }
  
  b {
    padding: 10px;
  }
`;

export const InputBox = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  border: 1px solid #c8c8c8;
  
  i {
    position: absolute;
    display: block;
    left: 0;
    width: 20%;
    font-size: 16px;
  }
  
  &.account {
    border-radius: 4px 4px 0 0;
    border-bottom: none;
  }
  
  &.password {
    border-radius: 0 0 4px 4px;
  }
`;

export const Input = styled.input`
  position: absolute;
  right: 0;
  margin: 0;
  width: 80%;
  height: 48px;
  line-height: 48px;
  outline: none;
  border: none;
  border-radius: 4px;
  font-size: 14px;
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 25px;
  border: none;
  outline: none;
  background: #3194d0;
  color: #fff;
  font-size: 18px;
  padding: 9px 18px;
  margin: 20px 0 0;
  cursor: pointer;
  display: block;
  box-sizing: border-box;
  
  &:hover {
    background: #187cb7;
  }
`;