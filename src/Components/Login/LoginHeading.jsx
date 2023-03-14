import React from "react";
import "./loginHeading.css";
const LoginHeading = ({ highlightedText, text }) => {
  return (
    <>
      <h1 className="loginHeading lg:w-[100%] max-w-[359px] ">
        <span>{highlightedText}</span> {text}
      </h1>
    </>
  );
};

export default LoginHeading;
