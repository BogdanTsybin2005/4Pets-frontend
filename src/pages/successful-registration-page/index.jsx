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
import useLocalStorage from '../../hooks/useLocalStorage';
import { apiClient, buildAuthHeaders, extractToken, extractUser, getErrorMessage } from '../../api';



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
  }, [navigate, registrationData]);

  const handleLogin = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const res = await apiClient.post('/auth/login', {
        email: registrationData.email,
        password: registrationData.password,
      });

      const token = extractToken(res.data);

      if (token && token.includes('.')) {
        dispatch(setToken(token));
        setStoredToken(token);

        const check = await apiClient.get('/auth/me', {
          headers: buildAuthHeaders(token),
        });

        const user = extractUser(check.data);

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
      alert(getErrorMessage(err, "⛔️ Ошибка авторизации!"));
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
          buttonText={loading ? allMyLanguageData[interfaceLanguage].authenticationPage.messages.pleaseWait : lang.buttonText}
          isActive={!loading}
          onClick={handleLogin}
        />
      </div>
    </div>
  );
}
