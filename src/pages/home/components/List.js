import React, { Component } from 'react';
import { ListItem, ListInfo } from '../styled';
import { connect } from 'react-redux';

class List extends Component {
  render() {
    const { list } = this.props;
    return (
      <div>
          {
            list.map(item => (
                <ListItem key={item.get('id')}>
                    <img className="list-img" src={item.get('imgUrl')} alt=""/>
                    <ListInfo>
                        <h3 className="title">{item.get('title')}</h3>
                        <p className="extract-para">
                            {item.get('subTitle')}
                        </p>
                    
                    </ListInfo>
                </ListItem>
            ))
          }
          
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return (
        {
            list: state.getIn(['home', 'articleList'])
        });
};
export default connect(mapStateToProps, null)(List);