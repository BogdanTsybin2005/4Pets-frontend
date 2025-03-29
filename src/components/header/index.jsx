import Main4PetsLogo from "../../svg_pictures/4pets-logo"
import { NavLink } from "react-router";
import './style.css';



export default function Header() {
    return (
        <>
            <header className="header">
                <div className="header-container">
                    <Main4PetsLogo width={105} height={55}/>
                    <ul className="header-likst-block">
                        <li><NavLink className={'header-link-item'} to={'/info'}>ИНФО</NavLink></li>
                        <li><NavLink className={'header-link-item'} to={'/blog'}>БЛОГ</NavLink></li>
                        <li><NavLink className={'header-link-item'} to={'/our-team'}>ЧАТБОТ</NavLink></li>
                        <li><NavLink className={'header-link-item'} to={'/our-team'}>КАРТА</NavLink></li>
                        <li><NavLink className={'header-link-item'} to={'/our-team'}>КОНТАКТЫ</NavLink></li>
                    </ul>
                    <div className="header-button-block">
                        <NavLink to={'/login'} className={'header-button'}>Войти</NavLink>
                    </div>
                </div>
            </header>
        </>
    )
}
