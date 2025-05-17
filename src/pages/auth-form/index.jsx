import './style.scss';
import Main4PetsLogo from '../../svg_pictures/4pets-logo';
import { TheLinkToPageButton, LinkButton } from '../../components/button';
import { useLanguageContext } from '../../context/LanguageContext';
import { Input } from '../../components/input';
import CheckMarkIcon from '../../svg_pictures/check-mark-icon';
import ChromeIcon from '../../svg_pictures/ChromeIcon';
import AppleIcon from '../../svg_pictures/AppleIcon';
import MicrosoftIcon from '../../svg_pictures/MicrosoftIcon';
import dog1 from '../../svg_pictures/pictures/dog-1.png';
import { useState, useEffect } from 'react';



export default function AuthLayout({ currentForm }) {
  const { interfaceLanguage, allMyLanguageData } = useLanguageContext();
  const langData = allMyLanguageData[interfaceLanguage].authenticationPage;
  const lang = allMyLanguageData[interfaceLanguage]?.userProfilePage;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const emailValid = !validateEmail(email);
    const passwordValid = !validatePassword(password);
    setFormValid(emailValid && passwordValid);
  }, [email, password]);

  const validateEmail = (val) => (!val.includes('@') ? 'Некорректный email' : '');
  const validatePassword = (val) => (val.length < 8 ? 'Минимум 8 символов' : '');

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
          <form className='auth__form-block'>
            <Main4PetsLogo width={200} height={106} />

            <div className='auth__buttons-block'>
              <TheLinkToPageButton
                buttonText={langData.loginButton}
                url='login'
                isActive={currentForm === 'login'}
              />
              <TheLinkToPageButton
                buttonText={langData.signUpButton}
                url='signup'
                isActive={currentForm === 'signup'}
              />
            </div>

            <Input
              label={langData.authenticationInputs[0].label}
              placeholder={langData.authenticationInputs[0].placeholder}
              type='email'
              value={email}
              onChange={(e) => {
                const val = e.target.value;
                setEmail(val);
                setEmailError(validateEmail(val));
              }}
              error={emailError}
              success={!emailError && email ? 'Отлично!' : ''}
            />

            <Input
              label={langData.authenticationInputs[1].label}
              placeholder={langData.authenticationInputs[1].placeholder}
              type='password'
              value={password}
              onChange={(e) => {
                const val = e.target.value;
                setPassword(val);
                setPasswordError(validatePassword(val));
              }}
              error={passwordError}
              success={!passwordError && password ? 'Надёжно!' : ''}
            />

            <ul className='auth__list-validation-criterias'>
              {langData.validationCriteria.map((item) => (
                <li key={item.criteriaID}>
                  <CheckMarkIcon />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            <TheLinkToPageButton
              buttonText={currentForm === 'login' ? langData.loginButton : langData.signUpButton}
              url={currentForm === 'signup' ? 'registration' : 'login'}
              isPrimary
              isActive={formValid}
              onClick={(e) => {
                if (!formValid) e.preventDefault();
              }}
            />

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
