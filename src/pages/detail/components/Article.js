import React, { PureComponent } from 'react';
// import Author from './Author';

export default class Article extends PureComponent {
  render() {
    const { articleTitle, articleContent, isFree } = this.props;
    
    return (
      <Article>
        <h1 className='title'>{articleTitle}</h1>
        {/*<Author articleAuthor={articleAuthor}/>*/}
        {
          isFree
            ? <div className="article-con show-free">{articleContent}</div>
            : <div className="article-con show-paid">paid</div>
        }
      </Article>
    )
  }
}