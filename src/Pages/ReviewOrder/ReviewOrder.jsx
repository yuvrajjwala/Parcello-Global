import React, { lazy, Suspense, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import ReviewForm from "../../Components/ReviewForm/ReviewForm";
import { Link, useLocation } from "react-router-dom";

export default function Booking() {
  const { state } = useLocation();
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Navbar />
      <div className="flex flex-col gap-3 mx-5 items-center">
        <ProgressBar step={2} />

        <ReviewForm
          rAddress={state.rAddress}
          dAddress={state.dAddress}
          additional={state.additional}
          data={state.state}
        />
      </div>
    </Suspense>
  );
}
