import React from 'react';



export default function ProfileSection({ user }) {
    const avatarStyle = user?.avatar
        ? { backgroundImage: `url(${user.avatar})` }
        : {};

    return (
        <section className="info-header">
            <div className="info-header__banner new-graphics" />
            <div className="info-header__profile new-layout">
                <div className="info-header__avatar-wrapper">
                    <div className="info-header__avatar colorful-border" style={avatarStyle} />
                </div>
                <div className="info-header__details">
                    <div className="info-header__name gradient-text">{user?.username}</div>
                    {user?.city && <div className="info-header__role role-highlight">{user.city}</div>}
                    {user?.email && <div className="info-header__role role-highlight">{user.email}</div>}
                    {user?.contact && <div className="info-header__role role-highlight">{user.contact}</div>}
                    <button className="info-header__subscribe animated-button">📩 Написать / Подписаться</button>
                </div>
            </div>
        </section>
    );
}