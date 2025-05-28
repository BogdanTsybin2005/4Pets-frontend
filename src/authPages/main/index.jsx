import './style.scss';
import Footer from '../../components/footer';
import Header from '../../authComponents/header';
import Subscription from '../../authComponents/subcription';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import useLocalStorage from '../../hooks/useLocalStorage';



export default function MainAuthPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useLocalStorage('token', '');

  useEffect(() => {
    const fetchUser = async () => {
      if (!token || !token.includes('.')) {
        console.warn('⛔️ Невалидный или отсутствует токен');
        navigate('/login');
        return;
      }

      try {
        const res = await axios.get('http://localhost:5000/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setLoading(false);
      } catch (error) {
        console.error('❌ Ошибка при получении профиля:', error);
        setToken('');
        navigate('/login');
      }
    };

    fetchUser();
  }, [token]);

  if (loading) return <div>Загрузка...</div>; 

  return (
    <div className="main-auth">
      <Header />
      <Subscription />
      <Footer />
    </div>
  );
}
