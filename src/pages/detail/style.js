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

export const AuthorWrap = styled.div`
  margin: 30px 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftAuthorInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  .detail-item {
    line-height:24px;
    
    &.article-info {
      color: #aaa;
      font-size: 12px;
    }
    
    .article-info-item {
      margin: 0 10px 0 0;
    }
  }
`;

export const AvatarImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin: 0 15px 0 0;
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

export const Reward = styled.div`
  margin: 50px 0 60px;
  text-align: center;
  
  .reward-title {
    font-size: 18px;
    font-weight: bold;
    color: #a9a9a9;
  }
  
  .reward-btn {
    margin: 15px 0 0;
    background: #ea6f5a;
    color: #fff;
    font-size: 16px;
    padding: 5px 20px;
    box-sizing: border-box;
  }
`;

export const CopyRight = styled.div`
  text-align: center;
  color: #bbb;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  margin: 0 0 40px;
`;

export const AuthorInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #f5f5f5;
  width: 100%;
  padding: 20px;
  margin: 0 0 30px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #ddd;
  color: #aaa;
  
  .author-detail-name {
    color: #000;
    margin: 0 0 10px;
  }
  
  .article-info {
    font-size: 12px;
  }
`;

export const OperationSet = styled.div`
  margin: 0 0 40px;
  
`;

export const LikeBtn = styled.button`
  border: 1px solid #ea6f5a;
  color: #ea6f5a;
  background: #fff;
  padding: 15px 20px;
  box-sizing: border-box;
  border-radius: 50px;
  font-size: 20px;
  
  .iconfont {
    margin: 0 10px 0 0;
    font-size: 20px;
  }
`;

export const Advertise = styled.img`
  display: block;
  width: 100%;
  margin: 0 0 20px;
`;