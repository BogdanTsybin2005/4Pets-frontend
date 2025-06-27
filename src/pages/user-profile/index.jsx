import './style.scss';
import { useEffect, useState, useRef } from 'react';
import { UserProfileButton, TheLinkToPageButton, LinkButton } from '../../components/button';
import { useSelector, useDispatch } from 'react-redux';
import allMyLanguageData from '../../data/data';
import InsertPictureLogoIcon from '../../svg_pictures/insert-picture-logo';
import ChangePictureLogoIcon from '../../svg_pictures/change-picture-logo';
import IntroPartOfProfilePage from '../../components/intorPartOfProfilePage';
import UserLogo from '../../components/userLogo';
import { setRegistrationData } from '../../store/registrationSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



export default function UserProfile() {
  const dispatch = useDispatch();
  const interfaceLanguage = useSelector(state => state.language.interfaceLanguage);
  const navigate = useNavigate();
  const lang = allMyLanguageData[interfaceLanguage]?.userProfilePage;

  const registrationData = useSelector(state => state.registration);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleSelectFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(setRegistrationData({ avatar: URL.createObjectURL(file), avatarFile: file }));
    }
  };

  const triggerFile = () => fileInputRef.current?.click();

  useEffect(() => {
    if (!registrationData.email || !registrationData.password || !registrationData.username) {
      navigate('/signup');
    }
  }, [registrationData]);

  const handleNext = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const formData = new FormData();
      Object.entries(registrationData).forEach(([key, value]) => {
        if (key !== 'avatar' && key !== 'avatarFile') {
          formData.append(key, value);
        }
      });
      if (registrationData.avatarFile) {
        formData.append('avatar', registrationData.avatarFile);
      }
      await axios.post('http://localhost:5000/auth/register', formData);
      navigate('/success');
    } catch (err) {
      const msg = err.response?.data?.message || 'Ошибка сервера';
      console.error(msg);
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
            <UserProfileButton onClick={triggerFile}>
              <InsertPictureLogoIcon />
              {lang.insertLogoTextForButton}
            </UserProfileButton>
            <UserProfileButton onClick={triggerFile}>
              <ChangePictureLogoIcon />
              {lang.changeLogoTextForButton}
            </UserProfileButton>
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleSelectFile} hidden />
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