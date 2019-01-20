import React, {PureComponent} from 'react';
import {TopicWrapper} from '../styled';

class TopicItem extends PureComponent {
  render() {
    return (
      <div>{this.props.itemName}</div>
    );
  }
}

export default TopicItem;