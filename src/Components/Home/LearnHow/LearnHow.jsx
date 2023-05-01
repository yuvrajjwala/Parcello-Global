import React from "react";
import { Suspense } from "react";
import learn1 from "../../../assets/Home/learn1.png";
import learn2 from "../../../assets/Home/learn2.png";
import learn3 from "../../../assets/Home/learn3.png";
import { ImSpinner } from "react-icons/im";
function LearnHow() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <div className="flex flex-col justify-center items-center pt-0 px-40 pb-32 gap-3 md:px-10">
        <div className="flex flex-col items-center p-0 gap-16">
          <div className="flex flex-col items-center p-0 gap-3 max-w-[60%] lg:max-w-full">
            <h1 className=" font-bold text-5xl text-center   sm:text-4xl">
              Learn how we help our customers achieve their goals
            </h1>
            <span className="  text-center text-[#777E90] text-xl sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elite Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </span>
          </div>
          <div className="flex  flex-row items-start p-0 gap-8 lg:flex-col lg:w-[352px]">
            {/* card1 */}
            <div className="flex flex-col items-center p-0 gap-6 ">
              <div className="w-[352px] h-[480px]">
                <img
                  src={learn1}
                  className=" w-fill h-full object-cover"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center p-0 gap-2">
                <h3 className=" text-2xl text-center text-[#23262F]">
                  Warehousing and Distribution for Expansion
                </h3>
                <span className="text-[#777E90] text-sm text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elite Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </span>
              </div>
            </div>
            {/* card1 */}

            {/* card1 */}
            <div className="flex flex-col items-center p-0 gap-6">
              <div className="w-[352px] h-[480px]">
                <img
                  src={learn2}
                  className=" w-fill h-full object-cover"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center p-0 gap-2">
                <h3 className=" text-2xl text-center text-[#23262F]">
                  Rail Transport Helps Shorten Transit Times
                </h3>
                <span className="text-[#777E90] text-sm text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elite Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </span>
              </div>
            </div>
            {/* card1 */}

            {/* card1 */}
            <div className="flex flex-col items-center p-0 gap-6">
              <div className="w-[352px] h-[480px]">
                <img
                  src={learn3}
                  className=" w-fill h-full object-cover"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center p-0 gap-2">
                <h3 className=" text-2xl text-center text-[#23262F]">
                  Trusted Loaistics Partner and Mutual Core Values
                </h3>
                <span className="text-[#777E90] text-sm text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elite Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </span>
              </div>
            </div>
            {/* card1 */}
          </div>
          <button className="flex gap-3 py-3 px-4 rounded-[90px] text-center items-center justify-center border-2 border-[#E6E8EC]">
            <ImSpinner/>
            Load More
            </button>
        </div>
      </div>
    </Suspense>
  );
}

export default LearnHow;
