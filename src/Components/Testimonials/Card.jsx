import React from "react";
import star from "../../assets/Testimonials/star.svg";
import "./card.css";
const Card = ({ img, name, organization }) => {
  return (
    <div className="relative flex flex-col bg-white card-shadow rounded-[20px] mx-4 mt-28 mb-8 p-4 items-center text-center max-w-[352px]">
      {/* <div className="w-[120px] h-[120px] rounded-full absolute"> */}
      <img
        src={img}
        alt="profile"
        className="w-[120px] h-[120px] absolute top-[-25%] left-[35%]"
      />

      <h1 className="mt-14 text-[#111029] font-semibold text-[24px] leading-[32px]">
        {name}
      </h1>
      <span className="text-[#ABAFC7] text-[16px] leading-[24px] font-medium my-2">
        {organization}
      </span>

      <p className="my-4 font-normal text-[18px ] leading-[32px] text-[#70798B]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
      <div className="flex my-4">
        <img src={star} alt="star" className="mx-1" />
        <img src={star} alt="star" className="mx-1" />
        <img src={star} alt="star" className="mx-1" />
        <img src={star} alt="star" className="mx-1" />
        <img src={star} alt="star" className="mx-1" />
      </div>
    </div>
  );
};

export default Card;
