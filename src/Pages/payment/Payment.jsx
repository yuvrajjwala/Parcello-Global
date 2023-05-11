import { React, useState } from "react";
import NewCard from "../../Components/Result/NewCard";
import { useLocation, useNavigate } from "react-router-dom";
import PaymentCard from "../../Components/Payment/PaymentCard";
import NewCardForm from "../../Components/Booking/NewCardForm";
import Navbar from "../../Components/Navbar/Navbar";
import axios from "../../api/axios";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";

const CHECKOUT_CONFIG_URL = "api/payments/config/";
const CHECKOUT_SESSION_URL = "api/payments/createcheckoutsession/";
const Payment = () => {
  const { state } = useLocation();
  const [publicKey, setPublicKey] = useState("");
  const navigate = useNavigate();

  console.log(state);
  const handleCheckout = async (event) => {
    event.preventDefault();

    // if button enabled with JS hack
    // const v1 = EMAIL_REGEX.test(userEmail);
    // const v2 = PWD_REGEX.test(password);
    // if (!v1 || !v2) {
    //   setErrMsg("Invalid Entry");
    //   error("");
    //   return;
    // }
    try {
      const response = await axios.get(CHECKOUT_CONFIG_URL);
      setPublicKey(response?.data?.publicKey);

      const paymentResponse = await axios.get(CHECKOUT_SESSION_URL + state.id);

      const payment_url = paymentResponse?.data?.url;
      console.log(payment_url);
      // navigate("/stripe", { state: { url: payment_url } });
      window.location.href = payment_url;
    } catch (err) {
      console.log(err);
      // if (err.response?.status === 400) {
      //   toastWarn();
      // }
    }
  };
  return (
    <div className="w-[80%] m-auto">
      <Navbar />
      <div className="text-black text-[19px] font-semibold p-4">
      <div className="mb-10">
      <ProgressBar step={3} />
      </div>
        <h1 className="text-2lg text-sky-600">Confirm your Payment</h1>
      </div>
      <div className=" h-[1px]  mx-4 my-4 w-[100%]  border-[1px]"></div>
      <div className="p-4">
        <PaymentCard data={state} />
      </div>
      <div className=" h-[1px]  mx-4 my-4 w-[100%]  border-[1px]"></div>
      <div className="p-4">
        <div className="flex justify-between">
          <h1 className="text-[19px] font-semibold ">Total :</h1>
          <p className="text-[19px] font-semibold"> &euro; {state.price}</p>
        </div>
        <div className="w-[100%] p-4 pr-0 flex justify-end">
          <button
            className="bg-green-600 px-4 py-4 rounded-[5px] hover:scale-110 transition ease-in-out duration-300 font-medium text-white w-[40%]"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
