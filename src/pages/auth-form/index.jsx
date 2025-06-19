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
import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { setUserAuthorizationResult, setToken } from '../../store/authorizationSlice';
import AuthAbstractImage from '../../svg_pictures/pictures/dog-1.png';



export default function AuthLayout({ currentForm }) {
  const dispatch = useDispatch();
  const interfaceLanguage = useSelector(state => state.language.interfaceLanguage);
  const registrationData = useSelector(state => state.registration);
  const langData = allMyLanguageData[interfaceLanguage].authenticationPage;
  const navigate = useNavigate();



  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: registrationData.email,
      password: registrationData.password,
    },
  });

  const loginMutation = useMutation({
    mutationFn: ({ email, password }) =>
      axios.post('http://localhost:5000/auth/login', { email, password }),
    onSuccess: async (res) => {
      const token = res.data?.data?.access_token;
      if (token && token.includes('.')) {
        dispatch(setToken(token));

        const check = await axios.get('http://localhost:5000/auth/me', {
          headers: { Authorization: `Bearer ${token}` },
          });
        const user = check.data?.data;
        if (user?.id || user?.email) {
          dispatch(setUserAuthorizationResult(true));
          navigate('/', { replace: true });
          } else {
          alert('⛔️ Авторизация не подтверждена');
          }
      } else {
        alert('⛔️ Токен не получен');
      }
    },
    onError: (err) => {
      alert(err.response?.data?.message || 'Ошибка авторизации');
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
            required: 'Введите email',
            validate: (v) => v.includes('@') || 'Некорректный email',
          })}
          error={errors.email?.message}
          success={touchedFields.email && !errors.email ? 'Отлично!' : ''}
        />
        <Input
          label={langData.authenticationInputs[1].label}
          placeholder={langData.authenticationInputs[1].placeholder}
          type="password"
          register={register('password', {
            required: 'Введите пароль',
            minLength: { value: 8, message: 'Минимум 8 символов' },
          })}
          error={errors.password?.message}
          success={touchedFields.password && !errors.password ? 'Отлично!' : ''}
        />

          <ul className="auth__list-validation-criterias">
            {langData.validationCriteria.map((item) => (
              <li key={item.criteriaID}>
                <CheckMarkIcon />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>

          <button
          type="submit"
          className="link-to-page-button primary"
          disabled={!isValid || loginMutation.isPending}
          >
          {loginMutation.isPending
              ? '⏳ Подождите...'
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
