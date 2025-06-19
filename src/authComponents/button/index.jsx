import './style.scss';
import { useNavigate } from "react-router";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { setUserAuthorizationResult, setToken } from '../../store/authorizationSlice';
import useLocalStorage from "../../hooks/useLocalStorage";
import allMyLanguageData from '../../data/data';
 
 
 
export function LogoutButton() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [token, setTokenLocal] = useLocalStorage("token", "");
    const interfaceLanguage = useSelector(state => state.language.interfaceLanguage);

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
            setTokenLocal("");
            dispatch(setToken(""));
            dispatch(setUserAuthorizationResult(false));
            navigate("/");
        }
    };

    return (
        <button className="logout-button" onClick={handleLogout}>
            {allMyLanguageData[interfaceLanguage]?.headerLogoutButton}
        </button>
    );
}
