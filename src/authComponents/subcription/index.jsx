import './style.scss';
import { useSelector } from 'react-redux';
import allMyLanguageData from '../../data/data';
import SubscriptionCard from '../subscriptionCard';
 
 
 export default function Subscription() {
    const interfaceLanguage = useSelector(state => state.language.interfaceLanguage);
       
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
