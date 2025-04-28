import './style.scss';
import { Input } from '../../components/input';
import CustomSelect from '../../components/customSelect';
import { LinkButton, TheLinkToPageButton } from '../../components/button';
import { useLanguageContext } from '../../context/LanguageContext';
import IntroPartOfProfilePage from '../../components/intorPartOfProfilePage';



export default function ProfileRegistrationPage() {
    const {interfaceLanguage, allMyLanguageData} = useLanguageContext();
    const lang = allMyLanguageData[interfaceLanguage]?.userProfilePage;

    return (
        <>
            <div>
                <LinkButton linkText={lang.linkTextButton} url={'signup'} isFixed/>
            </div>
            <div className='registration__body'>
                <form action="#" className="registration__form">
                    <IntroPartOfProfilePage />
                    <ul className="registration__input-list">
                        {allMyLanguageData[interfaceLanguage]?.registrationPage.form.map((item) => {
                                    return <li key={item.id}>
                                        {item.type !== 'select' ? (
                                            <Input
                                                label={item.label}
                                                type={item.type}
                                                placeholder={item.placeholder}
                                                inputFunction={(e) => console.log(e.target.value)}
                                            />
                                        ) : (
                                            <>
                                                <label htmlFor={item.id} className="registration__label">{item.label}</label>
                                                <CustomSelect
                                                    options={item.options}
                                                    selected={item.options.find(opt => opt.selected)}
                                                    onChange={(selectedOption) => console.log(selectedOption)}
                                                />

                                            </>
                                        )}
                                    </li>
                                }
                            )
                        }
                    </ul>
                    <TheLinkToPageButton 
                        buttonText={allMyLanguageData[interfaceLanguage]?.registrationPage.buttonForRegistrationText} 
                        url={'user-profile'} 
                        isActive={true}
                    />
                </form>
            </div>
        </>
    )
}