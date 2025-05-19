import './style.scss';
import { useEffect } from 'react';
import { UserProfileButton, TheLinkToPageButton, LinkButton } from '../../components/button';
import { useLanguageContext } from '../../context/LanguageContext';
import InsertPictureLogoIcon from '../../svg_pictures/insert-picture-logo';
import ChangePictureLogoIcon from '../../svg_pictures/change-picture-logo';
import IntroPartOfProfilePage from '../../components/intorPartOfProfilePage';
import UserLogo from '../../components/userLogo';
import { useRegistrationContext } from '../../context/RegistrationContext';
import { useNavigate } from 'react-router';



export default function UserProfile() {
  const { interfaceLanguage, allMyLanguageData } = useLanguageContext();
  const navigate = useNavigate();
  const lang = allMyLanguageData[interfaceLanguage]?.userProfilePage;

  const { registrationData, setRegistrationData } = useRegistrationContext();

  const handleImageUpload = (url) => {
    setRegistrationData((prev) => ({ ...prev, avatar: url }));
  };

  useEffect(() => {
    if (!registrationData.email || !registrationData.password || !registrationData.username) {
      navigate('/signup');
    }
  }, [registrationData]);

  const handleNext = () => {
    navigate('/success');
  };


  return (
    <div className="user-profile">
      <div className="user-profile-content">
        <div className="user-profile-header">
          <LinkButton url="registration" linkText={lang.linkTextButton} />
        </div>
        <div className="user-profile-body">
          <IntroPartOfProfilePage />
          <UserLogo src={registrationData.avatar} />
          <div className="user-profile-buttons">
            <UserProfileButton onClick={() => handleImageUpload('https://via.placeholder.com/150')}>
              <InsertPictureLogoIcon />
              {lang.insertLogoTextForButton}
            </UserProfileButton>
            <UserProfileButton onClick={() => handleImageUpload('https://via.placeholder.com/200')}>
              <ChangePictureLogoIcon />
              {lang.changeLogoTextForButton}
            </UserProfileButton>
          </div>
          <TheLinkToPageButton
            buttonText={lang.buttonForRegistrationText}
            isPrimary
            isActive
            onClick={handleNext}
          />
        </div>
      </div>
    </div>
  );
}