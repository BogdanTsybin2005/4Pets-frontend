import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import { TheLinkToPageButton } from '../../components/button';
import Main4PetsLogo from '../../svg_pictures/4pets-logo';
import TheSuccessfulRegistrationIcon from '../../svg_pictures/frame-for-the-successful-registration';
import { setToken, setUserAuthorizationResult } from '../../store/authorizationSlice';
import { useNavigate } from 'react-router-dom';
import { resetRegistrationData } from '../../store/registrationSlice';
import allMyLanguageData from '../../data/data';
import { useEffect, useState } from 'react';
import axios from 'axios';
import useLocalStorage from '../../hooks/useLocalStorage';



export default function SuccessfulRegistrationPage() {
  const dispatch = useDispatch();
  const interfaceLanguage = useSelector(state => state.language.interfaceLanguage);
  const lang = allMyLanguageData[interfaceLanguage]?.successfulRegistrationPage;
  const registrationData = useSelector(state => state.registration);
  const navigate = useNavigate();
  const [, setStoredToken] = useLocalStorage("token", "");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!registrationData?.email || !registrationData?.password || !registrationData?.username) {
      navigate('/signup');
    }
  }, [registrationData]);

  const handleLogin = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/auth/login', {
        email: registrationData.email,
        password: registrationData.password,
      });

      const token = res.data?.data?.access_token;

      if (token && token.includes('.')) {
        dispatch(setToken(token));
        setStoredToken(token);

        const check = await axios.get("http://localhost:5000/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const user = check.data?.data;

        if (user?.id || user?.email) {
          dispatch(resetRegistrationData());
          dispatch(setUserAuthorizationResult(true));
          navigate('/');
        } else {
          alert("⛔️ Авторизация не подтверждена");
        }
      } else {
        alert("⛔️ Не удалось получить токен");
      }
    } catch (err) {
      alert(err.response?.data?.message || "⛔️ Ошибка авторизации!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='successful-registration-page'>
      <div className='successful-registration-block'>
        <Main4PetsLogo width={150} height={79} />
        <TheSuccessfulRegistrationIcon />
        <div>
          <h2 className='registration__title'>{lang.title}</h2>
          <h2 className='registration_subtitle'>{lang.subtitle}</h2>
        </div>
        <TheLinkToPageButton
          buttonText={loading ? '⏳ Подождите...' : lang.buttonText}
          isActive={!loading}
          onClick={handleLogin}
        />
      </div>
    </div>
  );
}
