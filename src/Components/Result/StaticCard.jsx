import React from "react";
import { ImTruck } from "react-icons/im";
import { AiFillPrinter } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import bag from "../../assets/Result/bag.svg";
import "./staticcard.css";
const StaticCard = ({ data, company }) => {
  // console.log(data);
  // const price = MATH.round(data.price);
  return (
    <div className="flex  flex-col w-[352px]   mx-4 my-4 bg-[#FCFCFD] h-[55vh] min-h-[464px] p-0 crd rounded-[20px]">
      <div
        className={`relative h-[240px] max-w-[352px] rounded-t-[10px] ${company}  top-0`}
      >
        {/* <img src={deliveryCompanyLogo} alt="logo" className="absolute rounded-t-[24px]" /> */}
        <p className="bg-[#D80000] rounded-[4px] max-w-[86px] text-white font-bold text-[12px] leading-[12px] uppercase text-center px-2 py-[10px]  absolute top-[18px] right-[12px] ">
          offer
        </p>
      </div>
      <div className="flex justify-between px-4 pt-4 pb-2">
        <p className="text-[#141416] font-medium text-[16px] leading-[24px] ">
          City Print
        </p>
        <div className="flex flex-col py-[6px] px-[8px] border-2 border-[#58C27D] rounded-[4px]">
          <p className="font-bold text-[12px] leading-[12px] upperrcase text-center text-[#B1B5C4] line-through decoration-[#B1B5C4] mb-[5px]">
            $356
          </p>
          <p className="font-bold text-[12px] leading-[12px] upperrcase text-center text-[#58C27D] ">
            $267
          </p>
        </div>
      </div>
      <div className="flex justify-start items-center pb-2 border-b-[#E6E8EC] border-b-[2px] mx-4">
        <div className="flex items-center justify-start ">
          {" "}
          <ImTruck className="text-[#777E90] w-4 h-4 min-w-[16px] min-h-[16px]" />
          <p className="text-[#777E90] text-[12px]  leading-[20px] mx-1 font-normal">
            Collection Service
          </p>
        </div>
        <div className="flex items-center justify-start">
          {" "}
          <AiFillPrinter className="text-[#777E90] w-4 h-4 min-w-[16px] min-h-[16px]" />
          <p className="text-[#777E90] text-[12px]  leading-[20px] mx-1 font-normal ">
            Printer Not Required
          </p>
        </div>
        <div className="flex items-center justify start ">
          {" "}
          <BsFillInfoCircleFill className="text-[#777E90] w-4 h-4 min-w-[16px] min-h-[16px]" />
          <p className="text-[#777E90] text-[12px]  leading-[20px] mx-1 font-normal">
            More info
          </p>
        </div>
      </div>
      <div className=" flex justify-start px-4 py-2 mb-2">
        <p className="text-[#23262F] font-semibold text-[12px] leading-[20px]">
          {/* $200 total */}
          1000+ service
        </p>
      </div>
      <div className="flex justify-center bg-[#EF9E00] mx-4 px-4 py-4 rounded-[90px]">
        <p className="text-[#FCFCFD] font-semibold text-[16px] leading-[16px] text-right mr-2">
          Reserve
        </p>
        <img src={bag} alt="bag" className="ml-1" />
      </div>
      {/* <div className="bg-[#02878A] flex px-2 py-2 items-center w-[100%] rounded-t-[5px]">
        <img src={logo} alt="" className="w-16 h-16 rounded-full" />
        <div className="flex flex-col items-start mx-4">
          <h1 className="text-white font-light text-[12px] leading-[17px]">
            CitySprint
          </h1>
          <p className="text-white font-light text-[12px] leading-[17px]">
            {data.service_name}
            Same Day Delivery (Push Bike)
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
          <h1 className="text-blue-500 font-bold">
              ${data.price.toFixed(2)}
          </h1>
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
      </div> */}
    </div>
  );
};

export default StaticCard;
