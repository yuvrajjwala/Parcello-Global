import React from "react";
import { Suspense, lazy } from "react";
import img1 from "../../assets/Testimonials/img1.svg";
import img2 from "../../assets/Testimonials/img2.jpg";
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
              img={img2}
              name={"Jenny Jen"}
              organization={"London"}
              text = {"Using the parcello has been a game-changer for our business. The streamlined process and multiple carrier options have saved us time and money. Highly recommended"}
            />
            <Card
              img={img1}
              name={"Buddy Moore"}
              organization={"Enfield"}
              text ={"I was impressed with the seamless parcel creation process and the ability to track my package in real-time. The customer support team was also responsive and helpful. Will definitely use this service again."}
            />
            <Card
              img={img3}
              name={"Brighton"}
              organization={"Microsoft inc."}
              text = {"The warehousing and distribution services provided by [Company Name] have been instrumental in our expansion efforts. Their regional presence and efficient order fulfillment have allowed us to serve our customers better and grow our business"}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Testimonialss;
