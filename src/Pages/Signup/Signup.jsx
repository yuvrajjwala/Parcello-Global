import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import logo from "../../assets/Navbar/parcello.png";
import isEmail from "validator/lib/isemail";
import axios from "../../api/axios";
import AuthContext from "../../context/AuthContext";
const REGISTER_URL = "/auth/users/API/register/";
import { useNavigate } from "react-router-dom";
import dock from "../../assets/login/dock.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import exit from "../../assets/login/exit.svg";

export default function Signup() {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);

  const toastSuccess = () =>
    toast.success("This is Toast Notification for Success");
  const toastWarn = () => toast.warn("This is Toast Notification for Warn");

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();

    // if button enabled with JS hack
    // const v1 = EMAIL_REGEX.test(userEmail);
    // const v2 = PWD_REGEX.test(password);
    // if (!v1 || !v2) {
    //   setErrMsg("Invalid Entry");
    //   error("");
    //   return;
    // }
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
      setSignup(false);
    } catch (err) {
      if (err.response?.status === 400) {
        error("User already exists");
        setErrMsg("User already exists");
      }
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    toastSuccess();
    // navigate("/signup/otp");

    // history.push("/signup/otp");
    // const body = {
    //   email: email,
    //   password: password,
    // };
    // console.log(body);
  };

  return (
    <div className="flex h-screen">
      {/* <div className="formBg h-full w-[55%]  flex items-center justify-center md:hidden">
        <img src={dock} className="w-full h-full overflow-hidden object-cover" alt="" />
      </div> */}

      <Link
        to="/"
        className="absolute -top-3 -right-3 bg-slate-500   rounded-full w-12 h-12 flex justify-start items-end p-4 cursor-pointer overflow-hidden"
      >
        <img src={exit} alt="exit" className="w-4 h-4 exit " />
      </Link>
      <form
        className="mx-auto flex justify-center items-start flex-col gap-8 w-80"
        onSubmit={submitHandler}
      >
        <div className="flex flex-col">
          <span className="text-xl text-primary font-semibold">
            Get Started With Parcello
          </span>
          <span className=" text-slate-500">Continue to Sign up</span>
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
          {!isEmail(email) && email && (
            <span className=" text-red-600"> Not a valid email </span>
          )}
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
        <div className="relative w-full">
          <label className=" -mb-5 font-semibold" htmlFor="confirmpassword">
            Confirm Password
          </label>
          <input
            id="confirmpassword"
            className="border-secondary border-2 p-2 px-3 rounded-lg focus:border-primary w-full"
            type={isConfirmVisible ? "text" : "password"}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button
            className="text-secondary text-2xl absolute"
            type="button"
            onClick={() => setIsConfirmVisible(!isConfirmVisible)}
            style={{ top: "34px", right: "10px" }}
          >
            {isConfirmVisible ? (
              <AiOutlineEye className="text-slate-500" />
            ) : (
              <AiOutlineEyeInvisible className="text-slate-500" />
            )}
          </button>
          {password != confirmPassword && password && confirmPassword && (
            <span className=" text-red-600"> Passwoed Doesnot Match </span>
          )}
        </div>

        <div className="flex items-start">
          <input type="checkbox" className="m-3" required />
          <span className="text-sm text-slate-500">
            I agree to the{" "}
            <a className="underline" href="">
              Terms and Conditions
            </a>{" "}
            and{" "}
            <a className="underline" href="">
              Privacy Policy
            </a>{" "}
          </span>
        </div>

        <button
          className="bg-[#02878A] text-white w-full h-10 rounded-lg cursor-pointer disabled:bg-slate-500"
          type="submit"
          disabled={
            email.length == 0 ||
            password.length == 0 ||
            confirmPassword.length == 0 ||
            password != confirmPassword ||
            !isEmail(email)
              ? true
              : false
          }
        >
          Sign up
        </button>
        <div className="w-80 text-slate-500">
          Already have an account?&nbsp;&nbsp;
          <Link className="text-[#02878A]" to={"/signin"}>
            Sign in
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
