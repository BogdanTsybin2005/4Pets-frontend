import React, { useState } from 'react';


export default React.memo(function ArticleCard({ article, readMoreText }) {
    const [expanded, setExpanded] = useState(false);

    const handleMore = () => setExpanded(!expanded);
    const body = article.body;

    return (
        <div className={`article-card ${expanded ? 'expanded' : ''}`}>
            <div className="article-author">
                <strong>{article.author}</strong>
                <a href="#">{article.link}</a>
                <p className="article-date">{article.date}</p>
            </div>
            <p className="article-title">{article.title}</p>
            <p
                className="article-body"
                dangerouslySetInnerHTML={{ __html: body }}
            />
            {!expanded && (
                <button className="more-button" onClick={handleMore} type="button">
                    {readMoreText}
                </button>
            )}
        </div>
    );
});