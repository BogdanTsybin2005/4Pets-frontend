import { createContext, useContext } from "react";
import allMyLanguageData from '../data/data';
import useLocalStorage from "../hooks/useLocalStorage";



const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [interfaceLanguage, setInterfaceLanguage] = useLocalStorage("language", "ru");

  return (
    <LanguageContext.Provider value={{ interfaceLanguage, setInterfaceLanguage, allMyLanguageData }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguageContext() {
  return useContext(LanguageContext);
}
