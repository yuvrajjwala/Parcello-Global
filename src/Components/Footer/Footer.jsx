import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Navbar/parcello.png";

export const Footer = () => {
  return (
    <>
      <footer className="relative bg-[#ffffff] pt-20 mt-20 pb-6">
        <div className=" mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left justify-evenly">
            <div className=" lg:w-6/12 px-4">
              <img className="h-[80px]" src={logo} />
              <h5 className="text-sm mt-0 mb-2 text-blueGray-600">
                We offer delivery services using the world’s best couriers.
              </h5>
            </div>
            <div className=" lg:w-6/12 px-4 ">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4">
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.parcello.co.uk/terms-and-conditions/"
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.parcello.co.uk/privacy-policy/"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <Link to="/contact"
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        
                      >
                        Contact Us 
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright <span id="get-current-year">2023</span> © Virtual Call Solutions Limited trading as Parcello | Company number :09946078 | VAT number : 265526685
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
