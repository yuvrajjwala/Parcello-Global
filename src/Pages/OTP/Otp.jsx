import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Navbar/parcello.png";
import shield from "../../assets/otp/shield.svg";
import "./otp.css";


export default function Otp() {
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
  const submitOTP = async (event) => {
    event.preventDefault();
  };
  return (
    <div className="flex h-screen">
      <div className="formBg h-full w-2/5 flex items-center justify-center md:hidden"></div>

      <div className="mx-auto flex justify-center items-start flex-col  w-80 py-10">
        <div className=" my-5 h-5 flex">
          <h1 className="text-lg font-bold">Parcello</h1>
          <img src={logo} className="h-full w-full" alt="" />
        </div>
        <div className="font-semibold text-[34px] leading-[37px] my-4">
          <span className="text-[#646060]">Verify Your </span> Email
        </div>
        <div className="font-semibold text-[16px] leading-[19px]">
          Enter the OTP sent on your Email
        </div>
        <div className="otpLogin h-[100%] ">
          <form action="" onSubmit={submitOTP} className="otpform">
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
                className="hover:scale-110 px-4 py-6 w-[22vw] max-w-[338px] rounded-[5px] ease-in duration-300 bg-[#02878A] text-white lg:w-[40vw] md:w-[60vw]"
                type="submit"
              >
                {" "}
                Verify Email
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
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything embarrassing hidden in the middle of
              text.
              <br></br>
              <br></br>All the Lorem Ipsum generators on the Internet tend to
              repeat predefined chunks as necessary, making this the first true
              generator on the Internet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
