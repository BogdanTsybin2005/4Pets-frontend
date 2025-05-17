import './style.scss';
import { useLanguageContext } from '../../context/LanguageContext';
import SubscriptionCard from '../../components/subscriptionCard';



export default function Subscription() {
    const {interfaceLanguage, allMyLanguageData} = useLanguageContext();
      
    return (
        <div className='subscription-body'>  
            <div className="subscription-content">
                <h1 className="subscription-title">{allMyLanguageData[interfaceLanguage]?.subscriptionSection.mainTitle}</h1>
                <h2 className="subscription-subtitle">{allMyLanguageData[interfaceLanguage]?.subscriptionSection.mainSubtitle}</h2>
                <div className="subscription-cards">
                    {allMyLanguageData[interfaceLanguage]?.subscriptionSection.subscriptionCards.map((item) => {
                        return <SubscriptionCard key={item.id} cardData={item} />
                    })}
                </div>
            </div>
        </div>
    )
}
