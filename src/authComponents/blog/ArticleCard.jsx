import React, { useMemo, useState } from 'react';
import { sanitizeHtml, sanitizeUrl } from '../../utils/security';


export default React.memo(function ArticleCard({ article, readMoreText }) {
    const [expanded, setExpanded] = useState(false);
    const safeLink = useMemo(
        () => sanitizeUrl(article.link, { defaultValue: '#', allowHash: true }),
        [article.link]
    );
    const sanitizedBody = useMemo(() => sanitizeHtml(article.body), [article.body]);

    const handleMore = () => setExpanded(!expanded);

    return (
        <div className={`article-card ${expanded ? 'expanded' : ''}`}>
            <div className="article-author">
                <strong>{article.author}</strong>
                <a href={safeLink} rel="noopener noreferrer">
                    {article.link}
                </a>
                <p className="article-date">{article.date}</p>
            </div>
            <p className="article-title">{article.title}</p>
            <p
                className="article-body"
                dangerouslySetInnerHTML={{ __html: sanitizedBody }}
            />
            {!expanded && (
                <button className="more-button" onClick={handleMore} type="button">
                    {readMoreText}
                </button>
            )}
        </div>
    );
});
