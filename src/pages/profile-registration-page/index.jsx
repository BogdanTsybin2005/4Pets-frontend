import './style.scss';
import { useEffect, useState } from 'react';
import { Input } from '../../components/input';
import CustomSelect from '../../components/customSelect';
import { LinkButton, TheLinkToPageButton } from '../../components/button';
import { useLanguageContext } from '../../context/LanguageContext';
import IntroPartOfProfilePage from '../../components/intorPartOfProfilePage';
import { useNavigate } from 'react-router';
import axios from 'axios';



export default function ProfileRegistrationPage() {
    const { interfaceLanguage, allMyLanguageData } = useLanguageContext();
    const lang = allMyLanguageData[interfaceLanguage]?.userProfilePage;
    const formFields = allMyLanguageData[interfaceLanguage]?.registrationPage.form;
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        username: '',
        city: formFields[1].options.find(opt => opt.selected)?.value || '',
        contact: ''
    });

    const [touched, setTouched] = useState({});
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    const fieldConfig = {
        email: {
            label: 'Email',
            placeholder: 'Введите почту',
            type: 'email',
            validate: (val) => val.includes('@') ? '' : 'Некорректный email'
        },
        password: {
            label: 'Пароль',
            placeholder: 'Введите пароль',
            type: 'password',
            validate: (val) => val.length >= 8 ? '' : 'Минимум 8 символов'
        },
        username: {
            label: formFields[0].label,
            placeholder: formFields[0].placeholder,
            type: formFields[0].type,
            validate: (val) => val.trim().length >= 6 ? '' : 'Минимум 6 символов'
        },
        contact: {
            label: formFields[2].label,
            placeholder: formFields[2].placeholder,
            type: formFields[2].type,
            validate: (val) => /^\+?[0-9\s\-]{7,}$/.test(val) ? '' : 'Введите корректный номер'
        }
    };

    useEffect(() => {
        const newErrors = {};
        Object.keys(fieldConfig).forEach((key) => {
            newErrors[key] = fieldConfig[key].validate(formData[key]);
        });
        setErrors(newErrors);
        setIsFormValid(
            Object.values(newErrors).every(err => err === '') &&
            Object.values(formData).every(val => val !== '')
        );
    }, [formData]);

    const handleFieldChange = (key, value) => {
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    const handleBlur = (key) => {
        setTouched(prev => ({ ...prev, [key]: true }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setTouched(Object.fromEntries(Object.keys(fieldConfig).map(key => [key, true])));
        if (!isFormValid) return;

        try {
            const res = await axios.post('http://localhost:5000/auth/register', formData);
            alert(res.data.message);
            navigate('/user-profile');
        } catch (err) {
            const msg = err.response?.data?.message || 'Ошибка сервера';
            alert(msg);
        }
    };

    return (
        <>
        <div>
            <LinkButton linkText={lang.linkTextButton} url={'signup'} isFixed />
        </div>
        <div className='registration__body'>
            <form className="registration__form" onSubmit={handleSubmit}>
            <IntroPartOfProfilePage />
            <ul className="registration__input-list">
                {Object.entries(fieldConfig).map(([key, config]) => (
                <li key={key}>
                    <Input
                        label={config.label}
                        type={config.type}
                        placeholder={config.placeholder}
                        value={formData[key]}
                        onChange={(e) => handleFieldChange(key, e.target.value)}
                        onBlur={() => handleBlur(key)}
                        error={touched[key] ? errors[key] : ''}
                        success={touched[key] && !errors[key] ? 'Ок!' : ''}
                    />
                </li>
                ))}

                <li>
                <label className="registration__label">{formFields[1].label}</label>
                <CustomSelect
                    options={formFields[1].options}
                    selected={formFields[1].options.find(opt => opt.value === formData.city)}
                    onChange={(selectedOption) => setFormData(prev => ({ ...prev, city: selectedOption.value }))}
                />
                </li>
            </ul>

            <TheLinkToPageButton
                buttonText="Продолжить"
                isPrimary
                isActive={isFormValid}
                type="submit"
                onClick={(e) => {
                    if (!isFormValid) e.preventDefault();
                }}
            />
            </form>
        </div>
        </>
    );
}
