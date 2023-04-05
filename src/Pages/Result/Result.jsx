import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Card from "../../Components/Result/Card.jsx";
import logo from "../../assets/login/Parcello.svg";
import drop from "../../assets/Result/drop-off.png";
import special from "../../assets/Result/special-services.png";
import sameDay from "../../assets/Result/same-day.png";
import all from "../../assets/Result/all.png";
import { useLocation } from "react-router-dom";
import collection from "../../assets/Result/collection.png";
import { useState } from "react";

import control from "../../assets/control.png";

const Result = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Collection", src: collection },
    { title: "Drop Off", src: drop },
    { title: "Special Services", src: special, gap: true },
    { title: "Same Day", src: sameDay },
    { title: "All", src: all },
  ];
  const [data, setData] = useState([]);
  let location = useLocation();
  useEffect(() => {
    setData(location.state);
  }, []);
  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  // console.log(location?.state);
  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-[#004446] h-auto  p-5  pt-8 relative duration-300 `}
      >
        <img
          src={control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            className={`cursor-pointer duration-500 bg-white w-10 h-10 rounded-full ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Parcello
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={Menu.src} className="w-6 h-6" />
              <span
                className={`${!open && "hidden"} origin-left duration-200 `}
              >
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className=" flex-1 p-7">
        {/* <Result /> */}
        <div>
          <Navbar></Navbar>
          <div className="bg-[#02878A] flex justify-center my-2 w-[100%] mx-0 h-10">
            {/* <ul className="flex">
              <li className="px-2 py-2 text-white font-semibold hover:bg-[#004446] cursor-pointer">
                Collection
              </li>
              <li className="px-2 py-2 text-white font-semibold hover:bg-[#004446] cursor-pointer">
                Drop Off
              </li>
              <li className="px-2 py-2 text-white font-semibold hover:bg-[#004446] cursor-pointer">
                Special Services
              </li>
              <li className="px-2 py-2 text-white font-semibold hover:bg-[#004446] cursor-pointer">
                Same Day
              </li>
              <li className="px-2 py-2 text-white font-semibold hover:bg-[#004446] cursor-pointer">
                All
              </li>
            </ul> */}
          </div>
          <div className="flex flex-wrap px-2 justify-center">
            {data.map((item, index) => (
              <Card data={item} />
            ))}

            {/* <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card /> */}
          </div>
        </div>
        {/* <h1 className="text-2xl font-semibold ">H</h1> */}
      </div>
    </div>
  );
};

export default Result;
