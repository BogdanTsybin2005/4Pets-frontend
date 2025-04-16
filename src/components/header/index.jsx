import './style.css';
import Main4PetsLogo from "../../svg_pictures/4pets-logo"
import { NavLink } from "react-router";
import { useLanguageContext } from '../../context/LanguageContext';
import { LoginButton } from '../button';
import LanguageSelect from '../button';
import useScrollY from '../../hooks/useScrollY';



export default function Header() {
    const scrollY = useScrollY();
    const { allMyLanguageData, interfaceLanguage, setInterfaceLanguage } = useLanguageContext();    

    return (
        <header className='header'>
            <div className={`header-container ${scrollY >= 500 ? 'header-scrolled' : ''}`}>
                <Main4PetsLogo width={105} height={55} />
                <ul className="header-likst-block">
                    {allMyLanguageData[interfaceLanguage]?.header?.map((item) => (
                        <li key={item.linkID}>
                            <NavLink className='header-link-item' to={item.url}>
                                {item.text}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className="header-button-block">
                    <LoginButton />
                    <LanguageSelect
                        language={interfaceLanguage}
                        setLanguage={setInterfaceLanguage}
                    />
                </div>
            </div>
        </header>
    );
}
