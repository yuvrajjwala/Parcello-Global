import React, { lazy, Suspense, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import BookingForm from "../../Components/Booking/BookingForm";
import Step2 from "../../Components/Booking/Step2";
import Step3 from "../../Components/Booking/Step3";
import Step4 from "../../Components/Booking/Step4";

const ProgressBar = ({ step }) => {
  const steps = [
    "Book your Delivery",
    "Review Order",
    "Confirm Order",
    "Payment",
  ];
  const progress = ((step - 1) / (steps.length - 1)) * 100;

  return (
    <div className="m-auto px-5 rounded-full">
      <div className="flex gap-8 justify-between w-full">
        {steps.map((label, index) => (
          <div
            key={index}
            className={`text-xs font-bold flex gap-3 items-center text-center  ${
              index + 1 === step ? " text-teal-600" : "text-gray-300"
            }`}
          >
            <div
              className={`rounded-full text-center justify-center p-3 w-10 h-10 ${
                index + 1 <= step
                  ? " bg-teal-600 text-white"
                  : "bg-gray-300 text-gray-400"
              }`}
            >
              {index + 1}
            </div>
            {label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Booking() {
  const [step, setStep] = useState(1);

  const renderSteps = () => {
    switch (step) {
      case 1:
        return <BookingForm step={step} setStep={setStep} />;
      case 2:
        return <Step2 step={step} setStep={setStep} />;
      case 3:
        return <Step3 step={step} setStep={setStep} />;
      case 4:
        return <Step4 step={step} setStep={setStep} />;
      default:
        return null;
    }
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  return (
    <Suspense fallback={<div></div>}>
      <div className="flex flex-col gap-5">
        <Navbar />
        <ProgressBar step={step} />
        <div className="flex gap-2 m-auto">
          {step > 1 && <button className=" bg-teal-600 text-white p-2 rounded-md text-center" onClick={handlePrev}>Previous</button>}
          {step < 4 && <button className=" bg-teal-600 text-white p-2 rounded-md text-center" onClick={handleNext}>Next</button>}
        </div>
        {renderSteps()}
      </div>
    </Suspense>
  );
}
