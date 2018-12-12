import React, {Component} from 'react';
import {TopicWrapper} from '../styled';

class TopicItem extends Component {
  render() {
    return (
      <div>{this.props.itemName}</div>
    );
  }
}

export default TopicItem;