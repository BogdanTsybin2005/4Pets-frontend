import './style.scss';
import Footer from '../../components/footer';
import Header from '../../authComponents/header';
import Subscription from '../../authComponents/subcription';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';



export default function MainAuthPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
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

        console.log('✅ Пользователь:', res.data);
        setLoading(false);
      } catch (error) {
        console.error('❌ Ошибка при получении профиля:', error);
        localStorage.removeItem("token");
        navigate('/login');
      }
    };

    fetchUser();
  }, []);

  if (loading) return <div>Загрузка...</div>; 

  return (
    <div className="main-auth">
      <Header />
      <Subscription />
      <Footer />
    </div>
  );
}
