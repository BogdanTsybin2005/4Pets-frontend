import './style.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';



import { useLanguageContext } from '../../context/LanguageContext';
import SparkIcon from '../../svg_pictures/spark-icon';
import QuotationMarkIcon from '../../svg_pictures/quote-mark-icon';

export default function TeamSlider() {
  const { allMyLanguageData, interfaceLanguage } = useLanguageContext();

  return (
    <div className="main__4pets-team-slider">
      <Swiper
        modules={[Navigation, EffectFade]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        centeredSlides={true}
        slidesPerView={1}
      >
        {allMyLanguageData[interfaceLanguage]?.FIP16_4pets.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="main__4pets-slide">
              <div className="main__4pets-slide-content">
                <div className="main__4pets-slide-image-block">
                  <img src={item.picture} alt="img" />
                  <div className="main__4pets-spark-block">
                    <div>
                      <SparkIcon width={97} height={97} />
                      <SparkIcon width={97} height={97} />
                    </div>
                    <div>
                      <SparkIcon width={97} height={97} />
                    </div>
                  </div>
                  <QuotationMarkIcon />
                </div>
                <div className="main__4pets-slide-text-block">
                  <h2 className="main__4pets-slide-student-name">{item.fullName}</h2>
                  <p className="main__4petst-slide-text">{item.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className="main__slide-buttons">
        <div className="swiper-button-prev">{'<'}</div>
        <div className="swiper-button-next">{'>'}</div>
      </div>
    </div>
  );
}
