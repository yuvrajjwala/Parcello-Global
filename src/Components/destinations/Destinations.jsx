import React from "react";
import leftArrow from "../../assets/Destinations/left-arrow.svg";
import rightArrow from "../../assets/Destinations/right-arrow.svg";
import Carousel from "../carousel/Carousel.jsx";

const Destinations = () => {
  return (
    <div className="bg-[#FCFCFD] mt-10 py-14">
      <div className="w-[80%] m-auto flex flex-col items-center">
        <div className="flex justify-between w-[100%] items-center">
          <h1 className="text-[#23262F] font-bold text-[48px] leading-[56px]">
            Explore popular delivery destinations
          </h1>
          <div>
            <button className="rounded-full mx-2">
              <img src={leftArrow} alt="left" />
            </button>
            <button className="border-[2px] rounded-full mx-2 border-[#E6E8EC] py-[10px] px-[10px] w-10 h-10">
              <img src={rightArrow} alt="left" />
            </button>
          </div>
        </div>
        <Carousel />
      </div>
    </div>
  );
};

export default Destinations;
