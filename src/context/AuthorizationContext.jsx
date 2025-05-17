import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";




const AuthorizationProvider = createContext();

export function AuthorizationContext({children}) {
    const [userAuthorizationResult, setUserAuthorizationResult] = useLocalStorage('isUserAuthorized', false);
    return (
        <AuthorizationProvider.Provider value={{userAuthorizationResult, setUserAuthorizationResult}}>
            {children}
        </AuthorizationProvider.Provider>
    )
}

const useAuthorizationContext = () => useContext(AuthorizationProvider);
export default  useAuthorizationContext;
