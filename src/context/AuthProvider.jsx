import { createContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState();
  const [loading, setLoading] = useState(true);
  const updateAuth = (value) => {
    setAuth(value);
  };


  // useEffect(() => {
  //   console.log("auth updated", auth);
  //   window.localStorage.setItem("auth", JSON.stringify(auth));
  // }, [auth]);

  useEffect(() => {
    const storedAuth = JSON.parse(localStorage.getItem("auth"));

    if (storedAuth) {
      setAuth(storedAuth);
    }
    setLoading(false);
  }, []);
  return (
    <AuthContext.Provider value={{ auth, updateAuth }}>
      {loading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
