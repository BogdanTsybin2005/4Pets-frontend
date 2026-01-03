import React, { useMemo, useState } from 'react';
import { sanitizeHtml, sanitizeImageUrl } from '../../utils/security';
 
export default React.memo(function BlogPost({ post }) {
    const [liked, setLiked] = useState(false);
    const sanitizedText = useMemo(
        () => (Array.isArray(post.text) ? post.text.map((p) => sanitizeHtml(p)) : []),
        [post.text]
    );
    const avatarSrc = useMemo(() => sanitizeImageUrl(post.avatar), [post.avatar]);
    const imageSrc = useMemo(() => sanitizeImageUrl(post.image), [post.image]);

    return (
        <div className="blog-post">
            <div className="post-header">
                <div className="post-user">
                    <img src={avatarSrc} alt="avatar" className="avatar" />
                    <div>
                        <strong>{post.nickname}</strong>
                        <div className="post-location">{post.location}</div>
                    </div>
                </div>
                <div className="post-caption">{post.caption}</div>
            </div>
            <div className="post-image-block">
                <img src={imageSrc} alt="Post" className="post-image" loading="lazy" />
                <div className="post-overlay-text">
                    {sanitizedText.map((p, idx) => (
                        <p key={idx} dangerouslySetInnerHTML={{ __html: p }} />
                    ))}
                </div>
            </div>
            <div className="post-actions">
                <button
                    className={liked ? 'liked' : ''}
                    onClick={() => setLiked(!liked)}
                    type="button"
                >
                {liked ? '❤️' : '♡'}
                </button>
                <button type="button">✉️</button>
                <button type="button">📍</button>
                <button type="button">•••</button>
            </div>
        </div>
    );
});
