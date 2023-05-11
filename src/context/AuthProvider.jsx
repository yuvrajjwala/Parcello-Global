import { createContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const updateAuth = (value) => {
    setAuth(value);
  };


  useEffect(() => {
    window.localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);

  useEffect(() => {
    const storedAuth = JSON.parse(localStorage.getItem("auth"));
    if (storedAuth) {
      setAuth(storedAuth);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ auth, updateAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
