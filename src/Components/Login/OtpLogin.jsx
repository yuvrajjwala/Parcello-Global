import React, { useState } from "react";
import "./OtpLogin.css";
import ExitBtn from "./ExitBtn.jsx";
import LoginHeading from "./LoginHeading.jsx";
import shield from "../../assets/login/shield.svg";
import { useRef } from "react";
// import { isRequired } from "../../@common/helpers/Validators";
// import { FETCH_START, NOTIFICATION_TYPE_ERROR, OTP_ERROR } from "../../@common/constants/ActionTypes";
// import { ErrorSuccessHandler } from "../../@common/helpers/ErrorSuccessHandler";
// import { notification } from 'antd';
// import { useDispatch } from 'react-redux';
// import { useAuthMethod } from "../../@common/helpers/AuthHooks";

const OtpLogin = ({ countryCode, phnNumber, openLogin }) => {
//   const { otpVerify } = useAuthMethod();
//   const dispatch = useDispatch();
  const [data, setData] = useState({
    pin1: "",
    pin2: "",
    pin3: "",
    pin4: "",
  });

  const num1 = useRef();
  const num2 = useRef();
  const num3 = useRef();
  const num4 = useRef();

  const handle = (event, ref) => {
    const { value, name } = event.target;

    if (event.key >= "0" && event.key <= "9") {
      setData({
        ...data,
        [name]: value,
      });

      if (ref === "ref2") {
        num2.current.focus();
      }
      if (ref === "ref3") {
        num3.current.focus();
      }
      if (ref === "ref4") {
        num4.current.focus();
      }
    } else if (event.key === "Backspace") {
      setData({
        ...data,
        [name]: value,
      });
      if (ref === "ref") {
        num3.current.focus();
      }
      if (ref === "ref3") {
        num1.current.focus();
      }
      if (ref === "ref4") {
        num2.current.focus();
      }
    }
  };

//   const Validate = () => {
//     const is_pin1 = isRequired(data.pin1);
//     const is_pin2 = isRequired(data.pin2);
//     const is_pin3 = isRequired(data.pin3);
//     const is_pin4 = isRequired(data.pin4);
//     if (is_pin1 === '' && is_pin2 === '' && is_pin3 === '' && is_pin4 === '') {
//       return true;
//     } else {
//       notification[NOTIFICATION_TYPE_ERROR]({
//         message: OTP_ERROR,
//       });
//       return false;
//     }
//   }


//   const submitOTP = async (event) => {
//     event.preventDefault();
//     if (Validate()) {
//       const request = { mobile_number: phnNumber, otp: JSON.parse(`${data.pin1}${data.pin2}${data.pin3}${data.pin4}`) }
//       dispatch({ type: FETCH_START });
//       const success = await otpVerify(request);
//       if (success) {
//         openLogin();
//       }
//     }
//   };

  return (
    <div className="otpLogin lg:px-10 lg:pt-44 lg:w-[70%] lg:m-auto h-[100%]">
      <ExitBtn />
      <LoginHeading
        highlightedText="Verify Your"
        text="Mobile Number"
        width="20vmax"
        maxWidth="207px"
      />

      <div>
        <p>
          {countryCode} {phnNumber}
        </p>
        <a href="">Change</a>
      </div>

      <span>Enter OTP that sent your mobile number</span>

      <form action="" onSubmit={submitOTP}>
        <div>
          <input
            name="pin1"
            value={data[0]}
            type="text"
            maxLength="1"
            placeholder="___"
            autoComplete="off"
            onKeyUp={(e) => handle(e, "ref2")}
            ref={num1}
            className="otpInput"
          />
          <input
            name="pin2"
            value={data[1]}
            type="text"
            maxLength="1"
            placeholder="___"
            autoComplete="off"
            onKeyUp={(e) => handle(e, "ref3")}
            ref={num2}
            className="otpInput"
          />
          <input
            name="pin3"
            value={data[2]}
            type="text"
            maxLength="1"
            placeholder="___"
            autoComplete="off"
            onKeyUp={(e) => handle(e, "ref4")}
            ref={num3}
            className="otpInput"
          />
          <input
            name="pin4"
            value={data[3]}
            type="text"
            maxLength="1"
            placeholder="___"
            autoComplete="off"
            onKeyUp={(e) => handle(e, "ref")}
            ref={num4}
            className="otpInput"
          />
        </div>
        <div className="flex flex-col ">
          <a href="" className="resendOTP">
            Resend OTP
          </a>

          <button
            className="hover:scale-110 px-10 py-8 w-[22vw] max-w-[338px] rounded-[5px] ease-in duration-300 bg-[#113359] text-white lg:w-[40vw] md:w-[60vw]"
            type="submit"
          >
            {" "}
            Verify Mobile Number
          </button>
        </div>
      </form>

      <div className="otpFooter lg:relative lg:mt-60 lg:hidden">
        <img src={shield} alt="security" className="lg:hidden" />
        <h1 className="lg:hidden w-[100%]">
          We never share your data with any business
        </h1>
        <p className="lg:hidden w-[100%]">
          {" "}
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text.
          <br></br>
          <br></br>All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary, making this the first true generator
          on the Internet.
        </p>
      </div>
    </div>
  );
};

export default OtpLogin;
