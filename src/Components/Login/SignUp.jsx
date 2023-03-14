import React, { useState, useEffect } from "react";
import "./signUp.css";
import ExitBtn from "./ExitBtn";
import LoginHeading from "./LoginHeading";
import globe from "../../assets/login/globe.svg";
import { Link } from "react-router-dom";
// import {
//   isEmail,
//   isMobileNumber,
//   isPassword,
//   isRequired,
// } from "../../@common/helpers/Validators";
// import {
//   FETCH_START,
//   NOTIFICATION_TYPE_ERROR,
//   VALIDATION_ERROR,
// } from "../../@common/constants/ActionTypes";
// import { notification } from "antd";
// import { useAuthMethod } from "../../@common/helpers/AuthHooks";
// import { useDispatch } from "react-redux";

const SignUp = ({ openOtp, openLogin, setPhnNumber }) => {
//   const dispatch = useDispatch();
//   const { signUpUser } = useAuthMethod();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

//   const Validate = () => {
//     const is_name = isRequired(name);
//     const is_email = isEmail(email);
//     const is_password = isPassword(password);
//     const is_phoneNumber = isMobileNumber(phoneNumber);
//     if (
//       is_name === "" &&
//       is_email === "" &&
//       is_password === "" &&
//       is_phoneNumber === ""
//     ) {
//       return true;
//     } else {
//       notification[NOTIFICATION_TYPE_ERROR]({
//         message: VALIDATION_ERROR,
//         description: `${is_email} ${is_phoneNumber} ${is_password}`,
//       });
//       return false;
//     }
//   };

  const handleSignup = async (event) => {
    event.preventDefault();
    // if (Validate()) {
    //   const request = {
    //     first_name: name,
    //     password: password,
    //     email_address: email,
    //     mobile_number: phoneNumber,
    //   };
    //   dispatch({ type: FETCH_START });
    //   const success = await signUpUser(request);
    //   if (success) {
        setPhnNumber(phoneNumber);
        openOtp();
    //   }
    // }
  };
  return (
    <div className="signUp h-[100%] lg:w-[80%] lg:m-auto lg:items-center lg:text-center lg:pt-44 lg:px-2">
      <ExitBtn />

      <LoginHeading
        highlightedText="Create an account"
        text="and Practice your sessions!"
      />

      <span>Enter Below Credentials to Signup</span>

      <form
        action=""
        onSubmit={handleSignup}
        className="w-[100%] lg:items-center"
      >
        <input
          className="max-w-[338px]"
          type="text"
          name="name"
          id="name"
          placeholder="Enter Your Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <input
          className="max-w-[338px]"
          type="password"
          name="password"
          id="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <span>Communication Details</span>
        <input
          className="max-w-[338px]"
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <div className="communicationDetails ">
          <div className="phnCode lg:p-4">
            <img src={globe} alt="globe" className="lg:mx-0" /> +91
          </div>
          <input
            type="number"
            pattern="/^\d{10}$/"
            maxLength="10"
            name="PhnNumber"
            id="PhnNumber"
            placeholder="Enter Phone Number"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            required
          />
        </div>

        <button className="loginSubmitBtn bg-[#113359]" type="submit">
          Create an Account
        </button>

        <Link to="" className="newAccount max-w-[338px]" onClick={openLogin}>
          Already have an account?
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
