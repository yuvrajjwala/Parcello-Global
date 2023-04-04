import React, { lazy, Suspense, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import ReviewForm from "../../Components/ReviewForm/ReviewForm";
import { useLocation } from "react-router-dom";


export default function Booking() {
  const { state } = useLocation();
  console.log(state)
  return (
    <Suspense fallback={<div>Loading</div>}>
      <div className="flex flex-col gap-5 mx-5">
        <Navbar />
        <ProgressBar step={2} />
        <ReviewForm rAddress = {state.rAddress} dAddress = {state.dAddress} additional = {state.additional} />
      </div>
    </Suspense>
  );
}
