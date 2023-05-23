import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import logo from "../../assets/Navbar/parcello.png";
import axios from "../../api/axios";
import exit from "../../assets/login/exit.svg";
import AuthContext from "../../context/AuthContext";
import truck from "../../assets/login/truck.jpg";
import "./signin.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LOGIN_URL = "/auth/users/API/login/";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const { auth, updateAuth } = useContext(AuthContext);

  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   const body = {
  //     email: email,
  //     password: password,
  //   };
  //   console.log(body);
  // };
  const toastSuccess = () => toast.success("signup successfully");
  const toastWarn = () => toast.warn("Invalid Credentials");

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        { email: email, password: password },
        {
          headers: { "content-Type": "application/json" },
          withCredentials: true,
        }
      );
      // console.log(response);
      const accessToken = response?.data?.tokens?.access;
      const refreshToken = response?.data?.tokens?.refresh;

      // const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      const item = {
        email: email,
        accessToken,
        refreshToken,
        isAuthenticated: true,
      };
      localStorage.setItem("auth", JSON.stringify(item));
      updateAuth(item);
      setEmail("");
      setPassword("");
      navigate("/dashboard");
    } catch (e) {
      if (e.response?.status === 403) {
        toastWarn();
        // toastWarn("Invalid Credentials");
        // error("Invalid Email id");
      }
    }
  };
  return (
    <div className="flex h-screen overflow-x-hidden relative">
      <div className="formBg h-full w-[55%]  flex items-center justify-center md:hidden">
        <img
          src={truck}
          className="w-full h-full overflow-hidden object-cover"
          alt=""
        />
      </div>
      <Link
        to="/"
        className="absolute -top-3 -right-3 bg-slate-500   rounded-full w-12 h-12 flex justify-start items-end p-4 cursor-pointer overflow-hidden"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={exit} alt="exit" className="w-4 h-4 exit " />
      </Link>
      <form
        className="mx-auto flex justify-center items-start flex-col gap-8 w-80"
        onSubmit={handleLoginSubmit}
      >
        <div className="flex flex-col">
          <span className="text-xl text-primary font-semibold">
            Get Started With Parcello
          </span>
          <span className=" text-slate-500">Continue to Sign in</span>
        </div>

        <div className="relative w-full">
          <label className=" text-primary -mb-5 font-semibold" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            className="border-secondary border-2 py-2 px-3 rounded-lg focus:border-primary w-full"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="relative w-full">
          <label className=" -mb-5 font-semibold" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            className="border-secondary border-2 p-2 px-3 rounded-lg focus:border-primary w-full"
            type={isVisible ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="text-secondary text-2xl absolute"
            type="button"
            onClick={() => setIsVisible(!isVisible)}
            style={{ top: "34px", right: "10px" }}
          >
            {isVisible ? (
              <AiOutlineEye className="text-slate-500" />
            ) : (
              <AiOutlineEyeInvisible className="text-slate-500" />
            )}
          </button>
        </div>
        <div className=" flex justify-end w-[100%]">
          <Link to="/reset" className="text-[14px] text-[#02878A]">
            {" "}
            Forgot Password?
          </Link>
        </div>
        <button
          className="bg-[#02878A] text-white w-full h-10 rounded-lg cursor-pointer "
          type="submit"
          // onClick={submitHandler}
          disabled={email.length == 0 || password.length == 0 ? true : false}
        >
          Sign In
        </button>
        <div className="w-80 text-slate-500">
          Don't have an account?&nbsp;&nbsp;
          <Link className="text-[#02878A]" to={"/signup"}>
            Sign Up
          </Link>
        </div>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
