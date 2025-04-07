import { NavLink } from "react-router"
import { useLanguageContext } from "../../context/LanguageContext"
import { useEffect } from "react";
import './style.css';



export function LoginButton({buttonText, option='primary'}) {
    const {allMyLanguageData, interfaceLanguage} = useLanguageContext();

    return (
        <NavLink to={'/login'} className={`header-button ${option}`}>
            {buttonText || allMyLanguageData[interfaceLanguage]?.headerLoginButton}
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
  