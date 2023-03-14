import React from "react";
import exitBackground from "../../assets/login/exitBckgrnd.svg";
import exit from "../../assets/login/exit.svg";
import "./exitBtn.css";
import { Link } from "react-router-dom";

const ExitBtn = () => {
  return (
    <>
      <Link to="/">
        <img className="exit" src={exit} alt="exit" />
      </Link>
      <img className="exitBackground" src={exitBackground} />
    </>
  );
};

export default ExitBtn;
