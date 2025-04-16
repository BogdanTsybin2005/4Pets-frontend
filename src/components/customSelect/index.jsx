import React, { useState, useRef, useEffect } from 'react';
import { useLanguageContext } from '../../context/LanguageContext';
import './style.css';



const CustomSelect = ({ options, selected, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(selected || null);
    const selectRef = useRef(null);
    const {allMyLanguageData, interfaceLanguage} = useLanguageContext();
    
    

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        onChange(option);
        setIsOpen(false);
    };

    return (
        <div className="custom-select" ref={selectRef}>
            <div className="custom-select__selected" onClick={() => setIsOpen(!isOpen)}>
                <span className="custom-select__text">
                    {selectedOption?.cityName || allMyLanguageData[interfaceLanguage]?.registrationPage.form[1].label}
                </span>
                <span className="custom-select__arrow">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M5 8L10 13L15 8" stroke="#26203B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
            </div>

            <ul className={`custom-select__options ${isOpen ? 'show' : ''}`}>
                {options.map((option) => (
                <li
                    key={option.optionID}
                    className="custom-select__option"
                    onClick={() => handleOptionClick(option)}
                >
                    {option.cityName}
                </li>
                ))}
            </ul>
        </div>

    );
};

export default CustomSelect;
