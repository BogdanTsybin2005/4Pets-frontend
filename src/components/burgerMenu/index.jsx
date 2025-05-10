import { useLanguageContext } from "../../context/LanguageContext";
import { Link } from "react-router";
import './style.scss'



export default function BurgerMenu({ isBurderActive, setIsBurgerActive }) {
    const { allMyLanguageData, interfaceLanguage } = useLanguageContext();

    return (
        <div className={`burger-menu ${isBurderActive ? '_active' : ''}`}>
            <ul className="burger-menu-list">
                {allMyLanguageData[interfaceLanguage]?.header.map((item) => (
                    <li key={item.linkID}>
                        <Link className='burger-menu-link-item' to={item.url} onClick={() => setIsBurgerActive(false)}>
                            {item.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}