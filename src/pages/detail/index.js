import React, { Component, Fragment } from 'react';
import {
    DetailWrapper,
    DetailHeader,
    Content,
    Reward,
    CopyRight,
    AuthorInfo,
    AvatarImg,
    Advertise,
    OperationSet,
    LikeBtn
} from './style';
import Header from '../../common/header/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actionCreators } from './store';
import Author from './components/Author';

class Detail extends Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        this.props.getDetail(this.props.match.params.id);
    }

    formatTime = (t) => {
        return t < 10 ? `0${t}` : t;
    };

    render () {
        const {
            title,
            author,
            content,
            avatar,
            date,
            wordNumber,
            commentNumber,
            readNumber,
            likedNumber
        } = this.props;

        let dateStr = new Date(date);
        let year = dateStr.getFullYear();
        let month = this.formatTime(dateStr.getMonth() + 1);
        let day = this.formatTime(dateStr.getDate());

        let hour = this.formatTime(dateStr.getHours());
        let min = this.formatTime(dateStr.getMinutes());

        const dateInfo = `${year}.${month}.${day}`;
        const timeInfo = `${hour}:${min}`;

        return (
            <Fragment>
                <Header/>
                <DetailWrapper>
                    <DetailHeader>{title}</DetailHeader>
                    <Author
                        author={author}
                        avatar={avatar}
                        dateInfo={dateInfo}
                        timeInfo={timeInfo}
                        wordNumber={wordNumber}
                        commentNumber={commentNumber}
                        readNumber={readNumber}
                        likedNumber={likedNumber}
                    />
                    <Content dangerouslySetInnerHTML={{ __html: content }}/>
                    <Reward>
                        <div className="reward-title">小礼物走一走，来简书关注我</div>
                        <button className="reward-btn rounded-button">赞赏支持</button>
                    </Reward>
                    <CopyRight>
                        <span>前端日记</span>
                        <span>©️著作权归作者所有</span>
                    </CopyRight>
                    <AuthorInfo>
                        <AvatarImg className='author-info-avatar' src={avatar} alt=""/>
                        <div className='author-detail-info'>
                            <div className="author-detail-name">{author}</div>
                            <div className="article-info">
                                写了2000字，被4人关注，获得了1个喜欢
                            </div>
                        </div>
                    </AuthorInfo>
                    <OperationSet>
                        <LikeBtn>
                            <i className='iconfont icon-xin3'></i>
                            <i className="iconfont icon-zan"></i>
                            <span>喜欢</span>
                        </LikeBtn>
                    </OperationSet>
                    <Advertise src='https://cdn2.jianshu.io/assets/web/gupao-b953be49108805c4198258448895344a.jpg'/>
                </DetailWrapper>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.getIn(['detail', 'title']),
        author: state.getIn(['detail', 'author']),
        avatar: state.getIn(['detail', 'avatar']),
        date: state.getIn(['detail', 'date']),
        wordNumber: state.getIn(['detail', 'wordNumber']),
        readNumber: state.getIn(['detail', 'readNumber']),
        commentNumber: state.getIn(['detail', 'commentNumber']),
        likedNumber: state.getIn(['detail', 'likedNumber']),
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