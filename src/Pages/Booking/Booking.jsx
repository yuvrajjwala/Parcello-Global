import React, { lazy, Suspense, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import BookingForm from "../../Components/Booking/BookingForm";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import { useLocation } from "react-router-dom";


export default function Booking() {

  const {state} = useLocation()

  return (
    <Suspense fallback={<div>Loading</div>}>
      <Navbar />
      <div className="flex flex-col gap-5 mx-5">
        <ProgressBar step={1} />
        <BookingForm state = {state} />
      </div>
    </Suspense>
  );
}
