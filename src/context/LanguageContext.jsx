import { createContext, useContext, useState } from "react";
import allMyLanguageData from '../data/data';



const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  let stored = localStorage.getItem('language');

  if (!stored || !['ru', 'en', 'kg'].includes(stored)) {
    stored = 'ru';
    localStorage.setItem('language', stored);
  }

  if (stored.startsWith('"') && stored.endsWith('"')) {
    try {
      stored = JSON.parse(stored); 
      localStorage.setItem('language', stored); 
    } catch {
      stored = 'ru';
    }
  }

  const [interfaceLanguage, setInterfaceLanguage] = useState(stored || 'ru');

  return (
    <LanguageContext.Provider value={{ interfaceLanguage, setInterfaceLanguage, allMyLanguageData }}>
      {children}
    </LanguageContext.Provider>
  );
}



export function useLanguageContext() {
  return useContext(LanguageContext);
}
