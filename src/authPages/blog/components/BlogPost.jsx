import React from 'react';

export default React.memo(function BlogPost({ post }) {
  return (
    <div className="blog-post">
      <div className="post-header">
        <div className="post-user">
          <img src={post.avatar} alt="avatar" className="avatar" />
          <div>
            <strong>{post.nickname}</strong>
            <div className="post-location">{post.location}</div>
          </div>
        </div>
        <div className="post-caption">{post.caption}</div>
      </div>
      <div className="post-image-block">
        <img src={post.image} alt="Post" className="post-image" loading="lazy" />
        <div className="post-overlay-text">
          {post.text.map((p, idx) => (
            <p key={idx} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>
      </div>
      <div className="post-actions">
        <button>♡</button>
        <button>✉️</button>
        <button>📍</button>
        <button>•••</button>
      </div>
    </div>
  );
});
