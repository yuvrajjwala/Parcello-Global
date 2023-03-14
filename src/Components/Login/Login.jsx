import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Division from "./Division.jsx";
import ExitBtn from "./ExitBtn.jsx";
import LoginHeading from "./LoginHeading.jsx";
// import { useAuthMethod } from "../../@common/helpers/AuthHooks";
import gImage from "../../assets/login/google.svg";
import otpImage from "../../assets/login/otpimg.svg";
// import { EMAIL_REGEX } from "../../@common/constants/constantData";
// import { notification } from "antd";
// import { FETCH_START } from "../../@common/constants/ActionTypes";
// import { useDispatch } from "react-redux";

const Login = ({ openOtp, openSignUp }) => {
  //   const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const { signInUser } = useAuthMethod();
  const [allEntry, setAllEntry] = useState([]);

  //   const [api] = notification.useNotification();

  //   const openNotification = (placement) => {
  //     api.info({
  //       message: `Validation!!`,
  //       description: "Please Match the Input",
  //       placement,
  //     });
  //   };

  //   const submitForm = (event) => {
  //     dispatch({ type: FETCH_START });
  //     event.preventDefault();
  //     if (email.match(EMAIL_REGEX) && password.length >= 5) {
  //       const newEntry = { email_address: email, password: password };
  //       signInUser(newEntry);
  //       setAllEntry([...allEntry, newEntry]);
  //     } else {
  //       openNotification("top");
  //     }
  //   };
  return (
    <div className="login lg:px-2 lg:pt-40 lg:items-center lg:text-center  lg:h-[100%] lg:w-[80%] lg:m-auto">
      <ExitBtn />
      <LoginHeading
        highlightedText="Login to your Account"
        text="and Practice your sessions!"
      />
      <span className="lg:my-2">Login With</span>

      <div className="gLogin w-[100%] lg:flex lg:flex-col lg:items-center">
        {/* add route for google login also*/}
        <Link
          to="/login"
          className="w-[100%] flex justify_start lg:justify-center"
        >
          <button className="loginBtn  w-[100%]">
            <img src={gImage} alt="" /> Login with Google
          </button>
        </Link>

        <button className="loginBtn lg:w-[100%]" onClick={openOtp}>
          <img src={otpImage} alt="otp-btn" /> Login with OTP
        </button>
      </div>
      <Division text="Or" />
      <span>Enter Below Credentials to login</span>
      <form
        action=""
        // onSubmit={submitForm}
        className="lg:w-[100%] lg:flex lg:flex-col lg:items-center"
      >
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          placeholder="Enter Your Username or Email ID"
          autoComplete="off"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          placeholder="Enter Your Password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          required
        />
        <a href="" className="passLink">
          Forgot Password?
        </a>

        <button className="loginSubmitBtn bg-[#113359]" type="submit">
          Login to Your Account
        </button>

        <Link to="" className="newAccount max-w-[338px]" onClick={openSignUp}>
          Dont Have an Account?
        </Link>
      </form>
    </div>
  );
};

export default Login;
