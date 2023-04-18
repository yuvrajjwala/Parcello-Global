import React, { lazy, Suspense } from "react";
import "./Navbar.css";
import ham from "../../assets/Navbar/ham.svg";
import search from "../../assets/Navbar/search.svg";
import cart from "../../assets/Navbar/cart.svg";
import parcello from "../../assets/Navbar/parcello.png";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import Login from "../../Components/login/Login";

const Navbar = () => {
  // const [openLogin, setOpenLogin] = useState(false);

  return (
    <div className="navbar">
      <div className="logo-nav">
        <p>
          Parcello <img className="logo" src={parcello}></img>
        </p>
      </div>
      <div className="pagesLinks">
        <ul>
          <li>Ship A Package</li>
          <li>Tracking</li>
          <li>
            <NavLink
              to="/signin"
              // onClick={() => {
              //   setOpenLogin(true);
              // }}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              // onClick={() => {
              //   setOpenLogin(true);
              // }}
            >
              Signup
            </NavLink>
          </li>

          <img src={search}></img>
          <img src={cart}></img>
          <img src={ham}></img>
        </ul>
      </div>
      {/* {openLogin ? <Login setOpenLogin={setOpenLogin} openLogin={openLogin}/> : <></>} */}
    </div>
  );
};

export default Navbar;
