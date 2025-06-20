import './style.scss';
import { LanguageSelect } from "../../components/button";
import Main4PetsLogo from '../../svg_pictures/4pets-logo';
import { useSelector, useDispatch } from 'react-redux';
import {setInterfaceLanguage} from '../../store/languageSlice.js'
import allMyLanguageData from '../../data/data';
import { NavLink, Link } from 'react-router-dom';
import { LogoutButton } from '../button';

 
 
export default function Header({scrollToFooter, isBurgerActive, setIsBurgerActive}) {
    const dispatch = useDispatch();
    const interfaceLanguage = useSelector(state => state.language.interfaceLanguage);

    return (
        <header className="auth-header">
            <div className="auth-header__container">
                <Link to={'/'}>
                    <Main4PetsLogo width={105} height={55} />
                </Link>

                <ul className="header-auth-likst-block">
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
                <div className="header-auth-button-block">
                <LogoutButton/>
                <LanguageSelect
                    language={interfaceLanguage}
                    setLanguage={(lang) => dispatch(setInterfaceLanguage(lang))}
                        useDarkStyle
                    />
                    <button className={`header-auth-burger ${isBurgerActive ? '_active' : ''}`} onClick={() => setIsBurgerActive(isBurgerActive => !isBurgerActive)}><span></span></button>
                </div>
            </div>
        </header>
    )
}
