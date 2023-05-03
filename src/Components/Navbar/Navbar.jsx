import React, { lazy, Suspense } from "react";
import "./Navbar.css";
import ham from "../../assets/Navbar/ham.svg";
import close from "../../assets/Navbar/close.svg";
import parcello from "../../assets/Navbar/parcello.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import Login from "../../Components/login/Login";

const Navbar = () => {
  // const [openLogin, setOpenLogin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    // <div className="navbar">
    //   <div className="logo-nav">
    //     <p>
    //       Parcello <img className="logo" src={parcello}></img>
    //     </p>
    //   </div>
    //   <div className="pagesLinks">
    //     <ul>
    //       <li>Ship A Package</li>
    //       <li>Tracking</li>
    //       <li>
    //         <NavLink
    //           to="/signin"
    //           // onClick={() => {
    //           //   setOpenLogin(true);
    //           // }}
    //         >
    //           Login
    //         </NavLink>
    //       </li>
    //       <li>
    //         <NavLink
    //           to="/signup"
    //           // onClick={() => {
    //           //   setOpenLogin(true);
    //           // }}
    //         >
    //           Signup
    //         </NavLink>
    //       </li>

    //       <img src={search}></img>
    //       <img src={cart}></img>
    //       <img src={ham}></img>
    //     </ul>
    //   </div>
    //   {/* {openLogin ? <Login setOpenLogin={setOpenLogin} openLogin={openLogin}/> : <></>} */}
    // </div>
    <>
      <div className="flex w-full bg-white p-3 justify-between items-center px-8 text-sm text-slate-500 ">
        <div className="flex items-center">
          <h1 className="text-2xl text-black font-bold">Pacello</h1>{" "}
          <img className="max-w-[50px]" src={parcello}></img>
        </div>
        <div className="flex items-center gap-4  md:hidden justify-end w-full">
          <NavLink
            to="/contactus"
            onClick={() => {
              setOpenLogin(true);
            }}
          >
            Contact Us
          </NavLink>

          <NavLink
            to="/signin"
            onClick={() => {
              setOpenLogin(true);
            }}
          >
            SignIn
          </NavLink>
          <NavLink
            to="/signup"
            onClick={() => {
              setOpenLogin(true);
            }}
          >
            SignUp
          </NavLink>
          <div className="dropdown relative">
            <button className="">
              <img src={ham}></img>
            </button>
            <div className="dropdown-content p-3 gap-2">
              <NavLink
                to="/privacy"
                onClick={() => {
                  setOpenLogin(true);
                }}
                className={
                  "flex border-b-[1px] border-slate-300 w-full items-center justify-center p-2"
                }
              >
                Privacy
              </NavLink>
              <NavLink
                to="/toc"
                onClick={() => {
                  setOpenLogin(true);
                }}
                className={
                  "flex w-full whitespace-nowrap items-center justify-center p-2"
                }
              >
                Terms and conditions
              </NavLink>
            </div>
          </div>
        </div>

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden md:block"
        >
          {isCollapsed ? <img src={ham}></img> : <img src={close}></img>}
        </button>
      </div>

      <div className={`hidden overflow-hidden md:block  absolute`} >
        <div className={`flex flex-col overflow-hidden right-0 ease-in-out duration-300  w-3/4  gap-4 h-screen fixed  bg-white z-40 text-slate-500 p-5 ${!isCollapsed ? " translate-x-0" : " translate-x-full"}`}  >
          <NavLink
            to="/signin"
            onClick={() => {
              setOpenLogin(true);
            }}
            className={
              "flex border-b-[1px] border-slate-300 w-full items-center justify-center p-2"
            }
          >
            SignIn
          </NavLink>
          <NavLink
            to="/signup"
            onClick={() => {
              setOpenLogin(true);
            }}
            className={
              "flex border-b-[1px] border-slate-300 w-full items-center justify-center p-2"
            }
          >
            SignUp
          </NavLink>

          <NavLink
            to="/contactus"
            onClick={() => {
              setOpenLogin(true);
            }}
            className={
              "flex border-b-[1px] border-slate-300 w-full items-center justify-center p-2"
            }
          >
            Contact Us
          </NavLink>

          <NavLink
            to="/privacy"
            onClick={() => {
              setOpenLogin(true);
            }}
            className={
              "flex border-b-[1px] border-slate-300 w-full items-center justify-center p-2"
            }
          >
            Privacy
          </NavLink>
          <NavLink
            to="/toc"
            onClick={() => {
              setOpenLogin(true);
            }}
            className={"flex w-full items-center justify-center p-2"}
          >
            Terms and conditions
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
