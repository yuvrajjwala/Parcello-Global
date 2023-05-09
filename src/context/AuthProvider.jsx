import { createContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const updateAuth = (value) => {
    setAuth(value);
  };

  // useEffect(() => {
  //   console.log(auth);
  // }, [auth]);
  return (
    <AuthContext.Provider value={{ auth, updateAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
