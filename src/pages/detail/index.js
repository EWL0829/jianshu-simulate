import React, { Component, Fragment } from 'react';
import { DetailWrapper, DetailHeader, Author, Content } from './style';
import Header from '../../common/header/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actionCreators } from './store';

class Detail extends Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        this.props.getDetail(this.props.match.params.id);
    }

    render () {
        const { title, author, content } = this.props;

        return (
            <Fragment>
                <Header/>
                <DetailWrapper>
                    <DetailHeader>{title}</DetailHeader>
                    <Author>{author}</Author>
                    <Content dangerouslySetInnerHTML={{ __html: content }}/>
                </DetailWrapper>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.getIn(['detail', 'title']),
        author: state.getIn(['detail', 'author']),
        content: state.getIn(['detail', 'content']),
    };
};

const mapDispatchToProps = (dispatch) => ({
    getDetail (id) {
        const action = actionCreators.getDetail(id);
        dispatch(action);
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));