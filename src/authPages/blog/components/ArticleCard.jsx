import React from 'react';


export default React.memo(function ArticleCard({ article }) {
    return (
        <div className="article-card">
            <div className="article-author">
                <strong>{article.author}</strong>
                <a href="#">{article.link}</a>
                <p className="article-date">{article.date}</p>
            </div>
            <p className="article-title">{article.title}</p>
            <p className="article-body" dangerouslySetInnerHTML={{ __html: article.body }} />
        </div>
    );
});