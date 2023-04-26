import React from "react";
import { ImArrowRight, ImTruck } from "react-icons/im";
import { AiFillPrinter, AiOutlineRight } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import bag from "../../assets/Result/bag.svg";
import citysprint from "../../assets/Result/citysprint-logo.png";
import ups from "../../assets/Card/ups.jpg";
import dpd from "../../assets/Card/dpd.png";
import StarRating from "./StarRating";

export default function NewCard({ data, serviceType }) {
  return (
    <div className="flex flex-col w-full border-[1px] border-slate-300 rounded-md p-5 text-[#008185]">
      <div className="flex justify-between items-center w-full border-b-[1px] pb-2 border-slate-200 rounded-xl">
        <div className="flex gap-2 items-center">
          <div className=" w-36 bg-green-300 rounded-lg p-4"></div>
          <h3 className="text-sm font-semibold text-[#008185]">
            Yodel Direct Economy
          </h3>
        </div>
        <div className=" items-center flex">
          <h3 className="text-sm px-2 text-slate-500 ">Max:10kg-65x64x32</h3>

          <a href="" className="flex items-center text-blue-500">
            <p
              href=""
              className="border-l-2 underline  pl-4 border-l-slate-300 text-sm"
            >
              More Details
            </p>
            <AiOutlineRight />
          </a>
        </div>
      </div>
      <div className="flex justify-between my-2 items-center">
        <div className="flex justify-center items-center gap-3">
          <div className="flex flex-col items-center justify-center p-3 border-[1px] border-slate-200 rounded-lg">
            <h1 className="font-medium ">Rating : 4.4</h1>
            <StarRating rating={4.4} />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold">Drop off Today</span>
            <a href="#" className="font-bold text-xs underline text-blue-500">
              Find Nearest Dropoff
            </a>
          </div>
        </div>
        <div className="flex-col px-3 border-l-[1px] items-centet justify-center border-slate-200">
          <h1 className="text-sm font-bold ">Estimated Delivery :</h1>
          <div className="flex items-center gap-1">
            <span className="text-black text-sm">Wed ,26 Apr</span>
            <h3 className=" text-xs p-1 px-2 rounded-md bg-slate-200 font-bold">
              2+ Days Delivery
            </h3>
          </div>
        </div>

        <div className="flex justify-center items-center gap-2">
          <div className=" border-[1px] border-slate-200 p-3 rounded-md flex gap-3 items-center">
            <div>
              <p className="font-bold text-lg">$2.25</p>
              <p className="text-sm text-black">$2.75 with vat</p>
            </div>
            <button className=" p-3 max-w-[150px] rounded-md border-[1px] border-slate-300 text-sm font-bold flex items-center text-left">
              <h1>Book without Protection</h1>
              <AiOutlineRight className="text-xl"/>
            </button>
          </div>
          <div className=" bg-sky-50  p-3 rounded-md flex gap-3 items-center">
            <div>
              <p className="font-bold text-lg">$2.25</p>
              <p className="text-sm text-black">$2.75 with vat</p>
            </div>
            <button className=" bg-green-600 text-white p-3 max-w-[150px] rounded-md border-[1px] border-slate-300 text-sm font-bold flex items-center  text-left">
              <h1>Book with $20 Protection</h1>
              <AiOutlineRight className="text-xl"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
