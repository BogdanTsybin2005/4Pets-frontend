import { useLanguageContext } from '../../context/LanguageContext';
import { TheLinkToPageButton } from '../../components/button';
import Main4PetsLogo from '../../svg_pictures/4pets-logo';
import TheSuccessfulRegistrationIcon from '../../svg_pictures/frame-for-the-successful-registration';
import './style.scss';



export default function SuccessfulRegistrationPage() {
    const {allMyLanguageData, interfaceLanguage} = useLanguageContext();

    return (
        <div className="successful-registration-page">
            <div className="successful-registration-block">
                <Main4PetsLogo width={150} height={79}/>
                <TheSuccessfulRegistrationIcon/>
                <div>
                    <h2 className='registration__title'>{allMyLanguageData[interfaceLanguage]?.successfulRegistrationPage.title}</h2>
                    <h2 className='registration_subtitle'>{allMyLanguageData[interfaceLanguage]?.successfulRegistrationPage.subtitle}</h2>
                </div>
                <TheLinkToPageButton 
                    buttonText={allMyLanguageData[interfaceLanguage]?.successfulRegistrationPage.buttonText} 
                    isActive={true}
                    url={""}    
                />
            </div>

        </div>
    );
}
