import Main4PetsLogo from "../../svg_pictures/4pets-logo"
import { NavLink } from "react-router";
import './style.css';



export default function Header() {
    return (
        <>
            <header className="header">
                <div className="header-container">
                    <div className="header-block">
                        <Main4PetsLogo width={45} height={24}/>
                    </div>
                    <div className="header-block">
                        <NavLink to={'/info'}>Инфо</NavLink>
                        <NavLink to={'/blog'}>Блог</NavLink>
                        <NavLink to={'/our-team'}>Наша команда</NavLink>
                        <NavLink to={'/contacts'}>Контакты</NavLink>
                    </div>
                    <div className="header-block"></div>
                </div>
            </header>
        </>
    )
}
