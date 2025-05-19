import './style.scss';
import Header from '../../authComponents/header';
import Footer from '../../components/footer';



export default function Blog() {
  return (
    <>
        <Header/>
            <div className="blog-wrapper">
            <div className="blog-page">
      <div className="blog-feed">
        <div className="blog-header">
          <input
            type="text"
            className="blog-search"
            placeholder="Вы ищите на платформа 4Pets..."
          />
        </div>

        <div className="blog-stories">
          <img src="https://i.pravatar.cc/40?img=1" alt="avatar" className="story-avatar" />
          <img src="https://i.pravatar.cc/40?img=2" alt="avatar" className="story-avatar" />
          <img src="https://i.pravatar.cc/40?img=3" alt="avatar" className="story-avatar" />
          <img src="https://i.pravatar.cc/40?img=4" alt="avatar" className="story-avatar" />
          <img src="https://i.pravatar.cc/40?img=5" alt="avatar" className="story-avatar" />
          <div className="story-add">+</div>
        </div>

        <div className="blog-post">
          <div className="post-header">
            <div className="post-user">
              <img src="https://i.pravatar.cc/40?img=6" alt="avatar" className="avatar" />
              <div>
                <strong>dog_mom_katya</strong>
                <div className="post-location">Бишкек • 2 ч назад</div>
              </div>
            </div>
            <div className="post-caption">
              А вы замечали, что питомцы чувствуют ваше состояние?
            </div>
          </div>

          <div className="post-image-block">
            <img src='https://img.freepik.com/free-photo/woman-summer-forest-playing-with-dog_1157-32785.jpg' alt="Post" className="post-image" />
            <div className="post-overlay-text">
              <p>
                Сегодня была в новом зоокафе, которое нашла через карту на 4Pets — <b>невероятное место!</b> Пока я пила капучино, мой пёсик Бублик играл с другими хвостиками 🐶💗
              </p>
              <p><b>Советую всем сходить!</b></p>
              <p>Адрес: ул. Исанова, рядом с парком. 📍</p>
              <p>P.S. Бублик оценил печеньки на 10/10 😋</p>
            </div>
          </div>

          <div className="post-actions">
            <button>♡</button>
            <button>✉️</button>
            <button>📍</button>
            <button>•••</button>
          </div>
        </div>
      </div>

      <div className="blog-articles">
        <div className="article-card">
          <div className="article-author">
            <strong>@VET_NURLAN</strong>
            <a href="#">https://kg.4pets.com/article/...</a>
            <p className="article-date">5 апреля 2025 г.</p>
          </div>
          <p className="article-title">
            "5 ПРОСТЫХ ПРАВИЛ УХОДА ЗА СОБАКОЙ: КАК СОХРАНИТЬ ЗДОРОВЬЕ И РАДОСТЬ ВАШЕГО ХВОСТИКА КАЖДЫЙ ДЕНЬ"
          </p>
          <p className="article-body">
            Ваш пёс — не просто питомец, а настоящий член семьи. Но знаете ли вы, что даже мелкие ошибки в уходе могут сказаться на его здоровье и настроении? Чтобы ваш хвостатый друг всегда оставался бодрым, весёлым и благодарным — достаточно помнить о нескольких простых вещах... <span className="more">ещё</span>
          </p>
        </div>

        <div className="article-card">
          <div className="article-author">
            <strong>@MAKSAT_K9</strong>
            <a href="#">https://kg.4pets.com/article/o-5...</a>
            <p className="article-date">22 декабря 2024 г.</p>
          </div>
          <p className="article-title">
            "ПОЧЕМУ СОБАКА ВЕДЁТ СЕБЯ СТРАННО? 7 ПОВЕДЕНЧЕСКИХ СИГНАЛОВ, КОТОРЫЕ НЕЛЬЗЯ ИГНОРИРОВАТЬ"
          </p>
          <p className="article-body">
            Однажды вы замечаете: ваш любимец ведёт себя не так, как обычно. Он стал прятаться в углу, слишком часто облизывает лапы, лает без видимой причины или наоборот — молчит и смотрит в одну точку. Многие списывают это на "характер" или "странности породы", но правда в том, что любые изменения в поведении собаки — это её способ что-то вам сказать... <span className="more">ещё</span>
          </p>
        </div>

        <div className="comments">
          <p><b>@catlady_kg</b>: 3 мин назад<br/>Какая прелесть! А для кошек там есть зона? 🐱</p>
          <p><b>@vet_nurlan</b>: 41 мин назад<br/>Отличное место! Я всё время рекомендую — очень чисто и животные спокойные 🐾</p>
          <p><b>@maksat_k9</b>: 1 ч назад<br/>Круто! Добавил в избранное на карте, спасибо за наводку 🙏</p>
        </div>
      </div>
    </div>
    </div>
    <Footer/>
    </>
  );
}