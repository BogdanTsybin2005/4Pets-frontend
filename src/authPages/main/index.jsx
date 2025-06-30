import './style.scss';
import Footer from '../../components/footer';
import Header from '../../authComponents/header';
import Subscription from '../../authComponents/subcription';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../../store/authorizationSlice';
import allMyLanguageData from '../../data/data';
import Loader from '../../components/loader';
import BurgerMenu from '../../authComponents/burgerMenu';



export default function MainAuthPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [token, setTokenLocal] = useLocalStorage('token', '');
  const interfaceLanguage = useSelector(state => state.language.interfaceLanguage);
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isBurgerActive ? 'hidden' : 'auto';
    if (isBurgerActive) {
      document.documentElement.classList.add('no-scroll');
      document.body.classList.add('no-scroll');
    } else {
      document.documentElement.classList.remove('no-scroll');
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.classList.remove('no-scroll');
      document.body.classList.remove('no-scroll');
    };
  }, [isBurgerActive]);

  useEffect(() => {
    const fetchUser = async () => {
      if (!token || !token.includes('.')) {
        console.warn('⛔️ Невалидный или отсутствует токен');
        navigate('/login');
        return;
      }

      try {
        await axios.get('http://localhost:5000/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setLoading(false);
      } catch (error) {
        console.error('❌ Ошибка при получении профиля:', error);
        setTokenLocal('');
        dispatch(setToken(''));
        navigate('/login');
      }
    };

    fetchUser();
  }, [token]);

  const loadingText = allMyLanguageData[interfaceLanguage]?.blogPage.loading;
  if (loading) return <Loader text={loadingText} />;

  return (
    <div className="main-auth">
      <BurgerMenu isBurgerActive={isBurgerActive} setIsBurgerActive={setIsBurgerActive} />
      <Header
        scrollToFooter={() => footerRef.current?.scrollIntoView({ behavior: 'smooth' })}
        isBurgerActive={isBurgerActive}
        setIsBurgerActive={setIsBurgerActive}
      />
      <Subscription />
      <Footer ref={footerRef} />
    </div>
  );
}
