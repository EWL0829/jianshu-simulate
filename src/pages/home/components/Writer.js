import React, { PureComponent } from 'react';
import { WriterItem, RecommendWritersBox, RecommendWritersTitle } from '../styled';
import { connect } from 'react-redux';

class Writers extends PureComponent {
  render() {
    const { list } = this.props;

    return (
      <RecommendWritersBox>
        <RecommendWritersTitle>
          <span className="writer-name">推荐作者</span>
          <span className="update-writers">换一批</span>
        </RecommendWritersTitle>
        {
          list.map(item => (
            <WriterItem key={item.get('id')}>
              <span className="writer-avatar">
                <img src={item.get('imgUrl')} alt="加载失败" />
              </span>
              <div className="writer-info">
                <div className="writer-info-name">{item.getIn(['writerInfo', 'name'])}</div>
                <div className="writer-info-works">写了{item.getIn(['writerInfo', 'writeNum'])}字.{item.getIn(['writerInfo', 'loveNum'])}喜欢</div>
              </div>
              <div className="focus-writer">
                +关注
              </div>
            </WriterItem>
          ))
        }
        <a target="_blank" rel="noopener noreferrer" href="https://www.jianshu.com/recommendations/users?utm_source=desktop&utm_medium=index-users" className="check-all-writers">查看全部</a>
      </RecommendWritersBox>
    );
  }
}

const mapStateToProps = (state) => {
    return (
      {
        list: state.getIn(['home', 'recommendWriterList'])
      }
    );
};

export default connect(mapStateToProps, null)(Writers);