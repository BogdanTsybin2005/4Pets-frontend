import './style.css';
import Main4PetsLogo from "../../svg_pictures/4pets-logo"
import { NavLink } from "react-router";
import { useRef } from "react";
import {useLanguageContext} from '../../context/LanguageContext';
import { LoginButton } from '../button';



export default function Header() {
    const header = useRef(null);
    const {allMyLanguageData, interfaceLanguage} = useLanguageContext();

    return (
        <>
            <header className="header" ref={header}>
                <div className="header-container">
                    <Main4PetsLogo width={105} height={55}/>
                    <ul className="header-likst-block">
                        {allMyLanguageData[interfaceLanguage].header.map((item) => {
                            return (
                                <li key={item.linkID}>
                                    <NavLink className={'header-link-item'} to={item.url}>{item.text}</NavLink>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="header-button-block">
                        <LoginButton/>
                    </div>
                </div>
            </header>
        </>
    )
}