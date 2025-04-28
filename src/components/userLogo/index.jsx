import './style.scss';


export default function UserLogo({image, logoSize=163}) {
    return <div className="user-logo-block" style={{width: logoSize, height: logoSize}}>
        {image && <img src={image} alt="User Logo" className="user-logo" />}
    </div>
}