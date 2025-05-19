import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";



const AuthorizationProvider = createContext();

export function AuthorizationContext({ children }) {
  const [token, setTokenState] = useState(() => {
    const localToken = localStorage.getItem("token");
    return localToken && localToken.includes(".") ? localToken : "";
  });

  const [userAuthorizationResult, setUserAuthorizationResult] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const setToken = (value) => {
    if (value && value.includes(".")) {
      localStorage.setItem("token", value);
      setTokenState(value);
    } else {
      localStorage.removeItem("token");
      setTokenState("");
    }
  };

  const checkAuth = async (tokenToCheck) => {
    if (!tokenToCheck || typeof tokenToCheck !== "string" || !tokenToCheck.includes(".")) {
      console.warn("❌ Невалидный токен");
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
        console.log("✅ Успешная авторизация:", user);
        setUserAuthorizationResult(true);
      } else {
        console.warn("⛔️ Пользователь не найден");
        setUserAuthorizationResult(false);
      }
    } catch (error) {
      console.error("❌ Ошибка при /auth/me:", error.message);
      setToken("");
      setUserAuthorizationResult(false);
    } finally {
      setIsLoading(false);
    }
  };


  useEffect(() => {
    if (token && token.includes(".")) {
      console.log("🔍 Токен найден в state/localStorage:", token);
      checkAuth(token);
    } else {
      console.warn("⛔️ Токен отсутствует при инициализации");
      setUserAuthorizationResult(false);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (token && token.includes(".")) {
      console.log("🔄 Токен обновлён:", token);
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
      }}
    >
      {children}
    </AuthorizationProvider.Provider>
  );
}

const useAuthorizationContext = () => useContext(AuthorizationProvider);
export default useAuthorizationContext;
