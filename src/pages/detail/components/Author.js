import React, { PureComponent } from 'react';
import { AuthorWrap, LeftAuthorInfo, AvatarImg } from '../style';
import { withRouter } from 'react-router-dom';

class Author extends PureComponent {
    constructor (props) {
        super(props);
    }

    // 编辑文章
    toEdit = () => {
        this.props.history.push('/write');
    };

    render () {
        const {
            author,
            avatar,
            dateInfo,
            timeInfo,
            wordNumber,
            commentNumber,
            readNumber,
            likedNumber
        } = this.props;

        return (
            <AuthorWrap>
                <LeftAuthorInfo className="left-author-info">
                    <AvatarImg className='avatar-img' src={avatar} alt=""/>
                    <div className='author-detail-info'>
                        <div className="author-name detail-item">{author}</div>
                        <div className="article-info detail-item">
                            <span className="article-info-item date">{dateInfo}</span>
                            <span className="article-info-item time">{timeInfo}</span>
                            <span className="article-info-item word-num">字数 {wordNumber}</span>
                            <span className="article-info-item read-num">阅读量 {commentNumber}</span>
                            <span className="article-info-item comment-num">评论 {readNumber}</span>
                            <span className="article-info-item liked-num">喜欢 {likedNumber}</span>
                        </div>
                    </div>
                </LeftAuthorInfo>
                <div className="right-author-info">
                    <button className="edit-article-btn rounded-button" onClick={this.toEdit}>编辑文章</button>
                </div>
            </AuthorWrap>
        )
    }
}

export default withRouter(Author);