import { useEffect, useState } from "react";

export const useLocalStorage = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    setToken(token);
  }, []);

  return { token, setToken };
};
