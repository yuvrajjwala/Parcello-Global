import React from "react";
import { Suspense, lazy } from "react";
import img1 from "../../assets/Testimonials/img1.svg";
import img3 from "../../assets/Testimonials/img3.svg";

const Card = lazy(() => import("./Card.jsx"));
const Testimonialss = () => {
  return (
    <div className="bg-[#F9F9FD] w-[100%] ">
      <div className="w-[80%] m-auto flex flex-col items-center">
        <h1 className="text-[#FF2D59] text-[20px] font-semibold leading-[28px] mt-20">
          Testimonials
        </h1>
        <span className="text-[#111029] text-[42px] font-semibold leading-[56px] tracking-[-0.1px] text-center mt-4">
          Some testimonials from our customers
        </span>

        <div className="flex lg:flex-col items-center w-[100%] justify-between">
          <Suspense fallback={<div></div>}>
            <Card
              img={img1}
              name={"Jenny Jen"}
              organization={"London"}
            />
            <Card
              img={img1}
              name={"Buddy Moore"}
              organization={"Enfield"}
            />
            <Card
              img={img3}
              name={"Brighton"}
              organization={"Microsoft inc."}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Testimonialss;
