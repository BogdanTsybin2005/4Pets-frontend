import './style.scss';
import Main4PetsLogo from '../../svg_pictures/4pets-logo';
import { TheLinkToPageButton } from '../../components/button';
import { useSelector, useDispatch } from 'react-redux';
import { setRegistrationData } from '../../store/registrationSlice';
import allMyLanguageData from '../../data/data';
import { Input } from '../../components/input';
import CheckMarkIcon from '../../svg_pictures/check-mark-icon';
import ChromeIcon from '../../svg_pictures/ChromeIcon';
import AppleIcon from '../../svg_pictures/AppleIcon';
import MicrosoftIcon from '../../svg_pictures/MicrosoftIcon';
import { useCallback, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { setUserAuthorizationResult, setToken } from '../../store/authorizationSlice';
import AuthAbstractImage from '../../svg_pictures/pictures/dog-1.png';
import { apiClient, buildAuthHeaders, extractToken, extractUser, getErrorMessage } from '../../api';



export default function AuthLayout({ currentForm }) {
  const dispatch = useDispatch();
  const interfaceLanguage = useSelector(state => state.language.interfaceLanguage);
  const registrationData = useSelector(state => state.registration);
  const langData = allMyLanguageData[interfaceLanguage].authenticationPage;
  const navigate = useNavigate();
  const [serverError, setServerError] = useState('');
    const [criteriaStatus, setCriteriaStatus] = useState({
    length: false,
    digits: false,
  });
  const [passwordStrength, setPasswordStrength] = useState('weak');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, touchedFields, isValid },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: registrationData.email,
      password: registrationData.password,
    },
  });

  const passwordValue = watch('password') || '';

  useEffect(() => {
    const hasLength = passwordValue.length >= 8;
    const hasDigits = /\d/.test(passwordValue) && /[^A-Za-z0-9]/.test(passwordValue);
    setCriteriaStatus({ length: hasLength, digits: hasDigits });

    let strength = 'weak';
    if (hasLength && hasDigits && passwordValue.length >= 12) {
      strength = 'strong';
    } else if (hasLength && (hasDigits || /\d/.test(passwordValue))) {
      strength = 'medium';
    }
    setPasswordStrength(strength);
  }, [passwordValue]);


  const loginMutation = useMutation({
    mutationFn: ({ email, password }) => apiClient.post('/auth/login', { email, password }),
    onSuccess: async (res) => {
      const token = extractToken(res.data);
      if (token && token.includes('.')) {
        dispatch(setToken(token));

        const check = await apiClient.get('/auth/me', {
          headers: buildAuthHeaders(token),
        });
        const user = extractUser(check.data);
        if (user?.id || user?.email) {
          dispatch(setUserAuthorizationResult(true));
          navigate('/', { replace: true });
          } else {
          setServerError(langData.messages.notVerified);alert('⛔️ Авторизация не подтверждена');
          }
      } else {
        setServerError(langData.messages.noToken);
      }
    },
    onError: (err) => {
      setServerError(getErrorMessage(err, langData.messages.serverError));
    },
  });

  const onSubmit = useCallback((data) => {
      dispatch(setRegistrationData(data));
      if (currentForm === 'login') {
        loginMutation.mutate(data);
        } else {
          navigate('/registration');
        }
    },
    [currentForm, loginMutation, navigate, dispatch]
  );

  return (
    <div className="auth__start-page">
      <div className="auth__start-page-block">
        <div className="auth__start-page-image-block">
          <img src={AuthAbstractImage} alt="auth" />
        </div>
      </div>

      <div className="auth__start-page-block">
        <form className="auth__form-block" onSubmit={handleSubmit(onSubmit)}>
          <Main4PetsLogo width={200} height={106} />

          <div className="auth__buttons-block">
            <TheLinkToPageButton
              buttonText={langData.loginButton}
              url="login"
              isActive={currentForm === 'login'}
            />
            <TheLinkToPageButton
              buttonText={langData.signUpButton}
              url="signup"
              isActive={currentForm === 'signup'}
            />
          </div>
        <Input
          label={langData.authenticationInputs[0].label}
          placeholder={langData.authenticationInputs[0].placeholder}
          type="email"
          register={register('email', {
            required: langData.messages.emailRequired,
            validate: (v) => v.includes('@') || langData.messages.emailInvalid,
          })}
          error={errors.email?.message}
          success={touchedFields.email && !errors.email ? langData.messages.success : ''}
        />
        <Input
          label={langData.authenticationInputs[1].label}
          placeholder={langData.authenticationInputs[1].placeholder}
          type="password"
          register={register('password', {
            required: langData.messages.passwordRequired,
            minLength: { value: 8, message: langData.messages.passwordMin },
          })}
          error={errors.password?.message}
          success={touchedFields.password && !errors.password ? langData.messages.success : ''}
        />

          <ul className="auth__list-validation-criterias">
            <li className={`password-${passwordStrength}`}>
              <CheckMarkIcon />
              <span>
                {langData.validationCriteria[0].text}: {langData.optionOfTheProtectionType[
                  passwordStrength === 'strong' ? 2 : passwordStrength === 'medium' ? 1 : 0
                ]}
              </span>
            </li>
            <li className={criteriaStatus.length ? 'valid' : 'invalid'}>
              <CheckMarkIcon />
              <span>{langData.validationCriteria[1].text}</span>
            </li>
            <li className={criteriaStatus.digits ? 'valid' : 'invalid'}>
              <CheckMarkIcon />
              <span>{langData.validationCriteria[2].text}</span>
            </li>
          </ul>

          {serverError && <div className="server-error">{serverError}</div>}

          <button
          type="submit"
          className="link-to-page-button primary"
          disabled={!isValid || loginMutation.isPending}
          >
          {loginMutation.isPending
              ? langData.messages.pleaseWait
              : currentForm === 'login'
              ? langData.loginButton
              : langData.signUpButton}
          </button>

          <div className="auth__registration-option-separator-block">
            <span></span>
            <p>{langData.or}</p>
            <span></span>
          </div>

          <div className="login__options">
            <a href="#"><ChromeIcon /></a>
            <a href="#"><AppleIcon /></a>
            <a href="#"><MicrosoftIcon /></a>
          </div>
        </form>
      </div>
    </div>
  );
}
