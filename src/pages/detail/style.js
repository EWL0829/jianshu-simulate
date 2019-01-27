import styled from "styled-components";

export const DetailWrapper = styled.div`
  width: 620px;
  margin: 0 auto;
  padding: 20px 0 40px;
  overflow: hidden;//触发bfc，清除浮动
`;

export const DetailHeader = styled.div`
  margin: 50px 0 20px 0;
  font-size: 34px;
  line-height: 44px;
  color: #333;
  font-weight: 700;
`;

export const Author = styled.div`
  margin: 30px 0 40px;
`;

export const Content = styled.div`
  color: #2f2f2f;
  font-size: 16px;
  font-weight: 400;
  word-break: break-word!important;
  
  img {
    width: 100%;
  }
  
  p {
    margin: 25px 0;
    color: #2f2f2f;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    
    b {
      font-weight: bold;
    }
  }
`;