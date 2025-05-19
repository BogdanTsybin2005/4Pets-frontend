import './style.scss';
import { useEffect, useState } from 'react';
import { Input } from '../../components/input';
import CustomSelect from '../../components/customSelect';
import { LinkButton, TheLinkToPageButton } from '../../components/button';
import { useLanguageContext } from '../../context/LanguageContext';
import { useRegistrationContext } from '../../context/RegistrationContext';
import IntroPartOfProfilePage from '../../components/intorPartOfProfilePage';
import { useNavigate } from 'react-router';
import axios from 'axios';



export default function ProfileRegistrationPage() {
  const { interfaceLanguage, allMyLanguageData } = useLanguageContext();
  const lang = allMyLanguageData[interfaceLanguage]?.userProfilePage;
  const formFields = allMyLanguageData[interfaceLanguage]?.registrationPage.form;
  const navigate = useNavigate();
  const { registrationData, setRegistrationData } = useRegistrationContext();

  const [touched, setTouched] = useState({ username: false, contact: false });
  const [errors, setErrors] = useState({ username: '', contact: '' });
  const [isFormValid, setIsFormValid] = useState(false);

  const validateField = (key, value) => {
    switch (key) {
      case 'username':
        return value.trim().length >= 6 ? '' : 'Минимум 6 символов';
      case 'contact':
        return /^\+?[0-9\s\-]{7,}$/.test(value) ? '' : 'Введите корректный номер';
      default:
        return '';
    }
  };

  useEffect(() => {
    const usernameError = validateField('username', registrationData.username);
    const contactError = validateField('contact', registrationData.contact);

    setErrors({ username: usernameError, contact: contactError });

    const baseValid = registrationData.email && registrationData.password;
    const profileValid = registrationData.username && registrationData.contact;

    setIsFormValid(baseValid && profileValid && !usernameError && !contactError);
  }, [registrationData]);

  const handleChange = (key, value) => {
    setRegistrationData((prev) => ({ ...prev, [key]: value }));
  };

  const handleBlur = (key) => {
    setTouched((prev) => ({ ...prev, [key]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ username: true, contact: true });

    if (!isFormValid) return;

    try {
      await axios.post('http://localhost:5000/auth/register', registrationData);

      const res = await axios.post('http://localhost:5000/auth/login', {
        email: registrationData.email,
        password: registrationData.password,
      });

      const token = res.data?.data?.access_token;

      if (!token || !token.includes(".")) {
        alert("⛔️ Не удалось получить токен. Проверь backend.");
        return;
      }

      localStorage.setItem("token", token);

      const check = await axios.get("http://localhost:5000/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const user = check.data?.data;

      if (user?.id || user?.email) {
        localStorage.setItem("isUserAuthorized", true);
        navigate('/');
      } else {
        alert("⛔️ Авторизация не подтверждена");
      }

    } catch (err) {
      const msg = err.response?.data?.message || 'Ошибка сервера';
      alert(msg);
    }
  };


  return (
    <>
      <LinkButton linkText={lang.linkTextButton} url="signup" isFixed />
      <div className="registration__body">
        <form className="registration__form" onSubmit={handleSubmit}>
          <IntroPartOfProfilePage />
          <ul className="registration__input-list">
            <li>
              <Input
                label={formFields[0].label}
                type={formFields[0].type}
                placeholder={formFields[0].placeholder}
                value={registrationData.username}
                onChange={(e) => handleChange('username', e.target.value)}
                onBlur={() => handleBlur('username')}
                error={touched.username ? errors.username : ''}
                success={touched.username && !errors.username ? 'Ок!' : ''}
              />
            </li>
            <li>
              <label className="registration__label">{formFields[1].label}</label>
              <CustomSelect
                options={formFields[1].options}
                selected={formFields[1].options.find(opt => opt.value === registrationData.city)}
                onChange={(selectedOption) => handleChange('city', selectedOption.cityName)}
              />
            </li>
            <li>
              <Input
                label={formFields[2].label}
                type={formFields[2].type}
                placeholder={formFields[2].placeholder}
                value={registrationData.contact}
                onChange={(e) => handleChange('contact', e.target.value)}
                onBlur={() => handleBlur('contact')}
                error={touched.contact ? errors.contact : ''}
                success={touched.contact && !errors.contact ? 'Ок!' : ''}
              />
            </li>
          </ul>
          <TheLinkToPageButton
            buttonText={allMyLanguageData[interfaceLanguage]?.registrationPage.buttonForRegistrationText}
            isPrimary
            isActive={isFormValid}
            type="submit"
          />
        </form>
      </div>
    </>
  );
}