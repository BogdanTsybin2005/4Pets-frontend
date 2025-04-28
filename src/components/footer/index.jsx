import React, { forwardRef } from 'react';
import Main4PetsLogo from "../../svg_pictures/4pets-logo"
import InstagramIcon from '../../svg_pictures/instagram-icon';
import {useLanguageContext} from '../../context/LanguageContext';
import './style.scss';



const Footer = forwardRef((props, ref) => {
    const { allMyLanguageData, interfaceLanguage } = useLanguageContext();

    return (
        <div className="footer" ref={ref}>
            <div className="footer-container">
                <div className="footer__4pets-icon-block">
                    <Main4PetsLogo width={306} height={162}/>
                </div>
                <div className="footer-contacts-information-block">
                    <div className="footer__instagram-info">
                        <div className="footer__instagram-icon-block">
                            <InstagramIcon/>
                        </div>
                        <div className="footer__instagram-links-block">
                            <a href="https://www.instagram.com/4petssss/" target="blank">@4petssss</a>
                            <a href="https://www.instagram.com/tsi.auca.kg/" target="blank">@tsiauca.kg</a>
                        </div>
                    </div>
                    <div className="footer__contacts-info">
                        <p>+996 502 296 444,</p>
                        <p>+996 705 916 001</p>
                        <p>{allMyLanguageData[interfaceLanguage]?.email}</p>
                        <p>4pets.tsi@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Footer;
