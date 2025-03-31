import './style.css';
import Main4PetsLogo from '../../svg_pictures/4pets-logo';
import { TheLinkToPageButton } from '../../components/button';
import { useLanguageContext } from '../../context/LanguageContext';
import { Input } from '../../components/input';



export function AuthForm() {
    const { interfaceLanguage, allMyLanguageData } = useLanguageContext();
    return (
        <div className="login__start-page-block">
            <div className="login__form-block">
                <Main4PetsLogo width={200} height={106} />

                <div className="login__buttons-block">
                    <TheLinkToPageButton buttonText={'Войти'} url={'login'} />
                    <TheLinkToPageButton buttonText={'Зарегистрироваться'} url={'signup'} />
                </div>

                <Input label={'Почта'} placeholder={'Введите почту'} />
                <Input label={'Пароль'} placeholder={'Введите пароль'} />

                <ul className='login__list-validation-criterias'>
                    <li>Защита пароля</li>
                    <li>Хотя бы 8 символов</li>
                    <li>Содержит цифры и символы</li>
                </ul>
            </div>
        </div>
    )
}

export default function Login() {
    return (
        <div className='login__start-page'>
            <div className="login__start-page-block">
                <div className="login__start-page-image-block">
                    <img
                        src="https://habrastorage.org/webt/5d/ac/be/5dacbe832379f831739758.jpeg"
                        alt="img"
                    />
                </div>
            </div>
            <AuthForm/>
        </div>
    );
}
