import React, {Component} from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem } from '../styled';
class Recommend extends Component {
  render() {
    const { list } = this.props;
    return (
      <RecommendWrapper>
          {
            list.map(item => {
                return (
                    <a href={item.get('contentUrl')} key={item.get('id')} target="_blank">
                        <RecommendItem imgUrl={item.get('imgUrl')} />
                    </a>
                )
            })
          }
      </RecommendWrapper>
    );
  }
}
const mapStateToProps = (state) => {
    return {
        list: state.getIn(['home', 'recommendList'])
    };
};
export default connect(mapStateToProps)(Recommend);