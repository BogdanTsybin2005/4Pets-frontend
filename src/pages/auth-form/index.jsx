import './style.scss';
import Main4PetsLogo from '../../svg_pictures/4pets-logo';
import { TheLinkToPageButton, LinkButton } from '../../components/button';
import { useLanguageContext } from '../../context/LanguageContext';
import { useRegistrationContext } from '../../context/RegistrationContext';
import { Input } from '../../components/input';
import CheckMarkIcon from '../../svg_pictures/check-mark-icon';
import ChromeIcon from '../../svg_pictures/ChromeIcon';
import AppleIcon from '../../svg_pictures/AppleIcon';
import MicrosoftIcon from '../../svg_pictures/MicrosoftIcon';
import dog1 from '../../svg_pictures/pictures/dog-1.png';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import useAuthorizationContext from '../../context/AuthorizationContext';



export default function AuthLayout({ currentForm }) {
  const { setUserAuthorizationResult, setToken } = useAuthorizationContext();
  const { interfaceLanguage, allMyLanguageData } = useLanguageContext();
  const { registrationData, setRegistrationData } = useRegistrationContext();
  const langData = allMyLanguageData[interfaceLanguage].authenticationPage;
  const lang = allMyLanguageData[interfaceLanguage]?.userProfilePage;
  const navigate = useNavigate();

  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [formValid, setFormValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = {
    email: (val) => (!val.includes('@') ? 'Некорректный email' : ''),
    password: (val) => (val.length < 8 ? 'Минимум 8 символов' : ''),
  };

  useEffect(() => {
    const newErrors = {};
    Object.keys(validate).forEach((key) => {
      newErrors[key] = validate[key](registrationData[key] || '');
    });
    setErrors(newErrors);
    setFormValid(Object.values(newErrors).every((v) => v === ''));
  }, [registrationData]);

  const handleChange = (key, val) => {
    setRegistrationData((prev) => ({ ...prev, [key]: val }));
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    if (!formValid) return;
    setLoading(true);

    try {
      if (currentForm === 'login') {
        const res = await axios.post('http://localhost:5000/auth/login', {
          email: registrationData.email,
          password: registrationData.password,
        });

        const token = res.data?.data?.access_token;

        if (token && token.includes('.')) {
          console.log("💥 токен до сохранения", token);
          setToken(token);
          localStorage.setItem("token", token);
          console.log("📦 token из localStorage", localStorage.getItem('token'));

          const check = await axios.get("http://localhost:5000/auth/me", {
            headers: { Authorization: `Bearer ${token}` },
          });

          const user = check.data?.data;

          if (user?.id || user?.email) {
            setUserAuthorizationResult(true);
            window.location.href = "/";
          } else {
            alert("⛔️ Авторизация не подтверждена");
          }
        } else {
          alert('⛔️ Не удалось получить токен. Проверь backend.');
        }
      } else {
        navigate('/registration');
      }
    } catch (err) {
      alert(err.response?.data?.message || '⛔️ Ошибка авторизации!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <LinkButton linkText={lang.linkTextButton} isFixed url={''} />
      <div className='auth__start-page'>
        <div className='auth__start-page-block'>
          <div className='auth__start-page-image-block'>
            <img src={dog1} alt='img' />
          </div>
        </div>

        <div className='auth__start-page-block'>
          <form className='auth__form-block' onSubmit={handleAuth}>
            <Main4PetsLogo width={200} height={106} />

            <div className='auth__buttons-block'>
              <TheLinkToPageButton buttonText={langData.loginButton} url='login' isActive={currentForm === 'login'} />
              <TheLinkToPageButton buttonText={langData.signUpButton} url='signup' isActive={currentForm === 'signup'} />
            </div>

            {['email', 'password'].map((key, i) => (
              <Input
                key={key}
                label={langData.authenticationInputs[i].label}
                placeholder={langData.authenticationInputs[i].placeholder}
                type={key}
                value={registrationData[key] || ''}
                onChange={(e) => handleChange(key, e.target.value)}
                onBlur={() => setTouched((prev) => ({ ...prev, [key]: true }))}
                error={touched[key] ? errors[key] : ''}
                success={touched[key] && !errors[key] ? 'Отлично!' : ''}
              />
            ))}

            <ul className='auth__list-validation-criterias'>
              {langData.validationCriteria.map((item) => (
                <li key={item.criteriaID}>
                  <CheckMarkIcon />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            <button
              type='submit'
              className='link-to-page-button primary'
              disabled={!formValid || loading}
            >
              {loading
                ? '⏳ Подождите...'
                : currentForm === 'login'
                ? langData.loginButton
                : langData.signUpButton}
            </button>

            <div className='auth__registration-option-separator-block'>
              <span></span>
              <p>{langData.or}</p>
              <span></span>
            </div>

            <div className='login__options'>
              <a href='#'><ChromeIcon /></a>
              <a href='#'><AppleIcon /></a>
              <a href='#'><MicrosoftIcon /></a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
