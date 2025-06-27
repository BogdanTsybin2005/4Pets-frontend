import './style.scss';


export default function UserLogo({ src, logoSize = 163 }) {
    return (
        <div className="user-logo-block" style={{ width: logoSize, height: logoSize }}>
            {src && <img src={src} alt="User Logo" className="user-logo" />}
        </div>
    );
}