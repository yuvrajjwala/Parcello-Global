import React from "react";
import { useState } from "react";
import { BsArrowDownCircle } from "react-icons/bs";

function Accordian({con , i}) {
  const [activeAccordian, setActiveAccoridan] = useState(true);
  return (
    <div
      className={` flex flex-col gap-6 items-start p-3 max-w-[546px]  transition-[max-height] duration-300 ease-in overflow-hidden  ${
        activeAccordian ? " max-h-20 " : "max-h-60"
      } `}
    >
      <button
        onClick={() => setActiveAccoridan(!activeAccordian)}
        className="flex justify-between items-center gap-6 border-b-2  border-slate-200 p-4 w-full"
      >
        <div className="flex gap-7 w-[80%]">
          <span className=" text-[#3B71FE] font-medium">{i + 1}</span>
          <span className="font-medium text-left ">{con.head}</span>
        </div>
        <BsArrowDownCircle className=" text-slate-500 text-xl" />
      </button>
      <div className=" text-sm text-slate-500 text-left">{con.content}</div>
    </div>
  );
}

export default Accordian;
