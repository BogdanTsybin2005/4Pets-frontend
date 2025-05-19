import './style.scss';
import Header from '../../authComponents/header';
import Footer from '../../components/footer';



export default function Info() {
  return (
    <>
      <Header />
      <main className="info-page">
        <section className="info-header">
          <div className="info-header__banner" />
          <div className="info-header__profile">
            <div className="info-header__avatar" />
            <div className="info-header__name-role">
              <div className="info-header__name">Анна Лапина</div>
              <div className="info-header__role">Ветеринар, зоопсихолог</div>
            </div>
            <button className="info-header__subscribe">📩 Написать/Подписаться</button>
          </div>
        </section>

        <div className="info-main">
          <section className="info-main__left">
            <article className="faq-card">
              <h4 className="faq-card__title">Часто задаваемые вопросы (FAQ)</h4>
              <p>Если собака внезапно отказывается от еды или кошка прячется — это не "характер", а часто — тревожный звоночек.</p>
              <p>Слушайте, наблюдайте, задавайте вопросы. Я здесь, чтобы помочь 💬</p>
            </article>

            <article className="faq-card">
              <h4 className="faq-card__title">Часто задаваемые вопросы (FAQ)</h4>
              <p>Сегодня на приёме щенок заснул у меня на руках.<br />
              Кажется, это и есть доказательство, что я на своём месте.<br />
              Иногда любовь к профессии приходит вот в таких тихих моментах 💗</p>
            </article>
          </section>

          <aside className="info-main__right">
            <div className="expert-card">
              <div className="expert-card__photo" />
              <div className="expert-card__info">
                <span className="expert-card__nickname">@zoodoctor_anna</span>
                <span className="expert-card__desc">Тут пишется должность. Пример: Ветеринар</span>
                <button className="expert-card__btn">📩 Связаться</button>
                <div className="expert-card__meta">12 лет опыта</div>
                <div className="expert-card__meta">Ответила на 342 вопроса</div>
                <div className="expert-card__meta">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</div>
                <button className="expert-card__subscribe">Перейти к подпискам</button>
              </div>
            </div>
          </aside>
        </div>

        <section className="testimonials">
          <article className="testimonial-card">
            <div className="testimonial-card__header">
              <div className="testimonial-card__avatar" />
              <div className="testimonial-card__name">Анна Лапина</div>
              <div className="testimonial-card__position">Ветеринар, клиника "Хвостик"</div>
            </div>
            <div className="testimonial-card__body">
              <p>Они не спрашивают, что случилось.<br />
              Они не дают советов.<br />
              Они просто рядом.</p>
              <p>Иногда — тихо ложатся у ног. Иногда — приносят игрушку, чтобы развеселить. А бывает — просто смотрят в глаза, как будто понимают всё без слов.<br />
              Мы называем их питомцами.<br />
              А они становятся нашими самыми чуткими друзьями.</p>
              <p>💬 А как ваш питомец реагирует, когда вам грустно или тяжело? Поделитесь своей историей — такие моменты особенно трогают 💗</p>
            </div>
            <img className="testimonial-card__img" src="/some/img1.png" alt="" />
          </article>

          <article className="testimonial-card">
            <div className="testimonial-card__header">
              <div className="testimonial-card__avatar" />
              <div className="testimonial-card__name">Иван Юрченко</div>
              <div className="testimonial-card__position">Грумер, мастер по йоркам</div>
            </div>
            <div className="testimonial-card__body">
              <p>Каждый раз, когда я зову её к ветеринару — она сливается с мебелью. Превращается в подушку.<br />
              Но стоит открыть холодильник — она телепортируется мгновенно.<br />
              И не говорите мне, что кошки не гении 😅🐾</p>
            </div>
            <img className="testimonial-card__img" src="/some/img2.png" alt="" />
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
