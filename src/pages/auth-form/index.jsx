import './style.css';
import Main4PetsLogo from '../../svg_pictures/4pets-logo';
import { TheLinkToPageButton } from '../../components/button';
import { useLanguageContext } from '../../context/LanguageContext';
import { Input } from '../../components/input';
import CheckMarkIcon from '../../svg_pictures/check-mark-icon';
import ChromeIcon from '../../svg_pictures/ChromeIcon';
import AppleIcon from '../../svg_pictures/AppleIcon';
import MicrosoftIcon from '../../svg_pictures/MicrosoftIcon';



export default function AuthLayout({ currentForm }) {
    const { interfaceLanguage, allMyLanguageData } = useLanguageContext();
    const langData = allMyLanguageData[interfaceLanguage].authenticationPage;

    return (
        <div className='auth__start-page'>
            <div className="auth__start-page-block">
                <div className="auth__start-page-image-block">
                    <img
                        src="https://habrastorage.org/webt/5d/ac/be/5dacbe832379f831739758.jpeg"
                        alt="img"
                    />
                </div>
            </div>

            <div className="auth__start-page-block">
                <form className="auth__form-block">
                    <Main4PetsLogo width={200} height={106} />

                    <div className="auth__buttons-block">
                        <TheLinkToPageButton
                            buttonText={langData.loginButton}
                            url="login"
                            isActive={currentForm === 'login'}
                        />
                        <TheLinkToPageButton
                            buttonText={langData.signUpButton}
                            url="signup"
                            isActive={currentForm === 'signup'}
                        />
                    </div>

                    {langData.authenticationInputs.map((item) => (
                        <Input
                            key={item.inputID}
                            label={item.label}
                            placeholder={item.placeholder}
                            type={item.type}
                        />
                    ))}

                    <ul className='auth__list-validation-criterias'>
                        {langData.validationCriteria.map((item) => (
                            <li key={item.criteriaID}>
                                <CheckMarkIcon />
                                <span>{item.text}</span>
                            </li>
                        ))}
                    </ul>

                    <TheLinkToPageButton
                        buttonText={currentForm === 'login' ? langData.loginButton : langData.signUpButton}
                        url={currentForm  === 'signup' ? 'registration' : 'login'}
                        isPrimary
                    />

                    <div className="auth__registration-option-separator-block">
                        <span></span>
                        <p>{langData.or}</p>
                        <span></span>
                    </div>

                    <div className="login__options">
                        <a href="#"><ChromeIcon /></a>
                        <a href="#"><AppleIcon /></a>
                        <a href="#"><MicrosoftIcon /></a>
                    </div>
                </form>
            </div>
        </div>
    );
}
