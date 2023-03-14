import React, { useEffect, useState } from "react";
import "./LoginPage.css";
import LoginDescription from "../../components/LoginDescription/LoginDescription.jsx";
import Login from "../../components/Login/Login.jsx";
import OtpLogin from "../../components/Login/OtpLogin.jsx";
import SignUp from "../../components/Login/SignUp.jsx";
import loginImg from "../../assets/login/loginImg.svg";
import signupImg from "../../assets/login/signupImg.svg";
// import { useSelector } from "react-redux";
// import ScaleLoader from "react-spinners/ScaleLoader";

const LoginPage = () => {
  const [page, setPage] = useState("signup");
  const [phnNumber, setPhnNumber] = useState("");
  //   const { loading } = useSelector(({ common }) => common);
  // const phnNumber = "9389882933";
  useEffect(() => {
    console.log(page);
  }, []);
  const openOtp = () => {
    setPage("otp");
  };

  const openLogin = () => {
    setPage("login");
  };
  const openSignUp = () => {
    setPage("signup");
  };
  return (
    <>
      {/* <ScaleLoader
        color="rgb(93 68 222)"
        height={24}
        margin={4}
        radius={0}
        width={15}
        loading={loading}
        className="loader"
      /> */}
      <h1>{page}</h1>
      <div className="loginPage">
        {page === "login" ? (
          <>
            <LoginDescription descriptionImg={loginImg} />
            <Login openOtp={openOtp} openSignUp={openSignUp} />
          </>
        ) : page === "otp" ? (
          <>
            <LoginDescription descriptionImg={loginImg} />
            <OtpLogin
              countryCode="+91"
              phnNumber={phnNumber}
              openLogin={openLogin}
            />
          </>
        ) : (
          <>
            <LoginDescription descriptionImg={signupImg} />
            <SignUp
              openOtp={openOtp}
              openLogin={openLogin}
              setPhnNumber={setPhnNumber}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Login;
