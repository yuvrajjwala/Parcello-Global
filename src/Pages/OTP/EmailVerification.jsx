import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Navbar/parcello.png";
import shield from "../../assets/otp/shield.svg";
import "./emailVerification.css";
import dock from "../../assets/login/dock.jpg";

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
      <div className="formBg h-full w-2/5 flex items-center justify-center md:hidden">
        <img
          src={dock}
          className="w-full h-full overflow-hidden object-cover"
          alt=""
        />
      </div>

      <div className="mx-auto flex justify-center items-start flex-col  w-80 py-10">
        <div className=" my-5 h-5 flex">
          {/* <h1 className="text-lg font-bold">Parcello</h1> */}
          <img src={logo} className="h-full w-full" alt="" />
        </div>
        <div className="font-semibold text-[34px] leading-[37px] my-4">
          <span className="text-[#646060]">Verify Your </span> Email
        </div>

        <div className="otpLogin h-[100%] ">
          <div className="font-semibold text-[16px] leading-[19px]">
            Please Verify your Email by clicking the link sent on your
            registered Email
          </div>
          <div className="otpFooter lg:relative lg:mt-60 lg:hidden">
            <img src={shield} alt="security" className="lg:hidden" />
            <h1 className="lg:hidden w-[100%]">
              We never share your data with any business
            </h1>
            <p className="lg:hidden w-[100%]">
              {" "}
              At our company, we take your privacy and security very seriously.
              We understand that your personal information is valuable and we
              are committed to protecting it. We want you to feel confident and
              secure when using our services, which is why we have implemented
              strict policies and procedures to ensure the safety of your data.
              We want to assure you that we will never sell, rent, or share your
              personal information with anyone without your explicit consent.
              <br></br>
              <br></br>You can trust us to keep your information safe and
              secure, so you can focus on enjoying our services with peace of
              mind.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
