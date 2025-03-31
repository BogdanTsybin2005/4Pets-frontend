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


export function TheLinkToPageButton({ buttonText, url }) {
    return (
      <NavLink to={`/${url}`} className={({ isActive }) => `header-link-to-page-button ${isActive ? '__link-active' : ''}`}>
        {buttonText}
      </NavLink>
    );
  }
  