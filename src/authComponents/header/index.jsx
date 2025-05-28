import './style.scss';
import { LanguageSelect } from "../../components/button";
import Main4PetsLogo from '../../svg_pictures/4pets-logo';
import { useLanguageContext } from '../../context/LanguageContext';
import { NavLink, Link } from 'react-router';
import { LogoutButton } from '../button';



export default function Header({scrollToFooter, isBurderActive, setIsBurgerActive}) {
    const {interfaceLanguage, setInterfaceLanguage, allMyLanguageData} = useLanguageContext();

    return (
        <header className="auth-header">
            <div className="auth-header__container">
                <Link to={'/'}>
                    <Main4PetsLogo width={105} height={55} />
                </Link>

                <ul className="header-likst-block">
                    {allMyLanguageData[interfaceLanguage]?.header.slice(0, allMyLanguageData[interfaceLanguage]?.header.length - 1).map((item) => (
                        <li key={item.linkID}>
                            <NavLink 
                                className='header-link-item' 
                                to={item.url}
                            >
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
                    <LogoutButton/>
                    <LanguageSelect 
                        language={interfaceLanguage} 
                        setLanguage={setInterfaceLanguage}
                        useDarkStyle
                    />
                    <button className={`header-burger ${isBurderActive ? '_active' : ''}`} onClick={() => setIsBurgerActive(isBurderActive => !isBurderActive)}><span></span></button>
                </div>
            </div>
        </header>
    )
}
