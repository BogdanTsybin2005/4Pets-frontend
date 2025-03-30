import { createContext, useContext, useState } from "react";
import allMyLanguageData from "../../src/data/data";



const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [interfaceLanguage, setInterfaceLanguage] = useState("kg");

  return (
    <LanguageContext.Provider value={{ interfaceLanguage, setInterfaceLanguage, allMyLanguageData }}>
      {children}
    </LanguageContext.Provider>
  );
}


export const useLanguageContext = () => useContext(LanguageContext);
