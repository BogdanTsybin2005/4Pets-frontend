import './style.css';
import Section from '../../components/section';
import { useLanguageContext } from '../../context/LanguageContext';
import { useRef, useEffect } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Header from '../../components/header';
import Footer from '../../components/footer'
import SparkIcon from '../../svg_pictures/spark-icon';
import QuotationMarkIcon from '../../svg_pictures/quote-mark-icon';

import Main4PetsArrow from '../../svg_pictures/4pets-arrow-to-main-title';





function MainPageTitle({language}) {
    const {allMyLanguageData, interfaceLanguage} = useLanguageContext();
    const titleResult = {
        'ru': (
            <h1>
                <div>
                    <div className='_4Petst--purple-text'>
                        4Pets
                    </div> – онлайн- 
                    <span><SparkIcon width={55} height={57}/></span>
                </div> 
                    пространство для общения, заботы и помощи <div className='_4Petst--purple-text'>питомцам</div>
            </h1>
        ), 
        'kg': (
            <h1>
                <div>
                    <div className='_4Petst--purple-text'>
                        4Pets
                    </div> – онлайн- 
                    <span><SparkIcon width={55} height={57}/></span>
                </div> 
                    <div className='_4Petst--purple-text'>үй жаныбарларына</div> кам көрүү, жардам берүү жана байланыш үчүн мейкиндик
            </h1>
        ),
        'en': (
            <h1>
                <div>
                    <div className='_4Petst--purple-text'>
                        4Pets
                    </div> is an online
                    <span><SparkIcon width={55} height={57}/></span>
                </div> 
                space for socializing, caring for and helping <div className='_4Petst--purple-text'>pets</div>
            </h1>
        ), 
    }
    
    return (
        <>
            <div className='main__bishkek-access'>
                <p>{allMyLanguageData[interfaceLanguage]?.bishkekAccess}</p>
                <span>
                    <Main4PetsArrow/>
                </span>
            </div>
            {titleResult[language]}
        </>
    )
}


export default function MainPage() {
    const {interfaceLanguage, allMyLanguageData} = useLanguageContext();
    
    const prevSliderButton = useRef(null);
    const nextSliderButton = useRef(null);
    const swiperRef = useRef(null);

    const slider4PetsNextButton = useRef(null);
    const slider4PetsPrevButton = useRef(null);
    const slider4PetsRef = useRef(null);


    const handleSlidersButtonsAndSlider = (prevButton, nextButton, currentSwiperRef) => {
        if (currentSwiperRef.current && currentSwiperRef.current.params && prevButton.current && nextButton.current) {
            currentSwiperRef.current.params.navigation.prevEl = prevButton.current;
            currentSwiperRef.current.params.navigation.nextEl = nextButton.current;
            currentSwiperRef.current.navigation.destroy();
            currentSwiperRef.current.navigation.init();
            currentSwiperRef.current.navigation.update();
        }
    }

    useEffect(() => {
        handleSlidersButtonsAndSlider(prevSliderButton, nextSliderButton, swiperRef);
        handleSlidersButtonsAndSlider(slider4PetsPrevButton, slider4PetsNextButton, slider4PetsRef);
    }, []);  

    
    
    return <div className="main__page-body">
        <Header/>
        <div className="main__start-screen">
            <div className="main__start-context">
                <div className="main__start-title-context">
                    <MainPageTitle language={interfaceLanguage}/>
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
                <h2 className='main__slider-list-title'>
                    {allMyLanguageData[interfaceLanguage]?.possibilitiesSection?.title || 'Загрузка...'}
                </h2>

                <Swiper
                    modules={[Navigation]}
                    slidesPerView={2.5}
                    navigation={false}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                >
                    {allMyLanguageData[interfaceLanguage]?.possibilitiesSection?.allPossibilities?.map((item) => {                        
                        return (
                            <SwiperSlide key={item.slideID}>
                                <div className="main__slider-item">
                                    <div className="main__circle-block-for-icon">{item.image && <item.image />}</div>
                                    <h2 className="main__slider-title">{item.title}</h2>
                                    <div>
                                    <h2 className="main__slider-subtitle">{item.subtitle}</h2>
                                        <ol className="main__slider-item-list">
                                            {item.steps.map((step, stepIndex) => (
                                                <li key={`step-${item.slideID}-${stepIndex}`}>{step.stepID}. {step.text}</li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}


                </Swiper>
            </div>
            <div className='main__slide-buttons'>
                <div className="swiper-button-next" ref={nextSliderButton}>{'>'}</div>
                <div className="swiper-button-prev" ref={prevSliderButton}>{'<'}</div>
            </div>
        </div>


        <Section option={2}/>
        

        <div className="main__4pets-team-slider">
            <Swiper
                effect='fade'
                modules={[Navigation]}
                centeredSlides={true}
                onSwiper={(swiper) => (slider4PetsRef.current = swiper)}
            >   
                {allMyLanguageData[interfaceLanguage]?.FIP16_4pets.map((item) => {
                    return (
                        <SwiperSlide key={item.id}>
                            <div className="main__4pets-team-slide">
                                <div className="main__4pets-slide-content">
                                    <div className="main__4pets-slide-image-block">
                                        <img src={item.picture} alt="img" />
                                        <div className="main__4pets-spark-block">
                                            <div>
                                                <SparkIcon width={97} height={97}/>    
                                                <SparkIcon width={97} height={97}/> 
                                            </div>
                                            <div>
                                                <SparkIcon width={97} height={97}/>   
                                            </div>
                                        </div>
                                        <QuotationMarkIcon/>
                                    </div>
                                    <div className="main__4pets-slide-text-block">
                                        <h2 className="main__4pets-slide-student-name">{item.fullName}</h2>
                                        <p className="main__4petst-slide-text">{item.description}</p>
                                        <div className='main__4pets-slide-buttons-block'>
                                            <div className='main__slide-buttons'>
                                                <div className="swiper-button-next" ref={nextSliderButton}>{'>'}</div>
                                                <div className="swiper-button-prev" ref={prevSliderButton}>{'<'}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
                
            </Swiper>
        </div>


        <Section option={3}/>
        

        <Footer/>
    </div>
}
