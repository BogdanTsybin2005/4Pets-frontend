import { NavLink } from "react-router"
import { useLanguageContext } from "../../context/LanguageContext"
import './style.css';



export function LoginButton({buttonText, option='primary'}) {
    const {allMyLanguageData, interfaceLanguage} = useLanguageContext();
    return (
        <NavLink to={'/login'} className={`header-button ${option}`}>
            {buttonText || allMyLanguageData[interfaceLanguage].headerLoginButton}
        </NavLink>
    )
}



export function TheLinkToPageButton({ buttonText, url, isActive = false, isPrimary = false }) {
    const className = `header-link-to-page-button ${isActive ? 'active' : ''} ${isPrimary ? 'primary' : ''}`;

    return (
        <NavLink to={`/${url}`} className={className}>
            {buttonText}
        </NavLink>
    );
}
