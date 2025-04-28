import './style.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import SparkIcon from '../../svg_pictures/spark-icon';
import QuotationMarkIcon from '../../svg_pictures/quote-mark-icon';
import { useLanguageContext } from '../../context/LanguageContext';
import { useRef } from 'react';




export default function TeamSlider() {
    const {allMyLanguageData, interfaceLanguage} = useLanguageContext();
    const slider4PetsNextButton = useRef(null);
    const slider4PetsPrevButton = useRef(null);
    const slider4PetsRef = useRef(null);

    return (
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
                                                <div className="swiper-button-next" ref={slider4PetsNextButton}>{'>'}</div>
                                                <div className="swiper-button-prev" ref={slider4PetsPrevButton}>{'<'}</div>
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
    );
}