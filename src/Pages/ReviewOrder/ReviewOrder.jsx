import React, { lazy, Suspense, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import ReviewForm from "../../Components/ReviewForm/ReviewForm";
import { Link, useLocation } from "react-router-dom";


export default function Booking() {
  const { state } = useLocation();
  console.log(state)
  return (
    <Suspense fallback={<div>Loading</div>}>
       <Navbar />
      <div className="flex flex-col gap-3 mx-5 items-center">
        <ProgressBar step={2} />
        <Link to ="/booking" ><button className="m-auto text-white p-2 bg-teal-600 rounded-md">Go Back</button></Link>
        <ReviewForm rAddress = {state.rAddress} dAddress = {state.dAddress} additional = {state.additional} />
      </div>
    </Suspense>
  );
}
