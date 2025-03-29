import './style.css';
import Large4PetsSectionIcon from '../../svg_pictures/4pets-large-section-icon';
import { useLanguageContext } from '../../context/LanguageContext';




function GenerateDecorCircles() {
    return <div className="main__section-decor">
        {Array.from({ length: 6 }, (_, i) => i + 1).map((item) => {
            return <div key={item} className="main__section-decor-item"></div>
        })}
    </div>
}

export default function Section({option = 1}) {
    
    const {allMyLanguageData, interfaceLanguage} = useLanguageContext();    
  
    const sectionTextMessage = allMyLanguageData[interfaceLanguage].heroText;
    let result = {
        '1': (
            <div className='main__section-1'>
                <GenerateDecorCircles/>
                <p className='main__section-decor-text'>{sectionTextMessage.toUpperCase()}</p>
                <GenerateDecorCircles/>
            </div>    
        ),
        '2': (
            <div className='main__section-2'>
                <div className='main__section-4pets-paw-icon'>
                    <Large4PetsSectionIcon/>
                </div>
                <div className="maon__section-structire-block">
                    <h2 className='main__section-list-title'>{allMyLanguageData[interfaceLanguage].howItWorks.title}</h2>

                    <ul className="main__section-list">
                        {allMyLanguageData[interfaceLanguage].howItWorks.steps.map((item) => {
                            return (
                                <li key={item.id}>
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
    
    return (
        <>
            {result[String(option)]}    
        </>
    )
}
