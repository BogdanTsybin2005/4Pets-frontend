import './style.scss';
import Header from '../../authComponents/header';
import Footer from '../../components/footer';
import { Input } from '../../components/input';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import ProfileSection from './components/ProfileSection';
import FAQCard from './components/FAQCard';
import TestimonialCard from './components/TestimonialCard';
import './style.scss';
  


export default function Info() {
  const token = useSelector(state => state.authorization.token);
  const [user, setUser] = useState(null);
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState({ username: '', city: '', email: '', contact: '', avatar: '' });
  const [showFAQ, setShowFAQ] = useState(false);
  const [showTestimonials, setShowTestimonials] = useState(false);

  const faqItems = [
    {
      title: 'Как работает сервис?',
      text1: 'Мы помогаем находить новых друзей для ваших питомцев.',
      text2: 'Вы можете связаться с владельцем напрямую.',
    },
    {
      title: 'Сколько это стоит?',
      text1: 'Использование сервиса совершенно бесплатно.',
      text2: 'Платными могут быть только дополнительные услуги.',
    },
  ];

  const testimonialItems = [
    {
      name: 'Анна',
      position: 'Волонтёр',
      content: 'Отличный сервис!\nНашла здесь много друзей.',
      imgSrc: 'https://via.placeholder.com/80',
    },
    {
      name: 'Иван',
      position: 'Хозяин кота',
      content: 'Очень удобный сайт.\nРекомендую всем знакомым.',
      imgSrc: 'https://via.placeholder.com/80',
    },
  ];
  
    useEffect(() => {
      const fetchUser = async () => {
        if (!token) return;
        try {
          const res = await axios.get('http://localhost:5000/auth/me', {
            headers: { Authorization: `Bearer ${token}` },
          });
          const u = res.data?.data;
          setUser(u);
          setForm({
            username: u?.username || '',
            city: u?.city || '',
            email: u?.email || '',
            contact: u?.contact || '',
            avatar: u?.avatar || '',
          });
        } catch (err) {
          console.error('Failed to load user', err);
        }
      };
      fetchUser();
  }, [token]);
  
  if (!user) return <div>Загрузка...</div>;
  
  const handleChange = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    setUser(form);
    setEdit(false);
  };

  const avatarStyle = form.avatar ? { backgroundImage: `url(${form.avatar})` } : {};
  
    return (
      <>
        <Header />
        <main className="profile-page">
          <ProfileSection user={user} />
          <div className="profile-card">
            <div className="profile-card__avatar" style={avatarStyle} />
            {edit ? (
              <>
                <Input label="Имя" value={form.username} onChange={e => handleChange('username', e.target.value)} />
                <div className="profile-card__actions">
                  <button className="link-to-page-button" onClick={() => setEdit(false)}>Отмена</button>
                  <button className="link-to-page-button primary" onClick={handleSave}>Сохранить</button>
                </div>
            </>
          ) : (
            <>
              <div className="profile-card__name">{user.username}</div>
              {user.city && <div className="profile-card__info">{user.city}</div>}
              {user.email && <div className="profile-card__info">{user.email}</div>}
              {user.contact && <div className="profile-card__info">{user.contact}</div>}
              <button className="link-to-page-button primary" onClick={() => setEdit(true)}>
                Редактировать
              </button>
            </>
          )}
          </div>

          <div className="info-buttons">
            <button className="info-toggle-button" onClick={() => setShowFAQ(!showFAQ)}>
              {showFAQ ? 'Скрыть FAQ' : 'Показать FAQ'}
            </button>
            <button className="info-toggle-button" onClick={() => setShowTestimonials(!showTestimonials)}>
              {showTestimonials ? 'Скрыть отзывы' : 'Показать отзывы'}
            </button>
          </div>

          {showFAQ && (
            <section className="faq-section">
              {faqItems.map((item, idx) => (
                <FAQCard key={idx} {...item} />
              ))}
            </section>
          )}

          {showTestimonials && (
            <section className="testimonial-section">
              {testimonialItems.map((item, idx) => (
                <TestimonialCard key={idx} {...item} />
              ))}
            </section>
          )}
        </main>
        <Footer />
      </>
    );
}
