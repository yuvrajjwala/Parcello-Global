import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import SuccessImage from "../../assets/Order/OrderSuccess.gif";

export const SuccessfullPayment = () => {
  return (
    <>
      <Navbar />
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block mx-auto mb-6">
              <img className='w-[250px]' src={SuccessImage} />
            </span>
            
            <h3 className="text-2xl  text-green-600 mb-5">
              Your order has been placed 
            </h3>
            <h6 className=" text-yellow-600 mb-5">
              Order ID: PID829 
            </h6>
            <p className=" mb-12">
              Thank you for choosing Parcello. Our courier partner will collect the parcel from your address on specified time.
            </p>
            
            <a
              className="group relative inline-block h-12 w-full xs:w-60 bg-blueGray-900 rounded-md"
              href="#"
            >
              <div className="flex justify-evenly">
              <div className=" w-5/12  h-[40px]  group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                <div className="flex h-full w-full items-center justify-center bg-green-600 rounded-md">
                  <span className=" text-white">
                    Home
                  </span>
                </div>
              </div>
              <div className=" w-5/12 h-[40px] group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                <div className="flex h-full w-full items-center justify-center bg-yellow-600 rounded-md">
                  <span className=" text-white">
                    Order Dashboard
                  </span>
                </div>
              </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
