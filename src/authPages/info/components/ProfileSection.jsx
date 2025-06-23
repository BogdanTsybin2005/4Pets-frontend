export default function ProfileSection({ user }) {
    const avatar = user?.avatar;
    const avatarStyle = avatar ? { backgroundImage: `url(${avatar})` } : {};
 
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
                </div>
            </div>
        </section>
    );
}
