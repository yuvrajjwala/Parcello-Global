import React from "react";
import leftArrow from "../../assets/Destinations/left-arrow.svg";
import rightArrow from "../../assets/Destinations/right-arrow.svg";
import Carousel from "../carousel/Carousel.jsx";
import { useRef } from "react";
const Destinations = () => {
  const slider = useRef(null);
  return (
    <div className="bg-[#FCFCFD] mt-10 py-14">
      <div className="w-[80%] m-auto flex flex-col items-center">
        <div className="flex sm:flex-col gap-2 justify-between w-[100%] items-center">
          <h1 className="text-[#23262F] font-bold text-[48px] leading-[56px] sm:text-4xl">
            Explore popular delivery destinations
          </h1>
          <div className="flex whitespace-nowrap sm:hidden">
            <button
              className="rounded-full mx-2 hover:border-[#E6E8EC] hover:border-[2px] py-[10px] px-[10px] w-10 h-10"
              onClick={() => slider?.current?.slickPrev()}
            >
              <img src={leftArrow} alt="left" />
            </button>
            <button
              className=" rounded-full mx-2 hover:border-[#E6E8EC] hover:border-[2px] py-[10px] px-[10px] w-10 h-10 "
              onClick={() => slider?.current?.slickNext()}
            >
              <img src={rightArrow} alt="left" />
            </button>
          </div>
        </div>
        <Carousel slider={slider} />
      </div>
    </div>
  );
};

export default Destinations;
