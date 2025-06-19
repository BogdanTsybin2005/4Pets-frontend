import './style.scss';
import Main4PetsLogo from "../../svg_pictures/4pets-logo"
import { useSelector } from 'react-redux';
import allMyLanguageData from '../../data/data';



export default function IntroPartOfProfilePage() {
    const interfaceLanguage = useSelector(state => state.language.interfaceLanguage);
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