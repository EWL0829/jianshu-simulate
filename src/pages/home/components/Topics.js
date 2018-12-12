import React, { Component } from 'react';
import { TopicWrapper, TopicItem } from '../styled';
import { connect } from 'react-redux';
class Topic extends Component {

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

const mapStatetoProps = (state) => {
  return {
    list: state.getIn(['home', 'topicList']),
  }
};

export default connect(mapStatetoProps, null)(Topic);