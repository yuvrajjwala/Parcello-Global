import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import StaticCard from "../../Components/Result/StaticCard.jsx";
import logo from "../../assets/login/Parcello.svg";
import drop from "../../assets/Result/drop-off.png";

import special from "../../assets/Result/special-services.png";
import sameDay from "../../assets/Result/same-day.png";
import all from "../../assets/Result/all.png";
import { useLocation } from "react-router-dom";
import collection from "../../assets/Result/collection.png";
import tape from "../../assets/Result/tape.jpg";
import wtIcon from "../../assets/Result/weight.png";
import axios from "../../api/axios";
import { useState } from "react";
import Card from "../../Components/Result/Card.jsx";

import "./result.css";

import control from "../../assets/control.png";
import NewCard from "../../Components/Result/NewCard";
import Spinner from "../../Components/Result/Spinner";
const DELIVERY_URL = "/api/couriers/fetchbydelivery/";

const Result = () => {
  const [open, setOpen] = useState(true);
  // const Menus = [
  //   { title: "Collection", src: collection },
  //   { title: "Drop Off", src: drop },
  //   { title: "Special Services", src: special, gap: true },
  //   { title: "Same Day", src: sameDay },
  //   { title: "All", src: all },
  // ];
  // const [data, setData] = useState([]);

  let location = useLocation();
  // useEffect(() => {
  //   setData(location.state);
  // }, []);
  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
  // console.log(location?.state);
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState(0);
  const [serviceType, setServiceType] = useState("Same Day");
  const [distance, setDistance] = useState(15);
  const [data, setData] = useState([]);
  const [toggleStatic, setToggleStatic] = useState(true);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState(false);

  useEffect(() => {
    if (location?.state?.body?.service === "Same Day") {
      setDistance(location?.state?.body?.dist);
    } else {
      setFrom(location?.state?.body?.from);
      setTo(location?.state?.body?.to);
    }

    setServiceType(location?.state?.body?.service);
  }, []);

  const handleCardClick = () => {
    if (height && weight && length && width) {
      handleSubmit();
    } else {
      setFormError(true);
    }
  };

  const handleSubmit = async (event) => {
    event?.preventDefault();
    setLoading(true);
    let Data;
    try {
      if (serviceType === "Same Day") {
        const response = await axios.post(
          DELIVERY_URL,
          {
            Length: parseInt(length),
            Height: parseInt(height),
            Width: parseInt(width),
            Weight: parseInt(weight),
            Distance: distance,
            service_type: serviceType,
          },
          {
            headers: { "content-Type": "application/json" },
          }
        );
        Data = await response?.data;
        setData(response.data);
      } else if (serviceType === "International") {
        const response = await axios.post(
          DELIVERY_URL,
          {
            Length: parseInt(length),
            Height: parseInt(height),
            Width: parseInt(width),
            From: from,
            To: to,
            Service: serviceType,
          },
          {
            headers: { "content-Type": "application/json" },
          }
        );
        Data = await response?.data;
        setData(response.data);
      } else if (serviceType === "Domestic") {
        const response = await axios.post(
          DELIVERY_URL,
          {
            Distance: distance,
            service_type: serviceType,
          },
          {
            headers: { "content-Type": "application/json" },
          }
        );
        Data = await response?.data;
        setData(response.data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setFormError(false)
      setToggleStatic(false);
      setLoading(false);
    }

    // console.log(data);
  };

  return (
    <div className="flex page">
      {/* <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-[#004446] h-auto min-h-[100vh] p-5  pt-8 relative duration-300 `}
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
      </div> */}
      <div className=" flex-1 px-7 py-0 md:px-3 sm:px-2">
        {/* <Result /> */}
        <div>
          <Navbar></Navbar>
          <div className="bg-[#02878A] flex justify-center my-2 w-[100%] mx-0 h-[1px]">
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
          <div
            className={`flex flex-col m-auto ${
              formError
                ? " border-[#ff2525] shadow-red-300"
                : " border-[#FCFCFD]"
            }  w-fit md:w-full md:px-6 shadow-md  border-[2px] bg-white my-[50px] rounded-[24px] py-8 px-10`}
          >
            <div className="flex mb-2 w-[100%] md:flex-col gap-2 md:justify-center items-center">
              <div className="border-[2px] md:w-full flex justify-center border-[#E6E8EC] rounded-[90px] font-bold text-[14px] leading-[16px]  text-[#23262F] px-4 py-2">
                Try our shipping calculator
              </div>
              <div className="bg-[#008185] border-[2px] border-[#FFFFFF] rounded-[90px] px-4 py-2 font-bold text-[14px] leading-[16px] text-right text-white  flex justify-center md:w-full">
                {serviceType}
              </div>
            </div>
            <div className="my-2 flex items-center justify-center md:flex-col ">
              <form
                className="flex md:flex-col w-full gap-3"
                onSubmit={handleSubmit}
              >
                <div className="flex items-center mr-2">
                  {/* logo */}
                  <img src={tape} alt="tape" className="w-10 h-auto mr-2" />
                  <div className="flex flex-col w-full">
                    <span className="font-semibold text-[24px] leading-[32px]">
                      Length
                    </span>
                    <input
                      type="text"
                      placeholder="in cm"
                      className="border-b-[1px]  focus:outline-none hover:outline-none my-[1px] "
                      onChange={(e) => setLength(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center mr-2  w-full">
                    {/* logo */}
                    <img src={tape} alt="tape" className="w-10 h-auto mr-2" />
                    <div className="flex flex-col  w-full">
                      <span className="font-semibold text-[24px] leading-[32px]">
                        Width
                      </span>
                      <input
                        type="text"
                        placeholder="in cm"
                        className="border-b-[1px]  focus:outline-none hover:outline-none my-[1px]  w-full"
                        onChange={(e) => setWidth(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center mr-2  w-full">
                    {/* logo */}
                    <img src={tape} alt="tape" className="w-10 h-auto mr-2" />
                    <div className="flex flex-col  w-full">
                      <span className="font-semibold text-[24px] leading-[32px]">
                        Height
                      </span>
                      <input
                        type="text"
                        placeholder="in cm"
                        className="border-b-[1px]  focus:outline-none hover:outline-none my-[1px]  w-full"
                        onChange={(e) => setHeight(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center mr-2  w-full">
                    {/* logo */}
                    <img src={wtIcon} alt="tape" className="w-8 h-auto mr-4" />
                    <div className="flex flex-col  w-full">
                      <span className="font-semibold text-[24px] leading-[32px]">
                        Weight
                      </span>
                      <input
                        type="text"
                        placeholder="in Kg"
                        className="border-b-[1px]  focus:outline-none hover:outline-none my-[1px]  w-full"
                        onChange={(e) => setWeight(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-[#008185] rounded-[90px]  px-6 text-white h-12 ease-in duration-300 hover:scale-110"
                >
                  Get Quote
                </button>
              </form>
            </div>
          </div>

          <div className="flex px-6 m-auto flex-col">
            <div className="flex justify-start text-left w-[100%] border-b-[2px] py-2 border-b-[#008185] mb-4">
              <p className="text-[20px] leading-6 font-semibold text-[#008185]">
                Popular Domestic Services
              </p>
            </div>
            <div
              className={`flex ${
                toggleStatic ? "flex-row" : "flex-col"
              }  gap-5 flex-wrap px-2 justify-center min-h-fit mx-32 md:mx-16 sm:mx-0 py-4 md:px-0 my-4 bg-white calculator-background rounded-[24px]`}
            >
              {loading ? (
                <Spinner />
              ) : (
                <>
                  {toggleStatic ? (
                    <>
                      <button onClick={() => handleCardClick()}>
                        <StaticCard company="citysprint" />
                      </button>
                      <button onClick={() => handleCardClick()}>
                        <StaticCard company="dpd" />
                      </button>
                      <button onClick={() => handleCardClick()}>
                        <StaticCard company="dhl" />
                      </button>
                    </>
                  ) : (
                    // data.map((item, index) => <Card data={item} serviceType={serviceType}/>)
                    data.map((item, index) => (
                      <NewCard data={item} serviceType={serviceType} />
                    ))
                  )}
                </>
              )}
            </div>
          </div>
        </div>
        {/* <h1 className="text-2xl font-semibold ">H</h1> */}
      </div>
    </div>
  );
};

export default Result;
