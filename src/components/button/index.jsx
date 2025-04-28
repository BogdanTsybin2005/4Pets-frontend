import { NavLink } from "react-router"
import { useLanguageContext } from "../../context/LanguageContext"
import { useState, useRef, useEffect } from "react";
import LinkArrowIcon from "../../svg_pictures/link-arrow-icon";
import useWindowWidth from "../../hooks/useWindowWidth";
import loginIcon from '../../svg_pictures/icons/login-icon.png';
import './style.scss';



export function UserProfileButton({children, onCLick}) {
  return <button className="user-profile-button" onClick={() => onCLick()}>{children}</button>
}

export function LinkButton({linkText, url, isFixed=false}) {
  return <NavLink to={`/${url}`} className={`link-button ${isFixed ? 'fixed' : ''}`}>
    <LinkArrowIcon/>
    <span>
      {linkText}
    </span>
  </NavLink>
}

export function LoginButton({buttonText, option='primary'}) {
    const width = useWindowWidth();
    const {allMyLanguageData, interfaceLanguage} = useLanguageContext();

    return (
        <NavLink to={'/login'} className={`header-button ${option}`}>
            {width >= 1000 ? buttonText || allMyLanguageData[interfaceLanguage]?.headerLoginButton : <img width={20} src={loginIcon} alt="img"/>}
        </NavLink>
    )
}

export function TheLinkToPageButton({ buttonText, url, isActive = false, isPrimary = false }) {
    const className = `link-to-page-button ${isActive ? 'active' : ''} ${isPrimary ? 'primary' : ''}`;
    
    return (
        <NavLink to={`/${url}`} className={className}>
            {buttonText}
        </NavLink>
    );
}

export const LanguageSelect = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(language);
  const selectRef = useRef(null);
  const width = useWindowWidth();


  const languages = [
    { code: 'ru', label: 'RU' },
    { code: 'en', label: 'EN' },
    { code: 'kg', label: 'KG' },
  ];

  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang && savedLang !== language) {
      setLanguage(savedLang);
      setSelected(savedLang);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (lang) => {
    setSelected(lang.code);
    setLanguage(lang.code);
    localStorage.setItem('language', lang.code);
    setIsOpen(false);
  };

  const selectedLabel = languages.find(l => l.code === selected)?.label || 'Выбери язык';

  return (
    <div className="custom-language-select" ref={selectRef}>
      <div className="custom-language-selected" onClick={() => setIsOpen(!isOpen)}>
        <span>{selectedLabel}</span>
        <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
          <path d="M5 8L10 13L15 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      
      <ul className={`custom-language-options ${isOpen ? 'show' : ''}`}>
        {languages.map((lang) => (
          <li
            key={lang.code}
            className="custom-language-option"
            onClick={() => handleSelect(lang)}
          >
            {lang.label}
          </li>
        ))}
      </ul>
    </div>
  );
};


export function SubscriptionCardButton({buttonText}) {
  return <button className="subscription-card-button">{buttonText}</button>
}