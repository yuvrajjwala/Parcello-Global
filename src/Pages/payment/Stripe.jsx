import React from "react";
import { useLocation } from "react-router-dom";

const Stripe = () => {
  const location = useLocation();
  console.log(location.state.url);
  return (
    <div>
      Stripe
      <iframe src={location.state.url} frameborder="0" className="w-[100%] h-[100vh]"></iframe>
    </div>
  );
};

export default Stripe;
