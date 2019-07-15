import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;//触发bfc，清除浮动
`;

export const HomeLeft = styled.div`
  width: 625px;
  padding-top:30px;
  margin-left: 15px;
  float: left;
  
  .banner-img {
    width: 625px;
    height: 270px;
    margin-bottom: 35px;
    border-radius: 4px;
  }
`;

export const HomeRight = styled.div`
  width: 280px;
  padding-top:30px;
  float: right;
`;

export const TopicWrapper = styled.div`
  width: 625px;
  height: 104px;
  margin-bottom: 20px;
  overflow: hidden;
  border-bottom: 1px solid #dcdcdc;
  
`;

export const TopicItem = styled.div`
  float: left;
  margin: 0 18px 18px 0;
  height: 32px;
  line-height: 32px;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  vertical-align: top;
  overflow: hidden;
  .item-img {
    float: left;
    width: 32px;
    height: 32px;
  }
  .item-name {
    display: inline-block;
    padding: 0 11px;
    font-size: 14px;
  }
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  color: #ababab;
  word-wrap: break-word;
  word-break: break-all;

  .list-img {
    display: block;
    float: right;
    width: 125px;
    height: 100px;
    border-radius: 4px;
  }
`;

export const ListInfo = styled.div`
  float: left;
  width: 500px;

  .title {
    margin: -7px 0 4px;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  .extract-para {
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
    word-wrap: break-word;
  }
`;
export const RecommendWrapper = styled.div`
  width: 280px;
  margin-top: -4px;

`;
export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
  margin-bottom: 6px;
`;
export const DownloadApp = styled.a`
  display: block;
  border: 1px solid #f0f0f0;
  width: 100%;
  background-color: #fff;
  margin-top: 12px;
  margin-bottom: 30px;
  padding: 10px 22px;
  border-radius: 6px;
  box-sizing: border-box;
  
  img {
    width: 60px;
    height: 60px;
    opacity: .85;
    vertical-align: middle;
  }
  .info {
    display: inline-block;
    margin-left: 6px;
    vertical-align: middle;
    
    .info-title {
      font-size: 15px;
      color: #333; 
    }
    .description {
      font-size: 13px;
      color: #999;
      margin-top: 4px;
    }
  }
`;

export const RecommendWritersBox = styled.div`
  margin: 0 0 20px;
  text-align: left;
  
  .check-all-writers {
    display: inline-block;
    background: #f7f7f7;
    border: 1px solid #dcdcdc;
    color: #787878;
    border-radius: 4px;
    font-size: 13px;
    width: 100%;
    padding: 10px 7px 10px 12px;
    outline: none;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    text-decoration: none;
  }
`;

export const RecommendWritersTitle = styled.div`
  display: flex;
  justify-content: space-between;
  color: #999;
  margin-bottom: 12px;
  font-size: 14px;
  
  .update-writers {
    cursor: pointer;
  }
`;
export const WriterItem = styled.div`
  margin-bottom: 12px;
  overflow: hidden;
  
  .writer-avatar {
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 8px;
   
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  
  .writer-info {
    float: left;
    margin-top: 5px;

    .writer-info-name {
      font-size: 14px;
    }
    .writer-info-works {
      color: #969696;
      font-size: 12px;
      margin-top: 2px;
    }
  }
  
  .focus-writer {
    float: right;
    margin-top: 5px;
    font-size: 13px;
    color: #42c02e; 
    cursor: pointer;
  }
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  text-align: center;
  background: #a5a5a5;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
  
  &:hover {
    background: #b1b1b1;
  }
`;

export const BackTop = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 1040;
  min-width: 50px;
  height: 50px;
  line-height: 50px;
  background: #fff;
  border: 1px solid #dcdcdc;
  transition: .1s ease-in;
  cursor: pointer;
  text-align: center;
  border-radius: 4px;
  
  &:hover {
    background: #dedede;
    transition: .1s ease-in;
    color: #fff;
  }
`;