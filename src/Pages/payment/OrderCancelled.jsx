import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import OrderFailed from "../../assets/Order/OrderFailed.png";

import { Link } from "react-router-dom";
const OrderCancelled = () => {
  return (
    <>
      <Navbar />
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block mx-auto mb-6">
              <img src={OrderFailed} className="w-[250px]" />
            </span>

            <h3 className="text-2xl  text-red-600 mb-5">
              Order is not Completed
            </h3>
            {/* <h6 className=" text-yellow-600 mb-5">Order ID: {id}</h6> */}
            <p className=" mb-12">
              If you are facing any problem please contact us at
              contact@parcello.co.uk
            </p>

            <a
              className="group relative inline-block h-12 w-full xs:w-60 bg-blueGray-900 rounded-md"
              href="#"
            >
              <div className="flex justify-evenly">
                <div className=" w-5/12  h-[40px]  group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                  <Link
                    to="/"
                    className="flex h-full w-full items-center justify-center bg-yellow-600  rounded-md"
                  >
                    <span className=" text-white">Home</span>
                  </Link>
                </div>
                <div className=" w-5/12 h-[40px] group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                  <Link
                    to="/contact"
                    className="flex h-full w-full items-center justify-center bg-green-600 rounded-md"
                  >
                    <span className=" text-white">Contact us</span>
                  </Link>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderCancelled;
