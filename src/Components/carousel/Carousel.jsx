import React from "react";
import Slider from "react-slick";
import city1 from "../../assets/Destinations/city1.svg";
import city2 from "../../assets/Destinations/city2.svg";
import city3 from "../../assets/Destinations/city3.svg";
import arrow from "../../assets/Destinations/button-arrow.svg";
const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="w-[100%] mt-14 mb-2 ">
      <Slider {...settings}>
        <div className="flex flex-col mx-2">
          <img src={city1} alt="location" />

          <h1 className="text-[#23262F] font-semibold text-[24px] leading-[32px] mt-4 mb-2">
            London
          </h1>
          <p className="text-[#777E91] font-normal text-[12px] leading-[20px]">
            From: $26.00
          </p>
        </div>
        <div className="flex flex-col mx-2">
          <img src={city2} alt="location" />

          <h1 className="text-[#23262F] font-semibold text-[24px] leading-[32px] mt-4 mb-2">
            Beijing
          </h1>
          <p className="text-[#777E91] font-normal text-[12px] leading-[20px]">
            From: $26.00
          </p>
        </div>
        <div className="flex flex-col mx-2">
          <img src={city3} alt="location" />

          <h1 className="text-[#23262F] font-semibold text-[24px] leading-[32px] mt-4 mb-2">
            Barcelona
          </h1>
          <p className="text-[#777E91] font-normal text-[12px] leading-[20px]">
            From: $26.00
          </p>
        </div>
        <div className="flex flex-col mx-2">
          <img src={city1} alt="location" />

          <h1 className="text-[#23262F] font-semibold text-[24px] leading-[32px] mt-4 mb-2">
            London
          </h1>
          <p className="text-[#777E91] font-normal text-[12px] leading-[20px]">
            From: $26.00
          </p>
        </div>
        <div className="flex flex-col mx-2">
          <img src={city2} alt="location" />

          <h1 className="text-[#23262F] font-semibold text-[24px] leading-[32px] mt-4 mb-2">
            Beijing
          </h1>
          <p className="text-[#777E91] font-normal text-[12px] leading-[20px]">
            From: $26.00
          </p>
        </div>
        <div className="flex flex-col mx-2">
          <img src={city3} alt="location" />

          <h1 className="text-[#23262F] font-semibold text-[24px] leading-[32px] mt-4 mb-2">
            Barcelona
          </h1>
          <p className="text-[#777E91] font-normal text-[12px] leading-[20px] ">
            From: $26.00
          </p>
        </div>
      </Slider>
      <button className="border-[2px] border-[#E6E8EC] rounded-[90px] items-center flex justify-center py-[12px] px-4 font-bold text-[16px] leading-[16px] font-dm my-8">
        Show more
        <img src={arrow} alt="exit" className="ml-4" />
      </button>
    </div>
  );
};

export default Carousel;
