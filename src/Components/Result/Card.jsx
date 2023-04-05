import React from "react";
import logo from "../../assets/Result/citySprint.png";
import { ImTruck } from "react-icons/im";
import { AiFillPrinter } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
const Card = ({ data }) => {
  // console.log(data);
  // const price = MATH.round(data.price);
  return (
    <div className="flex rounded-[5px] flex-col max-w-[30vw] border-[1px] border-gray-300 mx-2 my-4">
      <div className="bg-[#02878A] flex px-2 py-2 items-center w-[100%] rounded-t-[5px]">
        <img src={logo} alt="" className="w-16 h-16 rounded-full" />
        <div className="flex flex-col items-start mx-4">
          <h1 className="text-white font-light text-[12px] leading-[17px]">
            CitySprint
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
          <p className="text-gray-600 text-[12px]">
            ${(data.price + data.VAT).toFixed(2)} inc VAT
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
