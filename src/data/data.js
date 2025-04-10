import Vector1 from "../svg_pictures/possibilities/Vector1";
import Vector2 from "../svg_pictures/possibilities/Vector2";
import Vector3 from "../svg_pictures/possibilities/Vector3";

import Bogdan from '../../src/svg_pictures/pictures/Bogdan.jpg';
import Konstantin from '../../src/svg_pictures/pictures/Konstantin.jpg';
import Madina from '../../src/svg_pictures/pictures/Madina.jpg';
import Aitegin from '../../src/svg_pictures/pictures/Aitegin.jpg';
import Erkin from '../../src/svg_pictures/pictures/Erkin.jpg';
import Suban from '../../src/svg_pictures/pictures/Suban.jpg';
import Aizhanat from '../../src/svg_pictures/pictures/Aizhanat.jpg';
import Malika from '../../src/svg_pictures/pictures/Malika.jpg';
import Nurayim from '../../src/svg_pictures/pictures/Nuraiym.jpg';
import Apaya from '../../src/svg_pictures/pictures/Apaya.jpg';



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
      },
      FIP16_4pets: [
        {
          id: 1,
          fullName: 'Цыбин Богдан',
          description: 'талантливый программист, он всегда наполнен свежими идеями для нашего проекта, а также он отвечает за разработку нашего приложения.',
          picture: Bogdan,
        },  
        {
          id: 2,
          fullName: 'Марченко Константин',
          description: 'создает эффективные маркетинговые ходы, делая наш проект более востребованным Его подход работы над проектом помогает нам достигать целей и находить новые возможности.',
          picture: Konstantin,
        },  
        {
          id: 3,
          fullName: 'Муротова Мадина',
          description: 'ответственный и целеустремленный человек, который помогает строить финансовую основу проекта. Она отвечает за ресурсы нашего стартапа с самого начала его развития и до завершения.',
          picture: Madina,
        },  
        {
          id: 4,
          fullName: 'Ташибеков Айтегин',
          description: 'креативный и внимательный участник команды, который всегда поддерживает нас и делится новыми идеями.',
          picture: Aitegin,
        },  
        {
          id: 5,
          fullName: 'Токтобаев Эркин',
          description: 'специалист в сфере предпринимательства всегда находит взвешенные решения и помогает нам смотреть на задачи с разных сторон. Его стратегический подход и умение оценивать риски поддерживают нас на пути к стабильному развитию и уверенности в каждом шаге.',
          picture: Erkin,
        },  
        {
          id: 6,
          fullName: 'Жанусаков Субан',
          description: 'отзывчивый и душевный человек, который всегда готов взяться за любую техническую задачу и помочь команде. Энтузиазм Субана движет нас к новым достижениям и помогают преодолевать любые сложности.',
          picture: Suban,
        },  
        {
          id: 7,
          fullName: 'Калыбаева Айжанат',
          description: 'эколог с искренней заботой о будущем нашей планеты. Ее знания в области экологии и энергоэффективности помогают нам внедрять устойчивые решения в наш проект. Айжанат отвечает за Civic Engagement, привлекая людей и сообщества к активному участию в нашем проекте.',
          picture: Aizhanat,
        },  
        {
          id: 8,
          fullName: 'Алканова Малика',
          description: 'дизайнер, которая работает над визуальной идентичностью приложения. Ее креативность делает наш проект современным и привлекательным, поддерживая его цели и миссию.',
          picture: Malika,
        },  
        {
          id: 9,
          fullName: 'Сапарова Нурайым',
          description: 'дизайнер, которая отвечает за визуальную часть нашего проекта. Нурайым создаёт стильный и современный дизайн, который отражает идею проекта. Благодаря её в виденью и вниманию к деталям наш проект становится не только функциональным, но и эстетически приятным.',
          picture: Nurayim,
        },  
        {
          id: 10,
          fullName: 'Сагынова Апая',
          description: 'Невероятно ответственная и доброжелательная, она всегда знает, как вдохновить и поддержать команду. Апая является специалистом в сфере product managemen Она не только предлагает оригинальные идеи для нашего проекта, но и внимательно следит за работой всей команды, помогая нам двигаться вперёд.',
          picture: Apaya,
        },  
      ],
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
      },

      FIP16_4pets: [
        {
          id: 1,
          fullName: 'Цыбин Богдан',
          description: 'таланттуу программист, ал ар дайым биздин долбоор үчүн жаңы идеяларга толгон, ошондой эле биздин колдонмону иштеп чыгуу үчүн жооптуу.',
          picture: Bogdan,
        },  
        {
          id: 2,
          fullName: 'Марченко Константин',
          description: 'натыйжалуу маркетингдик кадамдарды жаратып, биздин долбоорду көбүрөөк сатыкка чыгарат. Анын долбоорго болгон мамилеси максаттарга жетүүгө жана жаңы мүмкүнчүлүктөрдү табууга жардам берет.',
          picture: Konstantin,
        },  
        {
          id: 3,
          fullName: 'Муротова Мадина',
          description: 'долбоордун каржылык негизин түзүүгө жардам берген жоопкерчиликтүү жана берилген адам. Ал биздин стартаптын ресурстарын иштеп чыгуунун башталышынан баштап аягына чейин башкарат.',
          picture: Madina,
        },  
        {
          id: 4,
          fullName: 'Ташибеков Айтегин',
          description: 'ар дайым бизди колдоп, жаңы идеялар менен бөлүшкөн чыгармачыл жана Кунт коюп команданын мүчөсү.',
          picture: Aitegin,
        },  
        {
          id: 5,
          fullName: 'Токтобаев Эркин',
          description: 'ишкердик чөйрөсүндөгү адис ар дайым салмактуу чечимдерди табат жана тапшырмаларды ар тараптан кароого жардам берет. Анын стратегиялык мамилеси жана тобокелдиктерди баалоо жөндөмү бизди ар бир кадамда туруктуу өнүгүүгө жана ишенимге жетелейт.',
          picture: Erkin,
        },  
        {
          id: 6,
          fullName: 'Жанусаков Субан',
          description: 'техникалык кыйынчылыктарды чечүүгө жана командага жардам берүүгө ар дайым даяр жана боорукер адам. Субандын дилгирлиги бизди жаңы жетишкендиктерге жетелейт жана ар кандай кыйынчылыктарды жеңүүгө жардам берет.',
          picture: Suban,
        },  
        {
          id: 7,
          fullName: 'Калыбаева Айжанат',
          description: 'эколог биздин планетанын келечеги жөнүндө чын жүрөктөн кам көрөт. Анын экология жана энергияны үнөмдөө боюнча билими биздин долбоорго туруктуу чечимдерди киргизүүгө жардам берет. Айжанат Ички иштер министрлигине жооп берип, биздин долбоорго элди жана коомчулукту Активдүү катыштырып жатат.',
          picture: Aizhanat,
        },  
        {
          id: 8,
          fullName: 'Алканова Малика',
          description: 'колдонмонун визуалдык иденттүүлүгүнүн үстүндө иштеп жаткан дизайнер. Анын чыгармачылыгы биздин долбоорду заманбап жана жагымдуу кылат, анын максаттарын жана миссиясын колдойт.',
          picture: Malika,
        },  
        {
          id: 9,
          fullName: 'Сапарова Нурайым',
          description: 'биздин долбоордун визуалдык бөлүгү үчүн жооптуу дизайнер. Нурайым долбоордун идеясын чагылдырган стилдүү жана заманбап дизайнды жаратат. Анын көз карашы жана деталдарга көңүл буруусу менен биздин долбоор функционалдык гана эмес, эстетикалык жактан да жагымдуу болот.',
          picture: Nurayim,
        },  
        {
          id: 10,
          fullName: 'Сагынова Апая',
          description: 'Укмуштуудай жоопкерчиликтүү жана боорукер, ал ар дайым команданы кантип шыктандырып, колдоону билет. Апая Енисей жаатындагы адис Енисей ал биздин долбоор учун оригиналдуу идеяларды сунуштап гана тим болбостон, алдыга умтулуубузга жардам берип, бүт команданын ишин тыкыр көзөмөлдөп турат.',
          picture: Apaya,
        },  
      ],
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
      },

      FIP16_4pets: [
        {
          id: 1,
          fullName: 'Tsybin Bogdan',
          description: 'is a talented programmer, he is always full of fresh ideas for our project, and he is also responsible for the development of our app.',
          picture: Bogdan,
        },  
        {
          id: 2,
          fullName: 'Marchenko Konstantin',
          description: 'creates effective marketing moves, making our project more marketable His approach of working on the project helps us to achieve goals and find new opportunities.',
          picture: Konstantin,
        },  
        {
          id: 3,
          fullName: 'Murotova Madina',
          description: 'is a responsible and dedicated person who helps build the financial foundation of the project. She is responsible for the resources of our startup from the very beginning of its development until its completion.',
          picture: Madina,
        },  
        {
          id: 4,
          fullName: 'Tashibekov Aitegin',
          description: 'is creative and attentive team member who always supports us and shares new ideas.',
          picture: Aitegin,
        },  
        {
          id: 5,
          fullName: 'Toktobaev Erkin',
          description: 'is a specialist in entrepreneurship, always finds balanced solutions and helps us to look at challenges from different angles. His strategic approach and risk assessment skills keep us on the path to sustainable development and confidence in every step of the way.',
          picture: Erkin,
        },  
        {
          id: 6,
          fullName: 'Zhanusakov Suban',
          description: 'is responsive and warm-hearted person who is always ready to take on any technical task and help the team. Suban\'s enthusiasm drives us to new achievements and helps us overcome any difficulties.',
          picture: Suban,
        },  
        {
          id: 7,
          fullName: 'Kalybayeva Aizhanat',
          description: 'is an ecologist with a genuine concern for the future of our planet. Her knowledge in the field of ecology and energy efficiency helps us to implement sustainable solutions in our project. Aijanat is responsible for Civic Engagement, engaging people and communities to actively participate in our project.',
          picture: Aizhanat,
        },  
        {
          id: 8,
          fullName: 'Alkanova Malika',
          description: 'designer who works on the visual identity of the app. Her creativity makes our project modern and attractive, supporting its goals and mission.',
          picture: Malika,
        },  
        {
          id: 9,
          fullName: 'Saparova Nuraiym',
          description: 'designer, who is responsible for the visual part of our project. Nuraiyim creates a stylish and modern design that reflects the idea of the project. Thanks to her vision and attention to detail, our project becomes not only functional but also aesthetically pleasing.',
          picture: Nurayim,
        },  
        {
          id: 10,
          fullName: 'Sagynova Apaya',
          description: 'is incredibly responsible and friendly, she always knows how to inspire and support the team. Apaya is an expert in product managemen She not only offers original ideas for our project, but also keeps a close eye on the work of the whole team, helping us to move forwardт.',
          picture: Apaya,
        },  
      ],
    },
  };
  
  export default allMyLanguageData;
  