import React, { Suspense } from "react";
import Vector from "../../../assets/Home/Vector.svg";
import person from "../../../assets/Home/person1.png";
import "./HeroSection.css"
import HeroForm from "./HeroForm/HeroForm";
function HeroSectionNew() {
  return (
    <Suspense fallback={<div>lOADING</div>}>
      <div className="flex flex-col justify-center items-center px-40 relative  max-h-5xl h-screen bg-[#008185] overflow-hidden">
        <div className="flex flex-row justify-center items-center w-full">
          <h1 className=" font-dm font-bold text-6xl text-white z-10 flex-wrap">
            Compare and book <span className=" text-[#FFB526]"> low cost</span>{" "}
            shipping services
          </h1>
          <div className="relative flex flex-row items-center p-0 justify-center w-full">
            <img
              src={Vector}
              className=" absolute w-[721.56px] h-[697.91px]  rotate-[-19.36deg] "
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
