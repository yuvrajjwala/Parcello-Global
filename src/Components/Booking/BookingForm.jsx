import React, { lazy, Suspense, useState } from "react";
import { CiBookmark, CiCircleInfo, CiDeliveryTruck } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import NewCardForm from "./NewCardForm";

export default function BookingForm(state) {
  const navigate = useNavigate();
  state = state.state;
  const [rAddress, setRaddress] = useState({
    rPostcode: "",
    rName: "",
    rEmail: "",
    rContact: "",
    rAddress: "",
    rTown: "",
    rCounty: "",
    rCountry: state.from,
  });

  const [dAddress, setDaddress] = useState({
    dPostcode: "",
    dName: "",
    dEmail: "",
    dContact: "",
    dAddress: "",
    dTown: "",
    dCounty: "",
    dCountry: state.to,
  });

  const [additional, setAdditional] = useState({
    cDate: "",
    pContent: "",
    contentValue: "",
    notes: "",
  });
  const [liability, setLiability] = useState("I want to opt-out thus declaring my item of negligible value")

  function handleSubmit(event) {
    event.preventDefault();
    additional.liability = liability
    additional.extendedLiability = liability
    navigate("/reviewOrder", {
      state: {
        rAddress,
        dAddress,
        additional,
        state,
      },
    });
  }

  const [liabilityOptions, setLiabilityOptions] = useState({
    liability: [
      "I want to opt-out thus declaring my item of negligible value",
      "+0.20 for up to £20 of extended liability",
      "+1.80 for up to £50 of extended liability",
      "+3.30 for up to £75 of extended liability",
      "+4.80 for up to £100 of extended liability",
      "+6.30 for up to £125 of extended liability",
      "+7.80 for up to £150 of extended liability",
      "+9.30 for up to £175 of extended liability",
      "+10.80 for up to £200 of extended liability",
      "+12.30 for up to £225 of extended liability",
      "+13.80 for up to £250 of extended liability",
      "+15.30 for up to £275 of extended liability",
    ],
  });

  const handleReturnChange = (e) => {
    setRaddress({ ...rAddress, [e.target.name]: e.target.value });
  };

  const handleDeliveryChange = (e) => {
    setDaddress({ ...dAddress, [e.target.name]: e.target.value });
  };

  const handleAdditionalChange = (e) => {
    setAdditional({ ...additional, [e.target.name]: e.target.value });
  };

  return (
    <Suspense fallback={<div></div>}>
      <form
        className=" text-sm grid grid-cols-3 gap-4 max-w-7xl m-auto px-20 my-5 sm:px-5 md:grid-cols-1"
        onSubmit={handleSubmit}
      >
        <div className="justify-center col-span-2  md:col-span-1 ">
          <h1 className=" text-2xl font-bold">Book Your Delivery</h1>
          <div className="mt-5 gap-5 grid grid-cols-2 md:grid-cols-1">
            <div className="mx-auto w-full formBg p-4">
              <h2 className="text-lg font-medium required">Return Address</h2>
              <div className="my-4 w-full">
                <label
                  htmlFor="rPostcode"
                  className="block font-medium text-gray-700  mb-2 required"
                >
                  Postcode:
                </label>
                <input
                  type="text"
                  id="rPostcode"
                  name="rPostcode"
                  className="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  placeholder="Enter postcode"
                  value={rAddress.rPostcode}
                  onChange={handleReturnChange}
                  required
                />
              </div>
              <div className=" my-4 w-full">
                <label
                  htmlFor="rName"
                  className="block font-medium text-gray-700  mb-2 required"
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
                  onChange={handleReturnChange}
                  required
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="rEmail"
                  className="block font-medium text-gray-700  mb-2 required"
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
                  onChange={handleReturnChange}
                  required
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="rContact"
                  className="block font-medium text-gray-700  mb-2 required"
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
                  onChange={handleReturnChange}
                  required
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="rAddress"
                  className="block font-medium text-gray-700  mb-2 required"
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
                  onChange={handleReturnChange}
                  required
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="rTown"
                  className="block font-medium text-gray-700  mb-2 required"
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
                  onChange={handleReturnChange}
                  required
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="rCounty"
                  className="block font-medium text-gray-700  mb-2 required"
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
                  onChange={handleReturnChange}
                  required
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="rCountry"
                  className="block font-medium text-gray-700  mb-2 required"
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
                  onChange={handleReturnChange}
                  required
                  readOnly
                />
              </div>
            </div>
            <div className="mx-auto w-full formBg p-4">
              <h2 className="text-lg font-medium required">Delivery Address</h2>
              <div className="my-4 w-full">
                <label
                  htmlFor="dPostcode"
                  className="block font-medium text-gray-700  mb-2 required"
                >
                  Postcode:
                </label>
                <input
                  type="text"
                  id="dPostcode"
                  name="dPostcode"
                  className="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  placeholder="Enter postcode"
                  onChange={handleDeliveryChange}
                  value={dAddress.dPostcode}
                  required
                />
              </div>
              <div className=" my-4 w-full">
                <label
                  htmlFor="dName"
                  className="block font-medium text-gray-700  mb-2 required"
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
                  onChange={handleDeliveryChange}
                  required
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="dEmail"
                  className="block font-medium text-gray-700  mb-2 required"
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
                  onChange={handleDeliveryChange}
                  required
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="dContact"
                  className="block font-medium text-gray-700  mb-2 required"
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
                  onChange={handleDeliveryChange}
                  required
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="dAddress"
                  className="block font-medium text-gray-700  mb-2 required"
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
                  onChange={handleDeliveryChange}
                  required
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="dTown"
                  className="block font-medium text-gray-700  mb-2 required"
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
                  onChange={handleDeliveryChange}
                  required
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="dCounty"
                  className="block font-medium text-gray-700  mb-2 required"
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
                  onChange={handleDeliveryChange}
                  required
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="dCountry"
                  className="block font-medium text-gray-700  mb-2 required"
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
                  onChange={handleDeliveryChange}
                  required
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:order-first">
          <h1 className=" text-2xl font-bold">Service Booked</h1>
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
                <span className=" text-xs ">Print Required</span>
              </div>
              <div className="p-2 flex gap-1 items-center cursor-pointer  hover:bg-sky-200">
                <CiCircleInfo />
                <span className=" text-xs">More Info</span>
              </div>
            </div>
            <button className="p-5 m-auto mt-4 w-72   font-medium text-white rounded-3xl bg-orange-400 hover:shadow-lg hover:shadow-orange-300">
              Change this Service
            </button>
          </div> */}
          <NewCardForm data={state} />
          <button className="p-5 m-auto mt-4 w-72   font-medium text-white rounded-3xl bg-orange-400 hover:shadow-lg hover:shadow-orange-300">
            Change this Service
          </button>
        </div>
        <div className="col-span-2 flex justify-center md:col-span-1 ">
          <div className="mx-auto w-full formBg p-4">
            <h2 className="text-lg font-medium required">
              Additional Information
            </h2>
            <div className="my-4 w-full">
              <label
                htmlFor="cDate"
                className="block font-medium text-gray-700  mb-2 required"
              >
                Collection Date:
              </label>
              <input
                type="date"
                id="cDate"
                name="cDate"
                className="appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight"
                placeholder="Enter Collection Date"
                value={additional.cDate}
                onChange={handleAdditionalChange}
                required
                min={new Date().toISOString().split("T")[0]}
              />
            </div>
            <div className="my-4 w-full">
              <label
                htmlFor="pContent"
                className="block font-medium text-gray-700  mb-2 required"
              >
                Package Content:
              </label>
              <input
                type="text"
                id="pContent"
                name="pContent"
                className="appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight"
                placeholder="Enter Package Content"
                value={additional.pContent}
                onChange={handleAdditionalChange}
                required
              />
            </div>
            {/* <div className="my-4 w-full">
              <label
                htmlFor="liability"
                className="block font-medium text-gray-700  mb-2 required"
              >
                Extended Liability:
              </label>
              <input
                type="radio"
                name="liability"
                value={true}
                className="m-2"
                onChange={handleAdditionalChange}
                required
              />
              <label>
                I want to extend the liability for my parcel (subject to the
                restricted items list and Terms and Condition)
              </label>
              <br />
              <input
                type="radio"
                name="liability"
                value={false}
                className="m-2"
                onChange={handleAdditionalChange}
                required
              />
              <label>
                I want to opt-out thus declaring my item of negligible value
              </label>
            </div> */}
            <div className="my-4 w-full">
              <label
                htmlFor="contentValue"
                className="block font-medium text-gray-700  mb-2 required"
              >
                Value of Content:
              </label>
              <input
                type="number"
                id="contentValue"
                name="contentValue"
                className="appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight"
                placeholder="Enter Value of Content"
                value={additional.contentValue}
                onChange={handleAdditionalChange}
                required
              />
            </div>
            {1 && (
              <div className="my-4 w-full">
                <label
                  htmlFor="extendedLiability"
                  className="block font-medium text-gray-700  mb-2 required"
                >
                  Extended Liability (Max £1000 for this service):
                </label>
                <select
                    className="border-b-[1px] w-full p-2"
                    value={liability}
                    onChange={(e) => setLiability(e.target.value)}
                  >
                    {liabilityOptions.liability.map((item, index) => {
                      return <option value={item}>{item}</option>;
                    })}
                  </select>
              </div>
            )}

            <div className="my-4 w-full">
              <label
                htmlFor="notes"
                className="block font-medium text-gray-700  mb-2 optional"
              >
                Courier Notes:
              </label>
              <input
                type="text"
                id="notes"
                name="notes"
                className="appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight"
                placeholder="Notes for the driver delivering the Items"
                value={additional.notes}
                onChange={handleAdditionalChange}
              />
            </div>
          </div>
        </div>
        <div className="col-span-2 flex justify-center md:col-span-1">
          <div className=" font-medium inline-flex gap-3 flex-col mx-auto w-full formBg p-4">
            <h2 className="text-lg font-medium required">
              Additional Information
            </h2>
            <label htmlFor="toc" className=" inline-flex items-center">
              <input type="checkbox" className="m-3" required />
              <p>
                I agree to the{" "}
                <a
                  className=" text-blue-500"
                  href="https://www.parcello.co.uk/terms-and-conditions/"
                >
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a
                  className=" text-blue-500"
                  href="https://www.parcello.co.uk/privacy-policy/"
                >
                  Privacy Policy
                </a>{" "}
                and confirm that my shipment complies with the{" "}
                <a className=" text-blue-500" href="">
                  {" "}
                  Restricted items{" "}
                </a>
                list and{" "}
                <a className=" text-blue-500" href="">
                  {" "}
                  Packaging Guidelines
                </a>
                .
              </p>
            </label>
            <label htmlFor="dim" className=" inline-flex items-center">
              <input type="checkbox" className="m-3" required />I agree that if
              the dimensions and weight of my parcel(s) are incorrect,
              additional charges will be applied to my card based on information
              provided by the courier.
            </label>
            <label htmlFor="val" className=" inline-flex items-center">
              <input type="checkbox" className="m-3" required />I confirm that
              the value of goods that I have declared is correct.
            </label>
            <button
              className="p-5 w-64 font-medium text-white rounded-3xl bg-orange-400 hover:shadow-lg hover:shadow-orange-300"
              type="submit"
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </form>
    </Suspense>
  );
}
