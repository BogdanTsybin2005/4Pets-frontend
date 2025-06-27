import './style.scss';
import { useEffect, useState } from 'react';
import { Input } from '../../components/input';
import CustomSelect from '../../components/customSelect';
import { LinkButton, TheLinkToPageButton } from '../../components/button';
import { useSelector, useDispatch } from 'react-redux';
import { setRegistrationData } from '../../store/registrationSlice';
import allMyLanguageData from '../../data/data';
import IntroPartOfProfilePage from '../../components/intorPartOfProfilePage';
import { useNavigate } from 'react-router-dom';



export default function ProfileRegistrationPage() {
  const dispatch = useDispatch();
  const interfaceLanguage = useSelector(state => state.language.interfaceLanguage);
  const lang = allMyLanguageData[interfaceLanguage]?.userProfilePage;
  const formFields = allMyLanguageData[interfaceLanguage]?.registrationPage.form;
  const messages = allMyLanguageData[interfaceLanguage]?.authenticationPage.messages;
  const navigate = useNavigate();
  const registrationData = useSelector(state => state.registration);

  const [touched, setTouched] = useState({ username: false, contact: false });
  const [errors, setErrors] = useState({ username: '', contact: '' });
  const [isFormValid, setIsFormValid] = useState(false);

  const validateField = (key, value) => {
    switch (key) {
      case 'username':
        return value.trim().length >= 6 ? '' : messages.usernameMin;
      case 'contact':
        return /^\+?[0-9\s-]{7,}$/.test(value) ? '' : messages.contactInvalid;
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
    dispatch(setRegistrationData({ [key]: value }));
  };

  const handleBlur = (key) => {
    setTouched((prev) => ({ ...prev, [key]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ username: true, contact: true });

    if (!isFormValid) return;

    navigate('/user-profile');
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
                success={touched.username && !errors.username ? messages.success : ''}
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
                success={touched.contact && !errors.contact ? messages.success : ''}
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
