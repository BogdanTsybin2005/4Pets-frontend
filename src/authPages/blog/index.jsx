import './style.scss';
import Header from '../../authComponents/header';
import Footer from '../../components/footer';
import { Virtuoso } from 'react-virtuoso';
import { lazy, Suspense, useMemo } from 'react';



const BlogPost = lazy(() => import('./components/BlogPost'));
const ArticleCard = lazy(() => import('./components/ArticleCard'));

export default function Blog() {
  const posts = useMemo(
    () => [
      {
        id: 1,
        avatar: 'https://i.pravatar.cc/40?img=6',
        nickname: 'dog_mom_katya',
        location: 'Бишкек • 2 ч назад',
        caption: 'А вы замечали, что питомцы чувствуют ваше состояние?',
        image: 'https://img.freepik.com/free-photo/woman-summer-forest-playing-with-dog_1157-32785.jpg',
        text: [
          'Сегодня была в новом зоокафе, которое нашла через карту на 4Pets — <b>невероятное место!</b> Пока я пила капучино, мой пёсик Бублик играл с другими хвостиками 🐶💗',
          '<b>Советую всем сходить!</b>',
          'Адрес: ул. Исанова, рядом с парком. 📍',
          'P.S. Бублик оценил печеньки на 10/10 😋',
        ],
      },
      {
        id: 2,
        avatar: 'https://i.pravatar.cc/40?img=7',
        nickname: 'catlady_anna',
        location: 'Ош • 5 ч назад',
        caption: 'Нашла новый приют, который всем советую!',
        image: 'https://img.freepik.com/free-photo/portrait-cat-outdoors_23-2148555609.jpg',
        text: [
          'В приюте сейчас много котят, которым нужны заботливые руки.',
          'Если хотите помочь — пишите в личку!',
        ],
      },
      {
        id: 3,
        avatar: 'https://i.pravatar.cc/40?img=8',
        nickname: 'birds_fan',
        location: 'Бишкек • 1 дн назад',
        caption: 'Попугаи тоже любят лакомства',
        image: 'https://img.freepik.com/free-photo/colorful-macaws-eating-seeds_1398-475.jpg',
        text: ['Мой жако вчера попробовал новое зерно и был в восторге!'],
      },
    ],
    []
  );

  const articles = useMemo(
    () => [
      {
        id: 1,
        author: '@VET_NURLAN',
        link: 'https://kg.4pets.com/article/...',
        date: '5 апреля 2025 г.',
        title: '5 ПРОСТЫХ ПРАВИЛ УХОДА ЗА СОБАКОЙ: КАК СОХРАНИТЬ ЗДОРОВЬЕ И РАДОСТЬ ВАШЕГО ХВОСТИКА КАЖДЫЙ ДЕНЬ',
        body: 'Ваш пёс — не просто питомец, а настоящий член семьи. Но знаете ли вы, что даже мелкие ошибки в уходе могут сказаться на его здоровье и настроении? Чтобы ваш хвостатый друг всегда оставался бодрым, весёлым и благодарным — достаточно помнить о нескольких простых вещах... <span class="more">ещё</span>',
      },
      {
        id: 2,
        author: '@MAKSAT_K9',
        link: 'https://kg.4pets.com/article/o-5...',
        date: '22 декабря 2024 г.',
        title: 'ПОЧЕМУ СОБАКА ВЕДЁТ СЕБЯ СТРАННО? 7 ПОВЕДЕНЧЕСКИХ СИГНАЛОВ, КОТОРЫЕ НЕЛЬЗЯ ИГНОРИРОВАТЬ',
        body: 'Однажды вы замечаете: ваш любимец ведёт себя не так, как обычно. Он стал прятаться в углу, слишком часто облизывает лапы, лает без видимой причины или наоборот — молчит и смотрит в одну точку. Многие списывают это на "характер" или "странности породы", но правда в том, что любые изменения в поведении собаки — это её способ что-то вам сказать... <span class="more">ещё</span>',
      },
    ],
    []
  );

  return (
    <>
      <Header />
      <div className="blog-wrapper">
        <div className="blog-page">
          <div className="blog-feed">
            <div className="blog-header">
              <input type="text" className="blog-search" placeholder="Вы ищите на платформа 4Pets..." />
            </div>
            <div className="blog-stories">
              <img src="https://i.pravatar.cc/40?img=1" alt="avatar" className="story-avatar" />
              <img src="https://i.pravatar.cc/40?img=2" alt="avatar" className="story-avatar" />
              <img src="https://i.pravatar.cc/40?img=3" alt="avatar" className="story-avatar" />
              <img src="https://i.pravatar.cc/40?img=4" alt="avatar" className="story-avatar" />
              <img src="https://i.pravatar.cc/40?img=5" alt="avatar" className="story-avatar" />
              <div className="story-add">+</div>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              <Virtuoso
                data={posts}
                itemContent={(index, post) => <BlogPost post={post} />}
              />
            </Suspense>
          </div>
          <div className="blog-articles">
            <Suspense fallback={<div>Loading...</div>}>
              {articles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </Suspense>
            <div className="comments">
              <p><b>@catlady_kg</b>: 3 мин назад<br />Какая прелесть! А для кошек там есть зона? 🐱</p>
              <p><b>@vet_nurlan</b>: 41 мин назад<br />Отличное место! Я всё время рекомендую — очень чисто и животные спокойные 🐾</p>
              <p><b>@maksat_k9</b>: 1 ч назад<br />Круто! Добавил в избранное на карте, спасибо за наводку 🙏</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
