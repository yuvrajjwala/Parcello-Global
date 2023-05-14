import React, { useEffect, useContext, useState } from "react";
import { Navigate } from "react-router-dom";
// import AuthContext from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  //   const { auth, updateAuth } = useContext(AuthContext);
  //   const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("auth"));
    // setIsAuthenticated(item?.isAuthenticated);
  }, []);

  if (!JSON.parse(localStorage.getItem("auth"))?.isAuthenticated) {
    // console.log(
    //   "yes",
    //   JSON.parse(localStorage.getItem("auth"))?.isAuthenticated
    // );
    return <Navigate to="/signin" />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
