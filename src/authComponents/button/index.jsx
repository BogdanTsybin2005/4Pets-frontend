import './style.scss';
import { useNavigate } from "react-router";
import axios from "axios";
import useAuthorizationContext from "../../context/AuthorizationContext";
import useLocalStorage from "../../hooks/useLocalStorage"; 
import { useLanguageContext } from '../../context/LanguageContext';



export function LogoutButton() {
    const { setUserAuthorizationResult } = useAuthorizationContext();
    const navigate = useNavigate();
    const [token, setToken] = useLocalStorage("token", "");
    const {interfaceLanguage, allMyLanguageData} = useLanguageContext();    

    const handleLogout = async () => {
        try {
            await axios.post(
                "http://localhost:5000/auth/logout",
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
        } catch (err) {
            console.warn("❌ Ошибка при выходе:", err);
        } finally {
            setToken("");
            setUserAuthorizationResult(false);
            navigate("/");
        }
    };

    return (
        <button className="logout-button" onClick={handleLogout}>
            {allMyLanguageData[interfaceLanguage]?.headerLogoutButton}
        </button>
    );
}
