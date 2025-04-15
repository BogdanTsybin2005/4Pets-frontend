import './style.css';
import { UserProfileButton } from '../../components/button';
import { TheLinkToPageButton } from '../../components/button';
import { useLanguageContext } from '../../context/LanguageContext';
import InsertPictureLogoIcon from '../../svg_pictures/insert-picture-logo';
import ChangePictureLogoIcon from '../../svg_pictures/change-picture-logo';
import IntroPartOfProfilePage from '../../components/intorPartOfProfilePage';
import UserLogo from '../../components/userLogo';
import { LinkButton } from '../../components/button';




export default function UserProfile() {
    const {interfaceLanguage, allMyLanguageData} = useLanguageContext();

    console.log(allMyLanguageData[interfaceLanguage].userProfilePage)

    return (
        <div className="user-profile">
            <div className='user-profile-content'>
                <div className='user-profile-header'>
                    <LinkButton url={'registration'} linkText={allMyLanguageData[interfaceLanguage].userProfilePage.linkTextButton}/>
                </div>
                <div className='user-profile-body'>
                    <div>
                        <IntroPartOfProfilePage/>

                        <UserLogo/>
                        <div className='user-profile-buttons'>
                            <UserProfileButton onCLick={() => console.log('Вставить изображение')}><InsertPictureLogoIcon/>{allMyLanguageData[interfaceLanguage].userProfilePage.insertLogoTextForButton}</UserProfileButton>
                            <UserProfileButton onCLick={() => console.log('Изменить изображаение')}><ChangePictureLogoIcon/>{allMyLanguageData[interfaceLanguage].userProfilePage.changeLogoTextForButton}</UserProfileButton>
                        </div>
                    </div>

                    <TheLinkToPageButton 
                        buttonText={allMyLanguageData[interfaceLanguage]?.userProfilePage.buttonForRegistrationText} 
                        isActive={true}
                        url={'success'}
                    />
                </div>
            </div>
        </div>
    );
}