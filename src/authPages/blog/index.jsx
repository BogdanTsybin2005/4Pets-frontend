import './style.scss';
import Header from '../../authComponents/header';
import Footer from '../../components/footer';
import { useSelector } from 'react-redux';
import allMyLanguageData from '../../data/data';
import Loader from '../../components/loader';
import BurgerMenu from '../../authComponents/burgerMenu';
import { lazy, Suspense, useMemo, useState, useRef, useEffect } from 'react';
import SearchBar from '../../authComponents/blog/SearchBar';
 

 
const BlogPost = lazy(() => import('../../authComponents/blog/BlogPost'));
const ArticleCard = lazy(() => import('../../authComponents/blog/ArticleCard'));
 
export default function Blog() {
  const [query, setQuery] = useState('');
  const interfaceLanguage = useSelector(state => state.language.interfaceLanguage);
  const lang = allMyLanguageData[interfaceLanguage]?.blogPage || allMyLanguageData.ru.blogPage;
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
         ]
      }
    ], []);
 
   const articles = useMemo(
     () => [
       {
         id: 1,
         author: '@VET_NURLAN',
         link: 'https://kg.4pets.com/article/...',
         date: '5 апреля 2025 г.',
         title: '5 ПРОСТЫХ ПРАВИЛ УХОДА ЗА СОБАКОЙ: КАК СОХРАНИТЬ ЗДОРОВЬЕ И РАДОСТЬ ВАШЕГО ХВОСТИКА КАЖДЫЙ ДЕНЬ',
         body: 'Ваш пёс — не просто питомец, а настоящий член семьи. Но знаете ли вы, что даже мелкие ошибки в уходе могут сказаться на его здоровье и настроении? Чтобы ваш хвостатый друг всегда оставался бодрым, весёлым и благодарным — достаточно помнить о нескольких простых вещах. Регулярные прогулки, сбалансированное питание и внимание к его состоянию здоровья творят чудеса. Не забывайте про игры и ласку — это укрепляет вашу связь и делает жизнь собаки счастливее.',
      },
       {
         id: 2,
         author: '@MAKSAT_K9',
         link: 'https://kg.4pets.com/article/o-5...',
         date: '22 декабря 2024 г.',
         title: 'ПОЧЕМУ СОБАКА ВЕДЁТ СЕБЯ СТРАННО? 7 ПОВЕДЕНЧЕСКИХ СИГНАЛОВ, КОТОРЫЕ НЕЛЬЗЯ ИГНОРИРОВАТЬ',
         body: 'Однажды вы замечаете: ваш любимец ведёт себя не так, как обычно. Он стал прятаться в углу, слишком часто облизывает лапы, лает без видимой причины или наоборот — молчит и смотрит в одну точку. Многие списывают это на "характер" или "странности породы", но правда в том, что любые изменения в поведении собаки — это её способ что-то вам сказать. Важно прислушаться и разобраться, что именно беспокоит вашего любимца.',
      },
     ],
     []
   );
 
  const filteredPosts = posts.filter(p =>
    p.caption.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <BurgerMenu isBurgerActive={isBurgerActive} setIsBurgerActive={setIsBurgerActive} />
      <Header
        scrollToFooter={() => footerRef.current?.scrollIntoView({ behavior: 'smooth' })}
        isBurgerActive={isBurgerActive}
        setIsBurgerActive={setIsBurgerActive}
      />
      <div className="blog-wrapper">
        <div className="blog-page">
          <div className="blog-feed">
            <SearchBar value={query} onChange={setQuery} placeholder={lang.searchPlaceholder} />
            <Suspense fallback={<Loader text={lang.loading} />}>
              {filteredPosts.map(post => (
                <BlogPost key={post.id} post={post} />
              ))}
            </Suspense>
           </div>
           <div className="blog-articles">
            <Suspense fallback={<Loader text={lang.loading} />}>
              {articles.map(article => (
                <ArticleCard key={article.id} article={article} readMoreText={lang.readMore} />
              ))}
            </Suspense>
            <div className="comments">
              <p>
                <b>@catlady_kg</b>: 3 мин назад
                <br />Какая прелесть! А для кошек там есть зона? 🐱
              </p>
              <p>
                <b>@vet_nurlan</b>: 41 мин назад
                <br />Отличное место! Я всё время рекомендую — очень чисто и животные спокойные 🐾
              </p>
              <p>
                <b>@maksat_k9</b>: 1 ч назад
                <br />Круто! Добавил в избранное на карте, спасибо за наводку 🙏
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer ref={footerRef} />
    </>
  );
}
