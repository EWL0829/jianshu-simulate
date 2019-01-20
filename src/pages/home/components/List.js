import React, { PureComponent } from 'react';
import { ListItem, ListInfo, LoadMore } from '../styled';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent {
  render() {
    const { list, getMoreList, page } = this.props;

    return (
      <div>
        {
          list.map((item, index) => (
            <Link key={index} to='/detail'>
              <ListItem>
                <img className="list-img" src={item.get('imgUrl')} alt="" />
                <ListInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="extract-para">
                    {item.get('subTitle')}
                  </p>
                </ListInfo>
              </ListItem>
            </Link>
          ))
        }
        <LoadMore onClick={() => getMoreList(page)}>查看更多</LoadMore>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
  });
};

const mapDispatchToProps = (dispatch) => ({
  getMoreList(page) {
    const action = actionCreators.getMoreList(page);
    dispatch(action);
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(List);