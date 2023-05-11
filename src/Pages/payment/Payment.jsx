import React from "react";
import NewCard from "../../Components/Result/NewCard";
import { useLocation } from "react-router-dom";
import NewCardForm from "../../Components/Booking/NewCardForm";
const Payment = () => {
  const {state} = useLocation()
  console.log(state)
  return (
    <div className="w-[80%] m-auto">
      <div className="p-4">
        <NewCardForm data={state} />
      </div>
    </div>
  );
};

export default Payment;
