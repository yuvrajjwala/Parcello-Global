import React, { Suspense } from "react";
import Vector from "../../../assets/Home/Vector.svg";
import person from "../../../assets/Home/person1.png";
import "./HeroSection.css"
import HeroForm from "./HeroForm/HeroForm";
function HeroSectionNew() {
  return (
    <Suspense fallback={<div>lOADING</div>}>
      <div className="flex flex-col justify-center items-center px-40 py-20 md:px-20 sm:px-5 relative lg:h-fit   h-screen bg-[#008185] overflow-hidden">
        <div className="flex lg:flex-col flex-row justify-center items-center w-full">
          <h1 className=" font-dm lg:text-center font-bold text-6xl text-white z-10 flex-wrap lg:text-5xl sm:text-4xl">
            Compare and book <span className=" text-[#FFB526]"> low cost</span>{" "}
            shipping services
          </h1>
          <div className="relative flex flex-row items-center p-0 justify-center max-w-[50%] sm:max-w-none">
            <img
              src={Vector}
              className="  absolute rotate-[-19.36deg] "
              alt=""
            />
            <img
              src={person}
              className="z-10 "
              alt=""
            />
          </div>
        </div>
        <HeroForm/>
      </div>
    </Suspense>
  );
}

export default HeroSectionNew;
