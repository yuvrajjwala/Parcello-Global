import React, { useEffect } from "react";
import { ImTruck } from "react-icons/im";
import { AiFillPrinter } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import bag from "../../assets/Result/bag.svg";
import citysprint from "../../assets/Result/citysprint-logo.png";
import ups from "../../assets/Card/ups.jpg";
import dpd from "../../assets/Card/dpd.png";

// import "./staticcard.css";
const Card = ({ data, serviceType }) => {
  // console.log(data);
  // const price = MATH.round(data.price);

  return (
    <div className="flex  flex-col w-[352px]   mx-4 my-4 bg-[#FCFCFD]  p-0 crd rounded-[20px]">
      <div className="bg-[#02878A] flex px-2 py-2 items-center w-[100%] rounded-t-[5px]">
        <img
          src={
            serviceType === "Same Day"
              ? citysprint
              : serviceType === "Domestic"
              ? dpd
              : ups
          }
          alt=""
          className="w-16 h-16 rounded-full bg-white "
        />
        <div className="flex flex-col items-start mx-4">
          <h1 className="text-white font-light text-[12px] leading-[17px]">
            {serviceType === "Same Day"
              ? "CitySPrint"
              : serviceType === "Domestic"
              ? "DPD"
              : "UPS"}
          </h1>
          <p className="text-white font-light text-[12px] leading-[17px]">
            {data.service_name}
            {/* Same Day Delivery (Push Bike) */}
          </p>
        </div>
      </div>
      <div className="bg-white   pt-24 px-4 flex justify-center ">
        <h1 className="capitalize text-gray-400 font-light text-[12px] leading-[17px]">
          {" "}
          Collection and delivery today. Fully tracked.
        </h1>
      </div>
      <div className="flex justify-between mt-8 my-4 mx-4 items-center">
        <div className="flex flex-col">
          <h1 className="text-blue-500 font-bold">${data.price.toFixed(2)}</h1>
          {/* <h1 className="text-blue-500 font-bold">$2</h1> */}

          <p className="text-gray-600 text-[12px]">
            {/* $23 inc VAT */}${(data.price + data.VAT).toFixed(2)} inc VAT
          </p>
        </div>
        <button className="Capitalize bg-yellow-400 py-2 px-4 rounded-[25px] text-[12px] font-semibold min-w-[170px] hover:scale-110 trasition ease-in duration-300">
          Book this service
        </button>
      </div>
      <div className="flex justify-around items-center py-2 px-2 border-t-gray-300 border-t-[2px]">
        <div className="flex items-center mx-4">
          {" "}
          <ImTruck className="text-[#02878A] w-6 h-6" />
          <p className="text-[#02878A] text-[12px] max-w-[40px] leading-[14px] mx-2">
            Collection Service
          </p>
        </div>
        <div className="flex items-center mx-4">
          {" "}
          <AiFillPrinter className="text-[#02878A] w-6 h-6" />
          <p className="text-[#02878A] text-[12px] max-w-[40px] leading-[14px] mx-2">
            Printer Not Required
          </p>
        </div>
        <div className="flex items-center mx-4">
          {" "}
          <BsFillInfoCircleFill className="text-[#02878A] w-6 h-6" />
          <p className="text-[#02878A] text-[12px] max-w-[40px] leading-[14px] mx-2">
            More info
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
