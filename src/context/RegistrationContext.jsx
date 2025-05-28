import { createContext, useContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";



const RegistrationContext = createContext();

const defaultState = {
  email: "",
  password: "",
  username: "",
  city: "",
  contact: "",
  avatar: null,
};

export const RegistrationProvider = ({ children }) => {
  const [registrationData, setRegistrationData] = useLocalStorage("registrationData", defaultState);

  useEffect(() => {
    if (!registrationData || typeof registrationData !== "object") {
      setRegistrationData(defaultState);
    }
  }, [registrationData]);

  const resetRegistrationData = () => setRegistrationData(defaultState);

  return (
    <RegistrationContext.Provider value={{ registrationData, setRegistrationData, resetRegistrationData }}>
      {children}
    </RegistrationContext.Provider>
  );
};


export const useRegistrationContext = () => useContext(RegistrationContext);
