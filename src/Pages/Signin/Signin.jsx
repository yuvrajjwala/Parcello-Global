import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import logo from "../../assets/Navbar/parcello.png";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    const body = {
      email: email,
      password: password,
    };
    console.log(body);
  };

  return (
    <div className="flex h-screen">
      <div className="formBg h-full w-2/5 flex items-center justify-center md:hidden"></div>
      <form className="mx-auto flex justify-center items-start flex-col gap-8 w-80">
        <div className=" my-5 h-5 flex">
          <h1 className="text-lg font-bold">Parcello</h1>
          <img src={logo} className="h-full w-full" alt="" />
        </div>
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
              <AiOutlineEyeInvisible  className="text-slate-500"/>
            )}
          </button>
        </div>
        
        <button
          className="bg-[#02878A] text-white w-full h-10 rounded-lg cursor-pointer disabled:bg-slate-500"
          type="submit"
          onClick={submitHandler}
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
    </div>
  );
}