import React, { useEffect, useState } from "react";
import { BsArrow90DegRight, BsArrowBarRight } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";

const OrderCard = ({
  date,
  from,
  to,
  deliveryStatus,
  paymentStatus,
  referenceNumber,
}) => {
  const [dBorder, setDBorder] = useState("");
  const [dBg, setDBg] = useState("");
  const [pBorder, setPBorder] = useState("");
  const [pBg, setPBg] = useState("");

  useEffect(() => {
    if (deliveryStatus === "Completed") {
      setDBorder("border-green-400");
      setDBg("bg-green-100");
    } else if (deliveryStatus === "Shipping") {
      setDBorder("border-yellow-400");
      setDBg("bg-yellow-100");
    } else {
      setDBorder("border-red-400");
      setDBg("bg-red-100");
    }
  }, [deliveryStatus]);

  useEffect(() => {
    if (paymentStatus === "Completed") {
      setPBorder("border-green-400");
      setPBg("bg-green-100");
    } else if (paymentStatus === "Pending") {
      setPBorder("border-yellow-400");
      setPBg("bg-yellow-100");
    } else {
      setPBorder("border-red-400");
      setPBg("bg-red-100");
    }
  }, [paymentStatus]);
  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 lg:p-8 flex-col flex gap-4">
      <div className="flex  sm:flex-row justify-between items-center">
        <div className="text-gray-500 font-medium">Order Placed : {date}</div>
        <div className="text-gray-400 text-xs font-light">
          ref : {referenceNumber}
        </div>
      </div>
      <div className="text-gray-900 flex items-center justify-center text-xl font-mdeium">
        {`${from}`} <GoArrowRight className="m-2" /> {`${to}`}
      </div>
      <div className="flex justify-between text-sm">
        <div className="flex justify-center items-center gap-1 ">
          Status : {" "}
          <div className={`p-2 ${dBorder} ${dBg} rounded-md border-[1px]`}>
            {deliveryStatus}{" "}
          </div>
        </div>
        <div className="flex justify-center items-center gap-1 ">
          Payment : {" "}
          <div className={`p-2 ${pBorder} ${pBg} rounded-md border-[1px]`}>
            {paymentStatus}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
