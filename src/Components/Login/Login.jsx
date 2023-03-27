import React from "react";
import logo from "../../assets/login/Parcello.svg";
import { useState, useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button, Modal } from "antd";
import "./login.css";

const Login = ({ setOpenLogin }) => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [signup, setSignup] = useState(false);

  const [modal, contextHolder] = Modal.useModal();
  const countDown = () => {
    let secondsToGo = 3;
    const instance = modal.success({
      title: "Successfuly logged In",
      content: `It will close after ${secondsToGo} second.`,
    });
    const timer = setInterval(() => {
      secondsToGo -= 1;
      instance.update({
        content: `It will close after ${secondsToGo} second.`,
      });
    }, 1000);
    setTimeout(() => {
      setOpenLogin(false);

      clearInterval(timer);
      instance.destroy();
    }, secondsToGo * 1000);
  };

  const handleUserEmail = (e) => {
    setUserEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  //   useEffect(() => {
  //     console.log(password);
  //   }, [password]);
  return (
    <>
      <div className="fixed top-0 left-0 bg-black z-10 opacity-50 h-[100%] w-[100%]"></div>
      <div className="fixed top-[5%] bg-white left-[35%] z-30 flex flex-col w-[30%] rounded-[10px] p-8">
        <div className="flex justify-center items-center">
          <img
            src={logo}
            alt="logo"
            className="w-12 h-12 rounded-full border-black border-[1px] mr-2"
          />
          <h1 className="text-[20px] font-semibold">Parcello</h1>
        </div>
        <div className="flex justify-center my-4">
          <h1 className="text-[25px] font-bold text-center">
            Let's Login to your Parcello account first
          </h1>
        </div>
        <div className="flex w-[100%] flex-col items-center">
          {/* <label htmlFor="userEmail">Email</label> */}
          {signup ? (
            <div className="flex flex-col w-[100%] my-2">
              <span className="text-[14px] leading-[17px] text-[#02878A]">
                Name
              </span>
              <input
                type="text"
                placeholder="Enter Your name"
                id="username"
                className="border-[1px] rounded-[5px] border-gray-300 w-[100%] px-2 py-2 "
                onChange={handleUserName}
              />
            </div>
          ) : (
            <></>
          )}
          <div className="flex flex-col w-[100%] my-2">
            <span className="text-[14px] leading-[17px] text-[#02878A]">
              Email
            </span>
            <input
              type="email"
              placeholder="Enter Your email"
              id="userEmail"
              className="border-[1px] rounded-[5px] border-gray-300 w-[100%] px-2 py-2 "
              onChange={handleUserEmail}
            />
          </div>
          <div className="flex flex-col w-[100%] my-2">
            <span className="text-[14px] leading-[17px] text-[#02878A]">
              Password
            </span>
            <input
              type="password"
              name="pass"
              id="userPassword"
              placeholder="Enter Your password"
              className="border-[1px] rounded-[5px] border-gray-300 w-[100%] px-2 py-2"
              onChange={handlePassword}
            />
          </div>
          {signup ? (
            <div className="flex flex-col w-[100%] my-2">
              <span className="text-[14px] leading-[17px] text-[#02878A]">
                Confirm Password
              </span>
              <input
                type="password"
                placeholder="Confirm password"
                id="confirm-password"
                className="border-[1px] rounded-[5px] border-gray-300 w-[100%] px-2 py-2 "
                onChange={handleConfirmPassword}
              />
            </div>
          ) : (
            <></>
          )}
        </div>
        {signup ? (
          <></>
        ) : (
          <div className="flex justify-between items-center my-2">
            <div className="flex items-center">
              <input type="checkbox" name="remember" id="remember" />
              <span className="text-[14px] leading-[17px] mx-2">
                Remember me
              </span>
            </div>
            <Link
              to="/reset"
              className="text-[#02878A] text-[14px] leading-[17px] cursor-pointer hover:scale-110 transition"
            >
              Forgot your password
            </Link>
          </div>
        )}

        <button
          className="w-[100%] rounded-[5px] bg-[#02878A] py-2 text-white mb-2 mt-4 ease-out duration-300 transition hover:scale-110"
          onClick={countDown}
          // onClick={() => {
          //   setOpenLogin(false);
          // }}
        >
          {signup ? "Signup" : "Login"}
        </button>
        {/* <Button onClick={countDown}>Open modal to close in 5s</Button> */}
        {contextHolder}

        {signup ? (
          <div className="text-center my-2">
            <span className="text-[14px] leading-[17px]">
              Already have an account?
            </span>
            <span
              className="text-[#02878A] text-[14px] leading-[17px] ml-2 cursor-pointer"
              onClick={() => {
                setSignup(false);
              }}
            >
              Login
            </span>
          </div>
        ) : (
          <div className="text-center my-2">
            <span className="text-[14px] leading-[17px]">
              Don't have an account?
            </span>
            <span
              className="text-[#02878A] text-[14px] leading-[17px] ml-2 cursor-pointer "
              onClick={() => {
                setSignup(true);
              }}
            >
              Register Here
            </span>
          </div>
        )}

        <AiOutlineCloseCircle
          className="absolute top-[4px] right-[4px] cursor-pointer"
          onClick={() => {
            // console.log("clicked");
            setOpenLogin(false);
          }}
        />
      </div>
    </>
  );
};

export default Login;
