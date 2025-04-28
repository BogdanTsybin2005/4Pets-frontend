import './style.scss';
import Large4PetsSectionIcon from '../../svg_pictures/4pets-large-section-icon';
import dog2Picture from '../../svg_pictures/pictures/dog-2.png';
import { LoginButton } from '../button';
import { useLanguageContext } from '../../context/LanguageContext';
import dogPawIcon from '../../svg_pictures/pictures/Ellipse-dog-paw.png';
import useWindowWidth from '../../hooks/useWindowWidth';



function GenerateDecorCircles() {
    return <div className="main__section-decor">
        {Array.from({ length: 6 }, (_, i) => i + 1).map((item) => {
            return <div key={item} className="main__section-decor-item">
                <img src={dogPawIcon} alt="img" />
            </div>
        })}
    </div>
}

export default function Section({option = 1}) {
    const width = useWindowWidth();
    const {allMyLanguageData, interfaceLanguage} = useLanguageContext();    
    const sectionTextMessage = allMyLanguageData[interfaceLanguage]?.heroText;
    const customLarge4PetsSectionIconWidth = width >= 1000 ? 586 : 286;
    const customLarge4PetsSectionIconHeight = width >= 1000 ? 530 : 230;
    
    


    let result = {
        '1': (
            <div className='main__section-1'>
                <GenerateDecorCircles/>
                <p className='main__section-decor-text'>{sectionTextMessage?.toUpperCase()}</p>
                <GenerateDecorCircles/>
            </div>    
        ),
        '2': (
            <div className='main__section-2'>
                <div className="main__section-2-container">
                    <div className='main__section-4pets-paw-icon'>
                        <Large4PetsSectionIcon 
                            width={customLarge4PetsSectionIconWidth} 
                            height={customLarge4PetsSectionIconHeight}
                        />
                    </div>
                    <div className="maon__section-structire-block">
                        <h2 className='main__section-list-title'>
                            {allMyLanguageData[interfaceLanguage]?.howItWorks.title}
                        </h2>
                        <ul className="main__section-list">
                            {allMyLanguageData[interfaceLanguage]?.howItWorks.steps.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <h2>{item.title}</h2>
                                        <p>{item.description}</p>
                                    </li>
                                )
                            })}
                        </ul>
                        <LoginButton option='secondary' buttonText={allMyLanguageData[interfaceLanguage]?.howItWorks.buttonText}/>
                    </div>
                </div>
            </div>
        ),
        '3': (
            <div className='main__section-3'>
                <div className="main__section-image-block">
                    <div>
                        <div className="main__section-image-container">
                            <img src={dog2Picture} alt="img" />
                        </div>
                    </div>
                </div>
                <div className="main__section-title-block">
                    <h2 className="main__section-title">
                        {allMyLanguageData[interfaceLanguage]?.contactUs}
                    </h2>
                </div>
            </div>
        )
    }
    return (
        <>
            {result[String(option)]}
        </>
    )
}
