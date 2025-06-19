import { useSelector } from 'react-redux';
import allMyLanguageData from '../../data/data';
import { Link } from "react-router";
import './style.scss'



export default function BurgerMenu({ isBurderActive, setIsBurgerActive }) {
    const interfaceLanguage = useSelector(state => state.language.interfaceLanguage);

    return (
        <div className={`burger-menu ${isBurderActive ? '_active' : ''}`}>
            <ul className="burger-menu-list">
                {allMyLanguageData[interfaceLanguage]?.header.map((item) => (
                    <li key={item.linkID}>
                        <Link className='burger-menu-link-item' to={item.url} onClick={() => {
                            setIsBurgerActive(false);
                            document.body.style.overflow = 'auto'; 
                        }}>
                            {item.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
