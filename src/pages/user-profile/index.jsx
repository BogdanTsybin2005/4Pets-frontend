import './style.scss';
import { useEffect, useState } from 'react';
import { UserProfileButton, TheLinkToPageButton, LinkButton } from '../../components/button';
import { useLanguageContext } from '../../context/LanguageContext';
import InsertPictureLogoIcon from '../../svg_pictures/insert-picture-logo';
import ChangePictureLogoIcon from '../../svg_pictures/change-picture-logo';
import IntroPartOfProfilePage from '../../components/intorPartOfProfilePage';
import UserLogo from '../../components/userLogo';
import { useRegistrationContext } from '../../context/RegistrationContext';
import { useNavigate } from 'react-router';
import axios from 'axios';



export default function UserProfile() {
  const { interfaceLanguage, allMyLanguageData } = useLanguageContext();
  const navigate = useNavigate();
  const lang = allMyLanguageData[interfaceLanguage]?.userProfilePage;

  const { registrationData, setRegistrationData } = useRegistrationContext();
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (url) => {
    setRegistrationData((prev) => ({ ...prev, avatar: url }));
  };

  useEffect(() => {
    if (!registrationData.email || !registrationData.password || !registrationData.username) {
      navigate('/signup');
    }
  }, [registrationData]);

  const handleNext = async () => {
    if (loading) return;
    setLoading(true);
    try {
      await axios.post('http://localhost:5000/auth/register', registrationData);
      navigate('/success');
    } catch (err) {
      const msg = err.response?.data?.message || 'Ошибка сервера';
      alert(msg);
    } finally {
      setLoading(false);
    }
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
            buttonText={loading ? '⏳ Подождите...' : lang.buttonForRegistrationText}
            isPrimary
            isActive={!loading}
            onClick={handleNext}
          />
        </div>
      </div>
    </div>
  );
}