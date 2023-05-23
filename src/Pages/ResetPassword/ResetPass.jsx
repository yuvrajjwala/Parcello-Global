import React, { useEffect } from "react";
import logo from "../../assets/login/Parcello.svg";
import { useState } from "react";
import axios from "../../api/axios";

const ResetPass = () => {
  const [userEmail, setUserEmail] = useState("");
  const [restLink, setResetLink] = useState(false);

  const handleResetPass = async () => {
    // http://127.0.0.1:8000/auth/users/API/password_reset/

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/auth/users/API/password_reset/",
        { email: userEmail }
      );
      setResetLink(true);
    } catch (err) {
      console.log(err);
    }
  };
  // useEffect(() => {
  //   console.log(userEmail);
  // }, [userEmail]);
  return (
    <div className="flex flex-col w-[35%] m-auto h-[100vh] justify-start items-center py-20 r">
      <img
        src={logo}
        alt="logo"
        className="w-20 h-20 rounded-full border-black border-[1px] my-4"
      />
      <h1 className="text-[48px] leading-[64px] font-medium text-center ">
        Reset Your Password
      </h1>
      <p className="text-start text-[16px] flex justify-start w-[100%]">
        Fear not. we'll email you intsructions to reset your password.
      </p>
      <div className="flex flex-col w-[100%] my-4">
        <span className="text-[20px] leading-[24px] text-[#028a5a] my-2">
          Email
        </span>
        {!restLink ? (
          <input
            type="email"
            name="usermail"
            id="usermail"
            className="border-[1px] border-gray-300 w-[100%] px-2 py-2"
            onChange={(event) => {
              setUserEmail(event.target.value);
            }}
          />
        ) : (
          <p>
            Please check your Registered email password link is sent on that
          </p>
        )}

        <div className="flex  items-center my-4">
          {!restLink ? (
            <button
              className="w-[30%]  bg-[#028a5a] py-2 px-2 text-white mb-2 mt-4 ease-out duration-300 transition hover:scale-110 mr-4"
              onClick={handleResetPass}
            >
              Reset Password
            </button>
          ) : (
            <></>
          )}

          <a href="/signin" className="w-[30%] underline text-[#028a5a]">
            Return to login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResetPass;
