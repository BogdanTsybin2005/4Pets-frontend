import { NavLink } from "react-router"
import { useLanguageContext } from "../../context/LanguageContext"
import { useEffect } from "react";
import './style.css';
import LinkArrowIcon from "../../svg_pictures/link-arrow-icon";



export function UserProfileButton({children, onCLick}) {
  return <button className="user-profile-button" onClick={() => onCLick()}>{children}</button>
}

export function LinkButton({linkText, url}) {
  return <NavLink to={`/${url}`} className={'link-button'}>
    <LinkArrowIcon/>
    <span>
      {linkText}
    </span>
  </NavLink>
}

export function LoginButton({buttonText, option='primary'}) {
    const {allMyLanguageData, interfaceLanguage} = useLanguageContext();

    return (
        <NavLink to={'/login'} className={`header-button ${option}`}>
            {buttonText || allMyLanguageData[interfaceLanguage]?.headerLoginButton}
        </NavLink>
    )
}



export function TheLinkToPageButton({ buttonText, url, isActive = false, isPrimary = false }) {
    const className = `link-to-page-button ${isActive ? 'active' : ''} ${isPrimary ? 'primary' : ''} ${url === 'registration' ? '__button-active' : ''}`;

    return (
        <NavLink to={`/${url}`} className={className}>
            {buttonText}
        </NavLink>
    );
}



export function LanguageSelect({ language, setLanguage }) {
    const languages = [
      { code: 'ru', label: 'Русский' },
      { code: 'en', label: 'English' },
      { code: 'kg', label: 'Кыргызча' },
    ];
  
    const handleChange = (e) => {
      const selectedLang = e.target.value;
      setLanguage(selectedLang);
      localStorage.setItem('language', selectedLang);
    };
  
    useEffect(() => {
      const savedLang = localStorage.getItem('language');
      if (savedLang && savedLang !== language) {
        setLanguage(savedLang);
      }
    }, []);
  
    return (
      <select className="language-select" value={language} onChange={handleChange}>
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    );
  }
  