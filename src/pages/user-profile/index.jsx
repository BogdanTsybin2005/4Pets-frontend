import './style.css';
import { UserProfileButton, TheLinkToPageButton, LinkButton } from '../../components/button';
import { useLanguageContext } from '../../context/LanguageContext';
import InsertPictureLogoIcon from '../../svg_pictures/insert-picture-logo';
import ChangePictureLogoIcon from '../../svg_pictures/change-picture-logo';
import IntroPartOfProfilePage from '../../components/intorPartOfProfilePage';
import UserLogo from '../../components/userLogo';



export default function UserProfile() {
    const { interfaceLanguage, allMyLanguageData } = useLanguageContext();
    const lang = allMyLanguageData[interfaceLanguage]?.userProfilePage;

    return (
        <div className="user-profile">
            <div className='user-profile-content'>
                <div className='user-profile-header'>
                    <LinkButton url={'registration'} linkText={lang.linkTextButton} />
                </div>

                <div className='user-profile-body'>
                    <div>
                        <IntroPartOfProfilePage />
                        <UserLogo />
                        <div className='user-profile-buttons'>
                            <UserProfileButton onClick={() => console.log('Insert image')}>
                                <InsertPictureLogoIcon /> 
                                {lang.insertLogoTextForButton}
                            </UserProfileButton>
                            <UserProfileButton onClick={() => console.log('Change image')}>
                                <ChangePictureLogoIcon /> 
                                {lang.changeLogoTextForButton}
                            </UserProfileButton>
                        </div>
                    </div>

                    <TheLinkToPageButton 
                        buttonText={lang.buttonForRegistrationText} 
                        isPrimary={true}
                        isActive={true}
                        url={'success'} 
                    />
                </div>
            </div>
        </div>
    );
}
