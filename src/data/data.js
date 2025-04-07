import Vector1 from "../svg_pictures/possibilities/Vector1";
import Vector2 from "../svg_pictures/possibilities/Vector2";
import Vector3 from "../svg_pictures/possibilities/Vector3";



const allMyLanguageData = {
    ru: {
      headerLoginButton: 'ВОЙТИ',
      header: [
        {
          linkID: 1,
          text: 'ИНФО',
          url: '/info',
        },
        {
          linkID: 2,
          text: 'БЛОГ',
          url: '/blog',
        },
        {
          linkID: 3,
          text: 'ЧАТБОТ',
          url: '/chat-bot'
        },
        {
          linkID: 4,
          text: 'КАРТА',
          url: '/map'
        },
        {
          linkID: 5,
          text: 'КОНТАКТЫ',
          url: '/contacts',
        }
      ],
      bishkekAccess: 'ДОСТУПНО В БИШКЕКЕ',
      heroText: 'НАША ПЛАТФОРМА ОБЪЕДИНЯЕТ ВЛАДЕЛЬЦЕВ ДОМАШНИХ ЖИВОТНЫХ. ЗДЕСЬ МОЖНО ОБСУЖДАТЬ УХОД ЗА ПИТОМЦАМИ, ИСКАТЬ СОВЕТЫ, ДЕЛИТЬСЯ ОПЫТОМ И ПОМОГАТЬ БЕЗДОМНЫМ ЖИВОТНЫМ.',
      howItWorks: {
        title: 'Как это работает?',
        steps: [
          {
            id: 1,
            title: 'Зарегистрируйтесь',
            description: 'Создайте аккаунт и добавьте информацию о себе и своём питомце.',
          },
          {
            id: 2,
            title: 'Общайтесь и находите единомышленников',
            description: 'Задавайте вопросы, делитесь опытом, ищите советы и публикуйте объявления',
          },
          {
            id: 3,
            title: 'Используйте полезные сервисы',
            description: 'Находите проверенные клиники, магазины и фонды, а также помогайте бездомным животным',
          },
          {
            id: 4,
            title: 'Будьте частью сообщества',
            description: 'Объединяйтесь с другими владельцами для обмена опытом и поддержки.',
          },
        ],
        buttonText: 'Начать',
      },
      possibilitiesSection: {
        title: 'ВОЗМОЖНОСТИ',
        allPossibilities: [
          {
            slideID: 1,
            image: Vector1,
            title: 'Объявления',
            subtitle: 'Здесь владельцы животных могут:',
            steps: [
              {
                stepID: 1,
                text: 'Обсуждать здоровье, питание и воспитание питомцев',
              },
              {
                stepID: 2,
                text: 'Задавать вопросы и получать советы от других владельцев',
              },
              {
                stepID: 3,
                text: 'Делиться историями, фотографиями и достижениями своих любимцев'
              }
            ]
          },
  
          {
            slideID: 2,
            image: Vector2,
            title: 'Чатбот',
            subtitle: 'Раздел объявлений также помогает:',
            steps: [
              {
                stepID: 1,
                text: 'Узнавать информацию о здоровье, питании и уходе за питомцами',
              },
              {
                stepID: 2,
                text: 'Быстро находить ответы на часто задаваемые вопросы',
              },
              {
                stepID: 3,
                text: 'Получать советы по разным видам животных — от кошек и собак до экзотических питомцев.'
              }
            ]
          },
  
  
          {
            slideID: 3,
            image: Vector3,
            title: 'Интерактивная карта',
            subtitle: 'Пользоваться интерактивной картой для поиска нужных мест рядом Легко находить:',
            steps: [
              {
                stepID: 1,
                text: 'приюты',
              },
              {
                stepID: 2,
                text: 'зоомагазины',
              },
              {
                stepID: 3,
                text: 'ветеринарные клиники'
              },
              {
                stepID: 4,
                text: 'и другие сервисы для питомцев'
              }
            ]
          },
        ],
      },
      contactUs: 'СВЯЗАТЬСЯ С НАМИ',
      email: 'Электронная почта:',
      authenticationPage: {
        loginButton: 'Войти',
        signUpButton: 'Зарегистрироваться',
        authenticationInputs: [
          {
            inputID: 1,
            label: 'Почта',
            placeholder: 'Введите почту',
          },
          {
            inputID: 2,
            label: 'Пароль',
            placeholder: 'Введите пароль'
          },
        ],
        validationCriteria: [
          {
            criteriaID: 1,
            text: 'Защита пароля:',
          },
          {
            criteriaID: 2,
            text: 'Хотя бы 8 элементов',
          },
          {
            criteriaID: 3,
            text: 'Содержит цифры и символы',
          },
        ],
        or: 'или',
        optionOfTheProtectionType: ['Слабая', 'Средняя', 'Сильная'],
        authenticationButtonText: 'Войти',
      }
    },
    kg: {
      headerLoginButton: 'КИРҮҮ',
      header: [
        {
          linkID: 1,
          text: 'ИНФО',
          url: '/info',
        },
        {
          linkID: 2,
          text: 'БЛОГ',
          url: '/blog',
        },
        {
          linkID: 3,
          text: 'ЧАТБОТ',
          url: '/chat-bot'
        },
        {
          linkID: 4,
          text: 'КАРТА',
          url: '/map'
        },
        {
          linkID: 5,
          text: 'БАЙЛАНЫШУУ',
          url: '/contacts',
        }
      ],
      bishkekAccess: 'БИШКЕКТЕ ЖЕТКИЛИКТҮҮ',
      heroText: 'БИЗДИН ПЛАТФОРМА ҮЙ ЖАНЫБАРЛАРЫНЫН ЭЭЛЕРИН БИРИКТИРЕТ. БУЛ ЖЕРДЕ СИЗ ЖАНЫБАРЛАРДЫ БАГУУ БОЮНЧА ТАЛКУУЛАРДЫ ЖҮРГҮЗҮП, КЕҢЕШТЕРДИ АЛЫП, ӨЗ ТАЖРЫЙБАҢЫЗДЫ БӨЛҮШҮП ЖАНА БАШ КАЛКАЛООЧУ ЖАНЫБАРЛАРГА ЖАРДАМ БЕРЕ АЛАСЫЗ.',
      howItWorks: {
        title: 'Бул кантип иштейт?',
        steps: [
          {
            id: 1,
            title: 'Катталуу',
            description: 'Өздүк аккаунт түзүп, өзүңүз жана үй жаныбарыңыз жөнүндө маалымат кошуңуз.',
          },
          {
            id: 2,
            title: 'Байланыш түзүү',
            description: 'Задавайте вопросы, делитесь опытом, ищите советы и публикуйте объявления',
          },
          {
            id: 3,
            title: 'Пайдалуу кызматтар',
            description: 'Текшерилген клиникаларды, дүкөндөрдү жана баш калкалоочу жайларды табыңыз.',
          },
          {
            id: 4,
            title: 'Жамааттын мүчөсү болуңуз',
            description: 'Башка үй жаныбарларынын ээлери менен тажрыйба жана колдоо бөлүшүңүз.',
          },
        ],

        buttonText: 'Баштоо',
      },
      possibilitiesSection: {
        title: 'Мүмкүнчүлүктөр',
        allPossibilities: [
          {
            slideID: 1,
            image: Vector1,
            title: 'Жарнамалар',
            subtitle: 'Үй жаныбарларынын ээлери бул жерде:',
            steps: [
              {
                stepID: 1,
                text: 'Ден соолук, тамактануу жана тарбиялоо боюнча талкуу жүргүзө алышат.',
              },
              {
                stepID: 2,
                text: 'Суроолорду берип, башка ээлерден кеңеш ала алышат.',
              },
              {
                stepID: 3,
                text: 'Өзүнүн окуяларын, сүрөттөрүн жана жаныбарларынын жетишкендиктерин бөлүшө алышат.'
              }
            ]
          },
  
          {
            slideID: 2,
            image: Vector2,
            title: 'Чатбот',
            subtitle: 'Бул жерден жаныбар ээлери төмөнкүлөрдү билишет:',
            steps: [
              {
                stepID: 1,
                text: 'Жаныбарлардын ден соолугу, тамактануусу жана багуусу тууралуу маалымат алышат',
              },
              {
                stepID: 2,
                text: 'Көп берилүүчү суроолорго жоопторду тез табышат',
              },
              {
                stepID: 3,
                text: 'Ар кандай жаныбарлар боюнча кеңештер алышат — мышыктар менен иттерден тартып, экзотикалык жаныбарларга чейин.'
              }
            ]
          },
          {
            slideID: 2,
            image: Vector3,
            title: 'Интерактивдүү карта:',
            subtitle: 'Керектүү жерлерди жакындан табуу үчүн интерактивдүү картаны колдонуңуз Оңой табууга болот:',
            steps: [
              {
                stepID: 1,
                text: 'баш калкалоочу жайлар',
              },
              {
                stepID: 2,
                text: 'зоодүкөндөр.',
              },
              {
                stepID: 3,
                text: 'ветеринардык клиникалар'
              },
              {
                stepID: 4,
                text: 'жана башка жаныбарлар үчүн кызматтар'
              }
            ]
          }

        ],
      },
      contactUs: 'БИЗ МЕНЕН БАЙЛАНЫШУУ',
      email: 'Электрондук почтасы:',
      authenticationPage: {
        loginButton: 'Кирүү',
        signUpButton: 'Катталуу',
        authenticationInputs: [
          {
            inputID: 1,
            label: 'Почта',
            placeholder: 'Почтаны киргизиңиз',
          },
          {
            inputID: 2,
            label: 'Сырсөз',
            placeholder: 'Сырсөздү киргизиңиз'
          },
        ],
        validationCriteria: [
          {
            criteriaID: 1,
            text: 'Сырсөздүн күчү:',
          },
          {
            criteriaID: 2,
            text: 'Жок дегенде 8 символ',
          },
          {
            criteriaID: 3,
            text: 'Сандар жана белгилер камтылган',
          },
        ],
        or: 'же',
        optionOfTheProtectionType: ['Алсыз', 'Орто', 'Күчтүү'],
        authenticationButtonText: 'Кирүү',
      }
    },
    en: {
      headerLoginButton: 'LOGIN',
      header: [
        {
          linkID: 1,
          text: 'INFO',
          url: '/info',
        },
        {
          linkID: 2,
          text: 'BLOG',
          url: '/blog',
        },
        {
          linkID: 3,
          text: 'CHATBOT',
          url: '/chat-bot'
        },
        {
          linkID: 4,
          text: 'MAP',
          url: '/map'
        },
        {
          linkID: 5,
          text: 'CONTACTS',
          url: '/contacts',
        }
      ],
      bishkekAccess: 'AVAILABLE IN BISHKEK',
      heroText: 'OUR PLATFORM BRINGS TOGETHER PET OWNERS TO DISCUSS PET CARE, SEEK ADVICE, SHARE EXPERIENCES AND HELP HOMELESS ANIMALS.',
      howItWorks: {
        title: 'How does it work?',
        steps: [
          {
            id: 1,
            title: 'Sign Up',
            description: 'Create an account and add info about you and your pet.',
          },
          {
            id: 2,
            title: 'Connect with Like-minded People',
            description: 'Ask questions, share experiences, seek advice and post announcements.',
          },
          {
            id: 3,
            title: 'Use Helpful Services',
            description: 'Find verified clinics, stores, shelters, and support homeless animals.',
          },
          {
            id: 4,
            title: 'Be Part of the Community',
            description: 'Join other pet owners to share and support each other.',
          },
        ],
        buttonText: 'Start',
      },
      possibilitiesSection: {
        title: 'POSSIBILITIES',
        allPossibilities: [
          {
            slideID: 1,
            image: Vector1,
            title: 'Announcements',
            subtitle: 'Here, pet owners can:',
            steps: [
              {
                stepID: 1,
                text: 'Discuss the health, nutrition and education of pets',
              },
              {
                stepID: 2,
                text: 'Ask questions and get advice from other owners',
              },
              {
                stepID: 3,
                text: 'Share stories, photos, and accomplishments of your favorites'
              }
            ]
          },
          {
            slideID: 2,
            image: Vector2,
            title: 'Chatbot',
            subtitle: 'This is where pet owners can:',
            steps: [
              {
                stepID: 1,
                text: 'Recognize information about pet health, nutrition and care',
              },
              {
                stepID: 2,
                text: 'Quickly find answers to frequently asked questions',
              },
              {
                stepID: 3,
                text: 'Get advice on different types of animals, from cats and dogs to exotic pets.'
              }
            ]
          },
          {
            slideID: 2,
            image: Vector3,
            title: 'Interactive map:',
            subtitle: 'Use the interactive map to find the right places nearby Easy to find:',
            steps: [
              {
                stepID: 1,
                text: 'shelters',
              },
              {
                stepID: 2,
                text: 'pet stores',
              },
              {
                stepID: 3,
                text: 'veterinary clinics'
              },
              {
                stepID: 4,
                text: 'and other pet services'
              }
            ]
          },
        ],
      },
      contactUs: 'CONTACT US',
      email: 'Email:',
      authenticationPage: {
        loginButton: 'Login',
        signUpButton: 'Sign up',
        authenticationInputs: [
          {
            inputID: 1,
            label: 'Email',
            placeholder: 'Enter your mail',
          },
          {
            inputID: 2,
            label: 'Password',
            placeholder: 'Enter your password'
          },
        ],
        validationCriteria: [
          {
            criteriaID: 1,
            text: 'Password protection:',
          },
          {
            criteriaID: 2,
            text: 'At least 8 elements',
          },
          {
            criteriaID: 3,
            text: 'Contains numbers and symbols',
          },
        ],
        or: 'or',
        optionOfTheProtectionType: ['Weak', 'Medium', 'Strong'],
        authenticationButtonText: 'Login',
      }
    },
  };
  
  export default allMyLanguageData;
  