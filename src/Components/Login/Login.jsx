import React from "react";
import logo from "../../assets/login/Parcello.svg";
import { useState, useEffect, useRef, useContext } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button, Modal, Space } from "antd";
import "./login.css";
import axios from "../../api/axios";
import AuthContext from "../../context/AuthContext";
// import ToastContainer from "../Toast/ToastContainer";
import { ToastContainer, toast } from "react-toastify";

import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/auth/users/API/register/";
const LOGIN_URL = "/auth/users/API/login/";
const Login = ({ openLogin, setOpenLogin }) => {
  // const userRef = useRef();
  // const errRef = useRef();

  // const [user, setUser] = useState('');
  // const [validName, setValidName] = useState(false);
  // const [userFocus, setUserFocus] = useState(false);
  // const userRef = useRef();
  const errRef = useRef();
  const { updateAuth } = useContext(AuthContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [userEmail, setUserEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const toastId = React.useRef(null);
  const notify = (text) => (toastId.current = toast(text));

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");

  // const [user, setUser] = useState("");
  // const [validName, setValidName] = useState(false);
  // const [userFocus, setUserFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  // const [pwd, setPwd] = useState("");
  // const [validPwd, setValidPwd] = useState(false);
  // const [pwdFocus, setPwdFocus] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  // const [matchPwd, setMatchPwd] = useState("");
  // const [validMatch, setValidMatch] = useState(false);
  // const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  const [userName, setUserName] = useState("");

  const [signup, setSignup] = useState(false);

  // const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   nameRef.current.focus();
  // }, [openLogin]);

  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  // Email validation to be checked
  // useEffect(() => {
  //   setValidEmail(EMAIL_REGEX.test(user));
  // }, [email]);

  // useEffect(() => {
  //   setValidName(USER_REGEX.test(user));
  // }, [user]);
  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(userEmail));
  }, [userEmail]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(password));
    setValidMatch(password === confirmPassword);
  }, [password, confirmPassword]);

  // useEffect(() => {
  //   setValidPwd(PWD_REGEX.test(pwd));
  //   setValidMatch(pwd === matchPwd);
  // }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [password, confirmPassword]);

  // useEffect(() => {
  //   setErrMsg("");
  // }, [user, pwd, matchPwd]);

  // const handleSubmit = async (e) => {
  //     e.preventDefault();
  // // if button enabled with JS hack
  // const v1 = USER_REGEX.test(user);
  // const v2 = PWD_REGEX.test(pwd);
  // if (!v1 || !v2) {
  //     setErrMsg("Invalid Entry");
  //     return;
  // }
  // try {
  //     const response = await axios.post(REGISTER_URL,
  //         JSON.stringify({ user, pwd }),
  //         {
  //             headers: { 'Content-Type': 'application/json' },
  //             withCredentials: true
  //         }
  //     );
  //     console.log(response?.data);
  //     console.log(response?.accessToken);
  //     console.log(JSON.stringify(response))
  //     setSuccess(true);
  //     //clear state and controlled inputs
  //     //need value attrib on inputs for this
  //     setUser('');
  //     setPwd('');
  //     setMatchPwd('');
  // } catch (err) {
  //     if (!err?.response) {
  //         setErrMsg('No Server Response');
  //     } else if (err.response?.status === 409) {
  //         setErrMsg('Username Taken');
  //     } else {
  //         setErrMsg('Registration Failed')
  //     }
  //     errRef.current.focus();
  // }
  // }

  const interests = "hello";

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        { email: loginEmail, password: loginPass },
        {
          headers: { "content-Type": "application/json" },
          // withCredentials: true,
        }
      );
      const accessToken = response?.data?.tokens?.access;
      const refreshToken = response?.data?.tokens?.refresh;

      // const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      updateAuth({
        email: loginEmail,
        // password: loginPass,
        accessToken,
        refreshToken,
      });
      setLoginEmail("");
      setLoginPass("");
      setOpenLogin(false);
      notify("fuck u");
      // console.log("clicked");
    } catch (e) {
      if (e.response?.status === 403) {
        error("Invalid Email id");
        setErrMsg("Invalid Email Id");
      }
    }
  };
  const handleRegisterSubmit = async (event) => {
    event.preventDefault();

    // if button enabled with JS hack
    const v1 = EMAIL_REGEX.test(userEmail);
    const v2 = PWD_REGEX.test(password);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      error("");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        {
          user_name: userName,
          email: userEmail,
          password: password,
          interests: "hello",
          first_name: firstName,
          last_name: lastName,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      //clear state and controlled inputs
      //need value attrib on inputs for this
      setUserName("");
      setUserEmail("");
      setPassword("");
      setConfirmPassword("");
      setFirstName("");
      setLastName("");
      // console.log(response);
      setSignup(false);
    } catch (err) {
      // console.log(err);
      if (err.response?.status === 400) {
        error("User already exists");
        setErrMsg("User already exists");
      }
    }
  };

  const error = (errorData) => {
    Modal.error({
      title: "Invalid Credentials",
      content: errorData,
    });
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
      <div className="fixed top-[3%] bg-white left-[35%] z-30 flex flex-col w-[30%] rounded-[10px] px-8 py-4">
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
            <>
              <form
                onSubmit={handleRegisterSubmit}
                className="flex w-[100%] flex-col items-center"
              >
                <div className="flex flex-col w-[100%] my-2">
                  <span className="text-[14px] leading-[17px] text-[#02878A]">
                    First Name
                  </span>
                  <input
                    type="text"
                    placeholder="Enter Your First Name"
                    id="firstname"
                    value={firstName}
                    className="border-[1px] rounded-[5px] border-gray-300 w-[100%] px-2 py-2 "
                    required
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col w-[100%] my-2">
                  <span className="text-[14px] leading-[17px] text-[#02878A]">
                    Last Name
                  </span>
                  <input
                    type="text"
                    placeholder="Enter Your Last Name"
                    value={lastName}
                    id="lastname"
                    className="border-[1px] rounded-[5px] border-gray-300 w-[100%] px-2 py-2 "
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="flex flex-col w-[100%] my-2">
                  <span className="text-[14px] leading-[17px] text-[#02878A]">
                    Username
                  </span>
                  <input
                    type="text"
                    placeholder="Enter Your name"
                    value={userName}
                    id="username"
                    className="border-[1px] rounded-[5px] border-gray-300 w-[100%] px-2 py-2 "
                    onChange={handleUserName}
                    required
                  />
                </div>
                <div className="flex flex-col w-[100%] my-2">
                  <span className="text-[14px] leading-[17px] text-[#02878A]">
                    Email
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={
                        validEmail ? "text-[#32cd32] ml-[0.25rem]" : "hidden"
                      }
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      className={
                        validEmail || !userEmail
                          ? "hidden"
                          : "text-[#ff0000] ml-[0.25rem]"
                      }
                    />
                  </span>
                  <input
                    type="email"
                    placeholder="Enter Your email"
                    id="userEmail"
                    value={userEmail}
                    className="border-[1px] rounded-[5px] border-gray-300 w-[100%] px-2 py-2 "
                    required
                    onChange={handleUserEmail}
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
                  />
                  <p
                    id="emailnote"
                    className={
                      emailFocus && !validEmail
                        ? "mr-[0.25rem] mt-2"
                        : "absolute left-[-99999px]"
                    }
                  >
                    <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                    Invalid Email
                  </p>
                </div>
                <div className="flex flex-col w-[100%] my-2">
                  <span className="text-[14px] leading-[17px] text-[#02878A]">
                    Password
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={
                        validPwd ? "text-[#32cd32] ml-[0.25rem]" : "hidden"
                      }
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      className={
                        validPwd || !password
                          ? "hidden"
                          : "text-[#ff0000] ml-[0.25rem]"
                      }
                    />
                  </span>
                  <input
                    type="password"
                    name="pass"
                    required
                    value={password}
                    id="userPassword"
                    placeholder="Enter Your password"
                    className="border-[1px] rounded-[5px] border-gray-300 w-[100%] px-2 py-2"
                    onChange={handlePassword}
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                  />
                  <p
                    id="pwdnote"
                    className={
                      pwdFocus && !validPwd
                        ? "mr-[0.25rem] mt-2"
                        : "absolute left-[-99999px]"
                    }
                  >
                    <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />8 to
                    24 characters. Must include uppercase and lowercase letters,
                    a number and a special character. Allowed special
                    characters: <span aria-label="exclamation mark">!</span>{" "}
                    <span aria-label="at symbol">@</span>{" "}
                    <span aria-label="hashtag">#</span>{" "}
                    <span aria-label="dollar sign">$</span>{" "}
                    <span aria-label="percent">%</span>
                  </p>
                </div>
                <div className="flex flex-col w-[100%] my-2">
                  <span className="text-[14px] leading-[17px] text-[#02878A]">
                    Confirm Password
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={
                        validMatch && confirmPassword
                          ? "text-[#32cd32] ml-[0.25rem]"
                          : "hidden"
                      }
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      className={
                        validMatch || !confirmPassword
                          ? "hidden"
                          : "text-[#ff0000] ml-[0.25rem]"
                      }
                    />
                  </span>
                  <input
                    type="password"
                    placeholder="Confirm password"
                    id="confirm-password"
                    value={confirmPassword}
                    required
                    className="border-[1px] rounded-[5px] border-gray-300 w-[100%] px-2 py-2 "
                    onChange={handleConfirmPassword}
                    aria-invalid={validMatch ? "false" : "true"}
                    aria-describedby="confirmnote"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                  />
                  <p
                    id="confirmnote"
                    className={
                      matchFocus && !validMatch
                        ? "mr-[0.25rem] mt-2"
                        : "absolute left-[-99999px]"
                    }
                  >
                    <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                    Must match the first password input field.
                  </p>
                </div>
                <button
                  type="submit"
                  className="w-[100%] rounded-[5px] bg-[#02878A] py-2 text-white mb-2 mt-4 ease-out duration-300 transition hover:scale-110"
                  // onClick={countDown}
                  // onClick={() => {
                  //   setOpenLogin(false);
                  // }}
                >
                  Signup
                </button>
              </form>
            </>
          ) : (
            <>
              <form
                onSubmit={handleLoginSubmit}
                className="flex w-[100%] flex-col items-center"
              >
                <div className="flex flex-col w-[100%] my-2">
                  <span className="text-[14px] leading-[17px] text-[#02878A]">
                    Email
                  </span>
                  <input
                    type="email"
                    placeholder="Enter Your email"
                    id="loginEmail"
                    value={loginEmail}
                    className="border-[1px] rounded-[5px] border-gray-300 w-[100%] px-2 py-2 "
                    required
                    onChange={(e) => {
                      setLoginEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col w-[100%] my-2">
                  <span className="text-[14px] leading-[17px] text-[#02878A]">
                    Password
                  </span>
                  <input
                    type="password"
                    name="loginPass"
                    required
                    value={loginPass}
                    id="loginPass"
                    placeholder="Enter Your password"
                    className="border-[1px] rounded-[5px] border-gray-300 w-[100%] px-2 py-2"
                    onChange={(e) => {
                      setLoginPass(e.target.value);
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-[100%] rounded-[5px] bg-[#02878A] py-2 text-white mb-2 mt-4 ease-out duration-300 transition hover:scale-110"
                  // onClick={countDown}
                  // onClick={() => {
                  //   setOpenLogin(false);
                  // }}
                >
                  Login
                </button>
              </form>
            </>
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
