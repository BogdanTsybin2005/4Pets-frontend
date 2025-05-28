import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import useLocalStorage from "../hooks/useLocalStorage";



const AuthorizationProvider = createContext();

export function AuthorizationContext({ children }) {
  const [token, setToken] = useLocalStorage("token", "");
  const [userAuthorizationResult, setUserAuthorizationResult] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const isValidToken = (val) =>
    typeof val === "string" && val.trim().includes(".");

  const checkAuth = async (tokenToCheck) => {
    if (!isValidToken(tokenToCheck)) {
      setUserAuthorizationResult(false);
      setIsLoading(false);
      return;
    }

    try {
      const res = await axios.get("http://localhost:5000/auth/me", {
        headers: { Authorization: `Bearer ${tokenToCheck}` },
      });

      const user = res.data?.data;
      if (user?.id || user?.email) {
        setUserAuthorizationResult(true);
      } else {
        setUserAuthorizationResult(false);
      }
    } catch (error) {
      setToken("");
      setUserAuthorizationResult(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isValidToken(token)) {
      checkAuth(token);
    } else {
      setUserAuthorizationResult(false);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isValidToken(token)) {
      checkAuth(token);
    }
  }, [token]);

  return (
    <AuthorizationProvider.Provider
      value={{
        token,
        setToken,
        userAuthorizationResult,
        setUserAuthorizationResult,
        isLoading,
        checkAuth,
      }}
    >
      {children}
    </AuthorizationProvider.Provider>
  );
}

const useAuthorizationContext = () => useContext(AuthorizationProvider);
export default useAuthorizationContext;
