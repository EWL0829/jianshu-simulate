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