import './style.scss';
import { useLanguageContext } from '../../context/LanguageContext';
import SparkIcon from '../../svg_pictures/spark-icon';
import Main4PetsArrow from '../../svg_pictures/4pets-arrow-to-main-title';
import useWindowWidth from '../../hooks/useWindowWidth';


export default function MainPageTitle({language}) {
    const {allMyLanguageData, interfaceLanguage} = useLanguageContext();
    const width = useWindowWidth();
    const customSparkIconWidth = width >= 1000 ? 55 : 22;
    const customSparkIconHeight = width >= 1000 ? 57 : 24;
    

    const titleResult = {
        'ru': (
            <h1>
                <div>
                    <div className='_4Petst--purple-text'>
                        4Pets
                    </div> – онлайн- 
                    <span><SparkIcon width={customSparkIconWidth} height={customSparkIconHeight}/></span>
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
                    <span><SparkIcon width={customSparkIconWidth} height={customSparkIconHeight}/></span>
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
                    <span><SparkIcon width={customSparkIconWidth} height={customSparkIconHeight}/></span>
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
