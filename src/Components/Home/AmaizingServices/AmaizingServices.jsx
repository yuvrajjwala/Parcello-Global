import React from "react";
import { Suspense } from "react";
import { BsFillEmojiSmileFill, BsGiftFill, BsLightningChargeFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function AmaizingServices() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <div className="flex flex-col items-center justify-center p-32 gap-20 sm:p-6 mt-12">
        <div className="flex flex-col items-center p-0 gap-8">
          <div className="flex flex-col gap-2 p-0 items-center">
            <span className=" font-medium text-sm text-slate-500 uppercase text-center">
              A creative agency that lead and inspire{" "}
            </span>
            <h1 className=" font-extrabold text-5xl  text-center whitespace-nowrap sm:text-4xl">Amazing Services</h1>
          </div>
          <Link to="/contact" className="bg-[#02878A] text-white px-6 py-4 rounded-[90px]">
            Contact Us
          </Link>
        </div>
        <div className="flex flex-row items-center p-0 gap-6 md:flex-col">
          {/* card1 */}
          <div className="flex flex-col items-start bg-[#F4F5F6] rounded-3xl px-16 py-8 gap-8 sm:px-8 sm:justify-center">
            <span className=" text-4xl text-[#fa925a]">
              <BsFillEmojiSmileFill />
            </span>
            <div className="flex flex-col items-start gap-4">
              <h3 className=" font-semibold">Very Affordable</h3>
              <span className="text-[#777E91]">
              We offer discounted parcel delivery services that enable our customers to compare, book, and send parcels.
              </span>
            </div>
          </div>
          {/* card1 */}

          {/* card2 */}
          <div className="flex flex-col items-start bg-[#F4F5F6] rounded-3xl px-16 py-8 gap-8 sm:px-8 sm:justify-center">
            <span className=" text-4xl text-[#8BC5E5]">
              <BsLightningChargeFill />
            </span>
            <div className="flex flex-col items-start gap-4">
              <h3 className=" font-semibold">24/7 customer service</h3>
              <span className="text-[#777E91]">
              We realize ideas from simple to complex, everything becomes easy to use and reach the most potential customers.
              </span>
            </div>
          </div>
          {/* card2 */}

          {/* card3 */}
          <div className="flex flex-col items-start bg-[#F4F5F6] rounded-3xl px-16 py-8 gap-8 sm:px-8 sm:justify-center">
            <span className=" text-4xl text-[#58C27D]">
              <BsGiftFill />
            </span>
            <div className="flex flex-col items-start gap-4">
              <h3 className=" font-semibold">Best Couriers</h3>
              <span className="text-[#777E91]">
                Parcello has major accounts with the world’s largest and most trusted courier companies.
              </span>
            </div>
          </div>
          {/* card3 */}
        </div>
      </div>
    </Suspense>
  );
}

export default AmaizingServices;
