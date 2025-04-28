import './style.scss';
import { SubscriptionCardButton } from "../button";
import { DefaultClauseIcon, ActiveClauseIcon } from "../../svg_pictures/clauses-icons";
import { useLanguageContext } from '../../context/LanguageContext';



export default function SubscriptionCard({cardData}) {
    const {allMyLanguageData, interfaceLanguage} = useLanguageContext();

    return (
        <div className="subscription-card" key={cardData.id}>
            {cardData.isPopular ? <p className='subscription-population-card'>{cardData.popularText}</p> : null}
            <div className="subscription-card-header">
                <div className="subscription-card-icon">{<cardData.icon/>}</div>
                <div className="subscription-card-text-block">
                    <p className="subscription-card-type">{cardData.type}</p>
                    <p className="subscription-card-subscription-type">{cardData.subscriptionType}</p>
                </div>
            </div>
            <p className="subscription-card-main-text">{cardData.text}</p>
            <div className="subscription-card-price-block">
                <p className="subscription-card-price">
                    <span>
                        <span>{cardData.priceInSoms}</span>
                        <span>KGS</span>
                        <span className="subscription-card-monthly-interval">/{allMyLanguageData[interfaceLanguage]?.subscriptionSection.everyMonth}</span>
                    </span>
                </p>
            </div>
            <h2 className="subscription-card-list-title">{cardData.whatIsIncluded}</h2>
            <ul className="subscription-card-list">
                {cardData.list.map((clauseItem) => {
                    return (
                        <li key={clauseItem.id}>
                            <span>
                                <span>
                                    <DefaultClauseIcon/>
                                </span>
                                <span>
                                    <ActiveClauseIcon/>
                                </span>
                            </span>
                            <span>
                                {clauseItem.clause}
                            </span>
                        </li>
                    )
                })}
            </ul>
            <SubscriptionCardButton buttonText={cardData.startButton}/>
        </div>
    )
}