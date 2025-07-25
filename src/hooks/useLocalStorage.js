import { useState, useEffect } from "react";



function useLocalStorage(key, initialValue) {
  const readValue = () => {
    try {
      const item = localStorage.getItem(key);
      if (item === null) return initialValue;
      try {
        return JSON.parse(item);
      } catch {
        return item;
      }
    } catch {
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState(readValue);

  const setValue = (value) => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Ошибка localStorage:`, error);
    }
  };

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(`Ошибка записи localStorage:`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setValue];
}

export default useLocalStorage;
