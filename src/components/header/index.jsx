import './style.scss';
import Main4PetsLogo from "../../svg_pictures/4pets-logo"
import { NavLink, Link } from "react-router";
import { useLanguageContext } from '../../context/LanguageContext';
import { LoginButton } from '../button';
import { LanguageSelect } from '../button';
import useScrollY from '../../hooks/useScrollY';



export default function Header({ scrollToFooter, isBurderActive, setIsBurgerActive, toggleBurger }) {
    const scrollY = useScrollY();
    const { allMyLanguageData, interfaceLanguage, setInterfaceLanguage } = useLanguageContext();

    return (
        <header className="header">
        <div className={`header-container ${scrollY >= 500 ? 'header-scrolled' : ''}`}>
            <Link to={'/'}>
            <Main4PetsLogo width={105} height={55} />
            </Link>
            <ul className="header-likst-block">
                {allMyLanguageData[interfaceLanguage]?.header
                    .slice(0, -1)
                    .map((item) => (
                    <li key={item.linkID}>
                        <NavLink className="header-link-item" to="/login">
                            {item.text}
                        </NavLink>
                    </li>
                ))}
                <li>
                    <button onClick={scrollToFooter}>
                    {allMyLanguageData[interfaceLanguage]?.header[4].text}
                    </button>
                </li>
            </ul>
            <div className="header-button-block">
                <LoginButton />
                <LanguageSelect
                    language={interfaceLanguage}
                    setLanguage={setInterfaceLanguage}
                />
                <button
                    className={`header-burger ${isBurderActive ? '_active' : ''}`}
                    onClick={toggleBurger}
                >
                    <span></span>
                </button>
            </div>
        </div>
        </header>
    );
}
