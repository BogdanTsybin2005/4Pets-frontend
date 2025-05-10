import './style.scss';
import Section from '../../components/section';
import { useRef, useEffect, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { useLanguageContext } from '../../context/LanguageContext';
import MainPageTitle from '../../components/mainPageTitle';
import dof1Picture from '../../svg_pictures/pictures/dog-1.png';
import TeamSlider from '../../components/4petsTeamSlider';
import BurgerMenu from '../../components/burgerMenu';
import useWindowWidth from '../../hooks/useWindowWidth';



export default function MainPage() {
    const { interfaceLanguage, allMyLanguageData } = useLanguageContext();
    const footerRef = useRef();
    const slider1Ref = useRef(null);
    const slider1PrevBtn = useRef(null);
    const slider1NextBtn = useRef(null);
    const [isBurderActive, setIsBurgerActive] = useState(false);
    const customWindowWidth = useWindowWidth();

    const handleNavigation = (swiperRef, prevBtnRef, nextBtnRef) => {
        if (
            swiperRef.current &&
            swiperRef.current.params &&
            prevBtnRef.current &&
            nextBtnRef.current
        ) {
            swiperRef.current.params.navigation.prevEl = prevBtnRef.current;
            swiperRef.current.params.navigation.nextEl = nextBtnRef.current;
            swiperRef.current.navigation.destroy();
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    };

    useEffect(() => {
        handleNavigation(slider1Ref, slider1PrevBtn, slider1NextBtn);
    }, []);


    const toggleBurger = () => {
        setIsBurgerActive((prev) => {
            const newState = !prev;
            document.body.style.overflow = newState ? 'hidden' : 'auto';
            return newState;
        });
    };
    useEffect(() => {
        if (customWindowWidth >= 1000 && isBurderActive) {
            setIsBurgerActive(false);
            document.body.style.overflow = 'auto';
        }
    }, [customWindowWidth]);    
    
    return (
        <div className="main__page-body">
            <BurgerMenu
                isBurderActive={isBurderActive}
                setIsBurgerActive={setIsBurgerActive}
            />

            <Header
                scrollToFooter={() => {
                    footerRef.current?.scrollIntoView({ behavior: 'smooth' });
                }}
                isBurderActive={isBurderActive}
                setIsBurgerActive={toggleBurger}
            />


            <div className="main__start-screen">
                <div className="main__start-context">
                    <div className="main__start-title-context">
                        <MainPageTitle language={interfaceLanguage} />
                    </div>
                    <div className="main__start-image">
                        <img src={dof1Picture} alt="img" />
                    </div>
                </div>
                <div className="main-aside-decor"></div>
            </div>

            <Section option={1} />

            <div className="main__slider-section">
                <div className="main__slider-block">
                    <h2 className="main__slider-list-title">
                        {allMyLanguageData[interfaceLanguage]?.possibilitiesSection?.title || 'Загрузка...'}
                    </h2>
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView="auto"
                        navigation={{
                            prevEl: slider1PrevBtn.current,
                            nextEl: slider1NextBtn.current,
                        }}
                        onSwiper={(swiper) => (slider1Ref.current = swiper)}
                    >
                        {allMyLanguageData[interfaceLanguage]?.possibilitiesSection?.allPossibilities?.map(
                            (item) => (
                                <SwiperSlide key={item.slideID} className="main__swiper-slide">
                                <div className="main__slider-item">
                                    <div className="main__circle-block-for-icon">
                                    {item.image && <item.image />}
                                    </div>
                                    <h2 className="main__slider-title">{item.title}</h2>
                                    <div>
                                    <h2 className="main__slider-subtitle">{item.subtitle}</h2>
                                    <ol className="main__slider-item-list">
                                        {item.steps.map((step) => (
                                        <li key={`step-${item.slideID}-${step.stepID}`}>
                                            {step.stepID}. {step.text}
                                        </li>
                                        ))}
                                    </ol>
                                    </div>
                                </div>
                                </SwiperSlide>
                            )
                        )}
                        <SwiperSlide className="main__swiper-slide last-slide" />
                    </Swiper>
                </div>

                <div className="main__slide-buttons">
                    <div className="swiper-button-prev" ref={slider1PrevBtn}>{'<'}</div>
                    <div className="swiper-button-next" ref={slider1NextBtn}>{'>'}</div>
                </div>
            </div>

            <Section option={2} />
            <TeamSlider/>
            <Section option={3} />



            <Footer ref={footerRef} />
        </div>
    );
}
