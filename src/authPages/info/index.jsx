import './style.scss';
import Header from '../../authComponents/header';
import Footer from '../../components/footer';

export default function Info() {
  return (
    <>
      <Header />
      <main className="info-page updated-ui">
        <section className="info-header">
          <div className="info-header__banner new-graphics" />
          <div className="info-header__profile new-layout">
            <div className="info-header__avatar-wrapper">
              <div className="info-header__avatar colorful-border" />
            </div>
            <div className="info-header__details">
              <div className="info-header__name gradient-text">Анна Лапина</div>
              <div className="info-header__role role-highlight">Ветеринар, зоопсихолог</div>
              <button className="info-header__subscribe animated-button">📩 Написать / Подписаться</button>
            </div>
          </div>
        </section>

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

function FAQCard({ title, text1, text2 }) {
  return (
    <article className="faq-card highlighted">
      <h4 className="faq-card__title">❓ {title}</h4>
      <p>{text1}</p>
      <p>{text2}</p>
    </article>
  );
}

function TestimonialCard({ name, position, content, imgSrc }) {
  return (
    <article className="testimonial-card testimonial-glow">
      <div className="testimonial-card__header">
        <div className="testimonial-card__avatar" />
        <div className="testimonial-card__name">{name}</div>
        <div className="testimonial-card__position role-highlight">{position}</div>
      </div>
      <div className="testimonial-card__body">
        {content.split('\n').map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </div>
      <img className="testimonial-card__img" src={imgSrc} alt={name} />
    </article>
  );
}
