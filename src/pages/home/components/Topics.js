import React, { PureComponent } from 'react';
import { TopicWrapper, TopicItem } from '../styled';
import { connect } from 'react-redux';
class Topic extends PureComponent {

  render() {
    const { list } = this.props;
    return (
      <TopicWrapper>
        {
          list.map((item, index) => (
              <TopicItem key={item.get('id')}>
                <img className="item-img"
                     src={item.get('imgUrl')}
                     alt="图片加载失败"/>
                <div className="item-name">{item.get('title')}</div>
              </TopicItem>
            )
          )
        }
      </TopicWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'topicList']),
  }
};

export default connect(mapStateToProps, null)(Topic);