import React, { Children } from "react";
import { ImArrowRight, ImTruck } from "react-icons/im";
import { AiFillPrinter, AiOutlineRight } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import bag from "../../assets/Result/bag.svg";
import citysprint from "../../assets/Result/citysprint-logo.png";
import ups from "../../assets/Card/ups.jpg";
import dpd from "../../assets/Card/dpd.png";
import StarRating from "./StarRating";

export default function NewCard({ data, serviceType }) {
  console.log(data)
   const courier_name = data.related_courier[0].courier_name
   const courier_logo = data.related_courier[0].courier_logo
   const max_height = data.max_height
   const max_length = data.max_length
   const max_width = data.max_width
   const randomNumber = (Math.random() * 1) + 4; // Generate a random number between 4 and 5
   const roundedNumber = randomNumber.toFixed(1); // Round to one decimal place
   const max_weight = data.max_weight
   const today = new Date();
   const futureDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2); // Calculate the future date
   const options = { weekday: 'short', day: 'numeric', month: 'long' };
   const dateString = futureDate.toLocaleDateString('en-US', options); // Format the date string
   const price = parseFloat(data.price)
   const vat = parseFloat(data.VAT)
  return (
    <div className="flex flex-col w-full border-[1px] border-slate-300 rounded-md p-5 text-[#008185] justify-between">
      <div className="flex justify-between items-center w-full border-b-[1px] pb-2 border-slate-200 rounded-xl">
        <div className="flex gap-2 items-center w-full">
          <div className=" w-36 h-16 rounded-lg ">
            <img src={courier_logo} className="w-full h-full object-contain" alt="" />
          </div>
          <h3 className="text-sm font-semibold text-[#008185]">
            {courier_name}
          </h3>
        </div>
        <div className=" items-center flex w-full justify-end">
          <h3 className="text-sm px-2 text-slate-500 ">Max :{max_weight>0 && (max_weight+"kg")}-{max_length}x{max_width}x{max_height}</h3>

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
      <div className="flex justify-between my-2 items-center md:flex-col w-full gap-5">
        <div className="flex  gap-4 w-full items-center " >
          <div className="flex justify-center items-center gap-3">
            <div className="flex flex-col items-center justify-center p-3 border-[1px] border-slate-200 rounded-lg">
              <h1 className="font-medium ">Rating : {roundedNumber}</h1>
              <StarRating rating={4.4} />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold">Drop off Today</span>
              <a href="#" className="font-bold text-xs underline text-blue-500">
                Find Nearest Dropoff
              </a>
            </div>
          </div>
          <div className="flex-col px-3 border-l-[1px] items-center justify-center border-slate-200">
            <h1 className="text-sm font-bold ">Estimated Delivery :</h1>
            <div className="flex items-center gap-1">
              <span className="text-black text-sm">{dateString}</span>
              <h3 className=" text-xs p-1 px-2 rounded-md bg-slate-200 font-bold">
                2+ Days Delivery
              </h3>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-2 w-full">
          <div className=" border-[1px] border-slate-200 p-3 rounded-md flex gap-3 items-center md:flex-col md:w-full">
            <div>
              <p className="font-bold text-lg">${price}</p>
              <p className="text-sm text-black">${(price+vat).toFixed(2)} with vat</p>
            </div>
            <button className=" p-3 max-w-[150px] md:max-w-full rounded-md border-[1px] border-slate-300 text-sm font-bold flex items-center text-left w-full">
              <h1>Book without Protection</h1>
              <AiOutlineRight className="text-xl" />
            </button>
          </div>
          <div className=" bg-sky-50  p-3 rounded-md flex gap-3 items-center md:flex-col md:w-full">
            <div>
              <p className="font-bold text-lg">${price}</p>
              <p className="text-sm text-black">${(price+vat).toFixed(2)} with vat</p>
            </div>
            <button className=" bg-green-600 text-white p-3 max-w-[150px] md:max-w-full rounded-md border-[1px] border-slate-300 text-sm font-bold flex items-center  text-left w-full">
              <h1>Book with $20 Protection</h1>
              <AiOutlineRight className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}