import './style.css';
import Main4PetsArrow from '../../svg_pictures/4pets-arrow-to-main-title';
import Section from '../../components/section';
import { useLanguageContext } from '../../context/LanguageContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useRef, useEffect } from 'react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




export default function MainPage() {
    const {interfaceLanguage, allMyLanguageData} = useLanguageContext();
    const prevSliderButton = useRef(null);
    const nextSliderButton = useRef(null);
    const swiperRef = useRef(null);
    


    useEffect(() => {
        if (
            swiperRef.current &&
            swiperRef.current.params &&
            prevSliderButton.current &&
            nextSliderButton.current
        ) {
            swiperRef.current.params.navigation.prevEl = prevSliderButton.current;
            swiperRef.current.params.navigation.nextEl = nextSliderButton.current;
        
            swiperRef.current.navigation.destroy();
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    return <div className="main__page-body">
        <div className="main__start-screen">
            <div className="main__start-context">
                <div className="main__start-title-context">
                    <div className='main__bishkek-access'>
                        <p>{allMyLanguageData[interfaceLanguage].bishkekAccess}</p>
                        <span>
                            <Main4PetsArrow/>
                        </span>
                    </div>
                    <h1>
                        <div>
                            <div className='_4Petst--purple-text'>
                                4Pets
                            </div> – онлайн-
                        </div> 
                            пространство для общения, заботы и помощи <div className='_4Petst--purple-text'>питомцам</div>
                    </h1>
                </div>
                <div className="main__start-image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL5lkD-vMcSbKV1dek1EBuzRzbN2oiELkWCg&s" alt="img" />
                </div>
            </div>
            <div className="main-aside-decor"></div>
        </div>


        <Section option={1}/>


        <div className='main__slider-section'>
            <div className='main__slider-block'>
                <h2 className='main__slider-list-title'>{allMyLanguageData[interfaceLanguage].possibilitiesSection.title}</h2>
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={2.5}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevSliderButton.current;
                        swiper.params.navigation.nextEl = nextSliderButton.current;
                    }}
                    navigation={{
                        prevEl: prevSliderButton.current,
                        nextEl: nextSliderButton.current,
                    }}
                >
                    {allMyLanguageData[interfaceLanguage].possibilitiesSection.allPossibilities.map((item, index) => (
                    <SwiperSlide key={`slide-${index}`}>
                        <div className="main__slider-item">
                            <div className="main__circle-block-for-icon">{item.image && <item.image />}</div>
                            <h2 className="main__slider-title">{item.title}</h2>
                            <div>
                            <h2 className="main__slider-subtitle">{item.subtitle}</h2>
                                <ol className="main__slider-item-list">
                                    {item.steps.map((step, stepIndex) => (
                                    <li key={`step-${index}-${stepIndex}`}>{step.stepID}. {step.text}</li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </SwiperSlide>
                    ))}


                </Swiper>
            </div>
            <div className='main__slide-buttons'>
                <div className="swiper-button-next" ref={nextSliderButton}>{'>'}</div>
                <div className="swiper-button-prev" ref={prevSliderButton}>{'<'}</div>
            </div>
        </div>


        <Section option={2}/>
    </div>
}
