import './style.scss';
import Header from '../../authComponents/header';
import Footer from '../../components/footer';
import ProfileSection from './components/ProfileSection';
import FAQCard from './components/FAQCard';
import TestimonialCard from './components/TestimonialCard';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';



export default function Info() {
  const token = useSelector(state => state.authorization.token);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (!token) return;
      try {
        const res = await axios.get('http://localhost:5000/auth/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data?.data);
      } catch (err) {
        console.error('Failed to load user', err);
      }
    };
    fetchUser();
  }, [token]);

  if (!user) return <div>Загрузка...</div>;


  return (
    <>
      <Header />
      <main className="info-page updated-ui">

        <ProfileSection user={user} />
        <div className="info-main modern-flex">
          <section className="info-main__left">
            <FAQCard
              title="Часто задаваемые вопросы"
              text1="Если собака внезапно отказывается от еды или кошка прячется — это не 'характер', а часто — тревожный звоночек."
              text2="Слушайте, наблюдайте, задавайте вопросы. Я здесь, чтобы помочь 💬"
            />
            <FAQCard
              title="История из практики"
              text1="Сегодня на приёме щенок заснул у меня на руках."
              text2="Кажется, это и есть доказательство, что я на своём месте. Иногда любовь к профессии приходит в таких тихих моментах 💗"
            />
          </section>

          <aside className="info-main__right">
            <div className="expert-card colorful-box">
              <div className="expert-card__banner-overlay" />
              <div className="expert-card__photo avatar-box" />
              <div className="expert-card__info">
                <span className="expert-card__nickname name-tag">@zoodoctor_anna</span>
                <span className="expert-card__desc tag-background">Ветеринар, клиника \"Хвостик\"</span>
                <button className="expert-card__btn call-button">📩 Связаться</button>
                <div className="expert-card__meta tag-background">12 лет опыта</div>
                <div className="expert-card__meta tag-background">Ответила на 342 вопроса</div>
                <button className="expert-card__subscribe full-button">Перейти к подпискам</button>
              </div>
            </div>
          </aside>
        </div>

        <section className="testimonials testimonials-grid">
          <TestimonialCard
            name="Анна Лапина"
            position="Ветеринар, клиника 'Хвостик'"
            content={`Они не спрашивают, что случилось.\nОни не дают советов.\nОни просто рядом.\nИногда — тихо ложатся у ног. Иногда — приносят игрушку, чтобы развеселить. А бывает — просто смотрят в глаза, как будто понимают всё без слов.\nМы называем их питомцами.\nА они становятся нашими самыми чуткими друзьями.\n\n💬 А как ваш питомец реагирует, когда вам грустно или тяжело? Поделитесь своей историей — такие моменты особенно трогают 💗`}
            imgSrc="/some/img1.png"
          />

          <TestimonialCard
            name="Иван Юрченко"
            position="Грумер, мастер по йоркам"
            content={`Каждый раз, когда я зову её к ветеринару — она сливается с мебелью. Превращается в подушку.\nНо стоит открыть холодильник — она телепортируется мгновенно.\nИ не говорите мне, что кошки не гении 😅🐾`}
            imgSrc="/some/img2.png"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}