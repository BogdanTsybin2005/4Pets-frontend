import './style.css';
import Main4PetsLogo from "../../svg_pictures/4pets-logo"
import { useLanguageContext } from '../../context/LanguageContext';



export default function IntroPartOfProfilePage() {
    const {interfaceLanguage, allMyLanguageData} = useLanguageContext();
    return (
        <>  
            <div className='registration__intro-block'>
                <Main4PetsLogo width={150} height={79}/>
                <div>
                    <h2 className='registration__title'>{allMyLanguageData[interfaceLanguage]?.registrationPage.registrationProfileTitle}</h2>
                    <h2 className='registration_subtitle'>{allMyLanguageData[interfaceLanguage]?.registrationPage.registrationProfileSubtitle}</h2>
                </div>
            </div>
        </>
    )
}