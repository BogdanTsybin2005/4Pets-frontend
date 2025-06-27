import './style.scss';
import Header from '../../authComponents/header';
import Footer from '../../components/footer';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect, useState, useRef } from 'react';
import allMyLanguageData from '../../data/data';
import ProfileSection from './components/ProfileSection';
import FAQCard from './components/FAQCard';
import TestimonialCard from './components/TestimonialCard';
import Loader from '../../components/loader';
   
 
 
export default function Info() {
  const token = useSelector(state => state.authorization.token);
  const interfaceLanguage = useSelector(state => state.language.interfaceLanguage);
  const [user, setUser] = useState(null);
  const fileInputRef = useRef(null);
  const footerRef = useRef(null);
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
      } catch (err) {
        console.error('Failed to load user', err);
      }
    };
    fetchUser();
  }, [token]);
   
  const loadingText = allMyLanguageData[interfaceLanguage]?.blogPage.loading;
  if (!user) return <Loader text={loadingText} />;

  return (
      <>
        <Header scrollToFooter={() => footerRef.current?.scrollIntoView({ behavior: 'smooth' })} />
        <main className="profile-page">
          <ProfileSection user={user} />
          <div className="info-header__actions">
            <button className="info-toggle-button" onClick={() => fileInputRef.current?.click()}>
              {allMyLanguageData[interfaceLanguage]?.changeAvatarButton}
            </button>
            <input ref={fileInputRef} type="file" hidden accept="image/*" onChange={async e => {
              const file = e.target.files[0];
              if (!file) return;
              const form = new FormData();
              form.append('avatar', file);
              try {
                await axios.patch('http://localhost:5000/user/avatar', form, {
                  headers: { Authorization: `Bearer ${token}` }
                });
                setUser(u => ({ ...u, avatar: URL.createObjectURL(file) }));
              } catch (err) {
                console.error(err);
              }
            }} />
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
      <Footer ref={footerRef} />
    </>
  );
}
