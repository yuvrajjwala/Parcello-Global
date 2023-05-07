import React, { lazy, Suspense, useState } from "react";
import { CiBookmark, CiCircleInfo, CiDeliveryTruck } from "react-icons/ci";
import NewCardForm from "../Booking/NewCardForm";

export default function ReviewForm(state) {
  const prop = {
    rpostcode: "KT174JL",
    dpostcode: "NW8",
    img: "https://www.parcello.co.uk/main/uploads/logo/citysprint.png",
    price: 47.23,
    vat: 5,
  };
  
  const rAddress = state.rAddress
  const dAddress = state.dAddress
  const additional = state.additional
  const data = state.data
  // const rAddress = {
  //   rPostcode: "KT174JL",
  //   rName: "Debabrata Batabyal",
  //   rEmail: "dbatabyal201@gmail.com",
  //   rContact: "6295652894",
  //   rAddress: "Srinagar Pally 9/1 Rabindra Sarani",
  //   rTown: "Durgapur",
  //   rCounty: "West Bengal",
  //   rCountry: "United Kingdom",
  // };

  // const dAddress = {
  //   dPostcode: "NW8",
  //   dName: "Debabrata Batabyal",
  //   dEmail: "dbatabyal201@gmail.com",
  //   dContact: "6295652894",
  //   dAddress: "Srinagar Pally 9/1 Rabindra Sarani",
  //   dTown: "Durgapur",
  //   dCounty: "West Bengal",
  //   dCountry: "United Kingdom",
  // };


  // const additional = {
  //   cDate: "12-04-2023",
  //   pContent: "Content",
  //   extendedLiability: "0",
  //   notes: "Customer Notes",
  // };

  function handleSubmit(event) {
    event.preventDefault();
  }



  return (
    <Suspense fallback={<div></div>}>
      <form
        className=" text-sm grid grid-cols-3 gap-4 max-w-7xl m-auto px-20 my-5 sm:px-5 md:grid-cols-1"
        onSubmit={handleSubmit}
      >
        <div className="justify-center col-span-2  md:col-span-1 ">
          <h1 className=" text-2xl font-bold">Review Order</h1>
          <div className="mt-5 gap-5 grid grid-cols-2 md:grid-cols-1">
            <div className="mx-auto w-full formBg p-4">
              <h2 className="text-lg font-medium">Sender's Address</h2>
              <div className="my-4 w-full">
                <label
                  htmlFor="rPostcode"
                  className="block font-medium text-gray-700  mb-2"
                >
                  Postcode:
                </label>
                <input
                  type="text"
                  id="rPostcode"
                  name="rPostcode"
                  className="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  placeholder="Enter postcode"
                  readOnly="readonly"
                  value={rAddress.rPostcode}
                  
                />
              </div>
              <div className="my-4 w-full">
                <label
                  htmlFor="rName"
                  className="block font-medium text-gray-700  mb-2"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="rName"
                  name="rName"
                  className="appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight"
                  placeholder="Enter Name"
                  value={rAddress.rName}
                  readOnly="readonly"
                  
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="rEmail"
                  className="block font-medium text-gray-700  mb-2"
                >
                  Email:
                </label>
                <input
                  type="text"
                  id="rEmail"
                  name="rEmail"
                  className="appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight"
                  placeholder="Enter Email"
                  value={rAddress.rEmail}
                  readOnly="readonly"
                  
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="rContact"
                  className="block font-medium text-gray-700  mb-2 "
                >
                  Contact Number:
                </label>
                <input
                  type="text"
                  id="rContact"
                  name="rContact"
                  className="appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight"
                  placeholder="Enter Contact Number"
                  value={rAddress.rContact}
                  readOnly="readonly"
                  
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="rAddress"
                  className="block font-medium text-gray-700  mb-2 "
                >
                  Address:
                </label>
                <input
                  type="text"
                  id="rAddress"
                  name="rAddress"
                  className="appearance-none border   w-full py-2 px-3 text-gray-700 leading-tight"
                  placeholder="Enter Address"
                  value={rAddress.rAddress}
                  readOnly="readonly"
                  
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="rTown"
                  className="block font-medium text-gray-700  mb-2 "
                >
                  Town:
                </label>
                <input
                  type="text"
                  id="rTown"
                  name="rTown"
                  className="appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight"
                  placeholder="Enter Town"
                  value={rAddress.rTown}
                  readOnly="readonly"
                  
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="rCounty"
                  className="block font-medium text-gray-700  mb-2 "
                >
                  County:
                </label>
                <input
                  type="text"
                  id="rCounty"
                  name="rCounty"
                  className="appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight"
                  placeholder="Enter County"
                  value={rAddress.rCounty}
                  readOnly="readonly"
                  
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="rCountry"
                  className="block font-medium text-gray-700  mb-2 "
                >
                  Country:
                </label>
                <input
                  type="text"
                  id="rCountry"
                  name="rCountry"
                  className="appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight"
                  placeholder="Enter Country"
                  value={rAddress.rCountry}
                  readOnly="readonly"
                  
                />
              </div>
            </div>
            <div className="mx-auto w-full formBg p-4">
              <h2 className="text-lg font-medium ">Reciever's Address</h2>
              <div className="my-4 w-full">
                <label
                  htmlFor="dPostcode"
                  className="block font-medium text-gray-700  mb-2 "
                >
                  Postcode:
                </label>
                <input
                  type="text"
                  id="dPostcode"
                  name="dPostcode"
                  className="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  placeholder="Enter postcode"
                  readOnly="readonly"
                  value={dAddress.dPostcode}
                  
                />
              </div>
              <div className="my-4 w-full">
                <label
                  htmlFor="dName"
                  className="block font-medium text-gray-700  mb-2 "
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="dName"
                  name="dName"
                  className="appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight"
                  placeholder="Enter Name"
                  value={dAddress.dName}
                  readOnly="readonly"
                  
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="dEmail"
                  className="block font-medium text-gray-700  mb-2 "
                >
                  Email:
                </label>
                <input
                  type="text"
                  id="dEmail"
                  name="dEmail"
                  className="appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight"
                  placeholder="Enter Email"
                  value={dAddress.dEmail}
                  readOnly="readonly"
                  
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="dContact"
                  className="block font-medium text-gray-700  mb-2 "
                >
                  Contact Number:
                </label>
                <input
                  type="text"
                  id="dContact"
                  name="dContact"
                  className="appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight"
                  placeholder="Enter Contact Number"
                  value={dAddress.dContact}
                  readOnly="readonly"
                  
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="dAddress"
                  className="block font-medium text-gray-700  mb-2 "
                >
                  Address:
                </label>
                <input
                  type="text"
                  id="dAddress"
                  name="dAddress"
                  className="appearance-none border   w-full py-2 px-3 text-gray-700 leading-tight"
                  placeholder="Enter Address"
                  value={dAddress.dAddress}
                  readOnly="readonly"
                  
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="dTown"
                  className="block font-medium text-gray-700  mb-2 "
                >
                  Town:
                </label>
                <input
                  type="text"
                  id="dTown"
                  name="dTown"
                  className="appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight"
                  placeholder="Enter Town"
                  value={dAddress.dTown}
                  readOnly="readonly"
                  
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="dCounty"
                  className="block font-medium text-gray-700  mb-2 "
                >
                  County:
                </label>
                <input
                  type="text"
                  id="dCounty"
                  name="dCounty"
                  className="appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight"
                  placeholder="Enter County"
                  value={dAddress.dCounty}
                  readOnly="readonly"
                  
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="dCountry"
                  className="block font-medium text-gray-700  mb-2 "
                >
                  Country:
                </label>
                <input
                  type="text"
                  id="dCountry"
                  name="dCountry"
                  className="appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight"
                  placeholder="Enter Country"
                  value={dAddress.dCountry}
                  readOnly="readonly"
                  
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:order-first">
          <h1 className=" text-2xl font-bold">Tracked & Signed for</h1>
          {/* <div className="flex flex-col w-full mt-5 rounded-md text-left justify-center">
            <div className="flex px-5 py-2 rounded-md bg-teal-700 items-center gap-5">
              <div className=" h-16 w-16 rounded-full bg-white">
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "500px",
                  }}
                  src={prop.img}
                  alt=""
                />
              </div>
              <div className="text-white flex flex-col">
                <h2 className="text-lg font-semibold">CitySprint</h2>
                <p>Same Day Delivery (Small Van)</p>
              </div>
            </div>
            <div className="border-2 p-5 rounded-md flex flex-col gap-5">
              <span className=" text-2xl font-bold text-sky-600">
                ${prop.price}
              </span>
              <span className="text-lg">${prop.price + prop.vat} inc. VAT</span>
            </div>
            <div className="text-4xl border-2 rounded-md flex  text-sky-600">
              <div className="p-2 flex gap-1 items-center cursor-pointer hover:bg-sky-200">
                <CiDeliveryTruck />
                <span className=" text-xs">Collection Service</span>
              </div>
              <div className="p-2 flex gap-1 items-center cursor-pointer  hover:bg-sky-200">
                <CiBookmark />
                <span className=" text-xs ">Print </span>
              </div>
              <div className="p-2 flex gap-1 items-center cursor-pointer  hover:bg-sky-200">
                <CiCircleInfo />
                <span className=" text-xs">More Info</span>
              </div>
            </div>
          </div> */}
          <NewCardForm data = {data}/>
          <button
          className="p-5 mt-5 m-auto w-64 font-medium text-white rounded-3xl bg-green-400 hover:shadow-lg hover:shadow-green-300"
          type="submit"
        >
          Confirm and Pay
        </button>
        </div>
        
       
      </form>
    </Suspense>
  );
}
