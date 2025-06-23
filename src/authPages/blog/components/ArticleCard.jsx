import React, { useState } from 'react';


export default React.memo(function ArticleCard({ article }) {
    const [expanded, setExpanded] = useState(false);

    const handleMore = () => setExpanded(!expanded);
    const body = expanded
        ? article.body.replace('<span class="more">ещё</span>', '')
        : article.body;

    return (
        <div className="article-card">
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
                    Читать далее
                </button>
            )}
        </div>
    );
});