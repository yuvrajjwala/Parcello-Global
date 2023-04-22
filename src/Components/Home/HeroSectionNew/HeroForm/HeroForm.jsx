import React, { useState } from "react";
import "../HeroSection.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  HiLocationMarker,
  HiOutlineFastForward,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { CiLocationArrow1, CiLocationOn } from "react-icons/ci";
const apiKey = import.meta.env.VITE_API_KEY;

export default function HeroForm() {
  const navigate = useNavigate();
  const [type, setType] = useState("Domestic");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [fromZip, setFromZip] = useState("");
  const [toZip, setToZip] = useState("");
  const [selectedOption, setSelectedOption] = useState("India");

  function handleSelect(event) {
    setSelectedOption(event.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let currDist;
    try {
      const distanceRes = await axios.get(
        `https://maps.googleapis.com/maps/api/distancematrix/json?&origins=${
          fromZip + ",UK"
        }&destinations=${toZip + ",UK"}"&&units=imperial&key=${apiKey}`
      );

      currDist = Math.round(
        distanceRes.data.rows[0]?.elements[0]?.distance?.value / 1000 / 1.6
      );
    } catch (e) {}

    let body;
    if (type == "Domestic") {
      body = {
        service: "Domestic",
        from: type,
        to: to,
      };
    } else if (type == "International") {
      body = {
        service: "International",
        from: "United Kingdom",
        to: selectedOption,
      };
    } else if (type == "Same Day") {
      body = {
        service: "Same Day",
        dist: currDist,
      };
    } else {
      alert("error");
    }

    if (body) {
      console.log(body);
      navigate("/result", {
        state: {
          body,
        },
      });
    }
  };

  return (
    <form className="heroForm w-full" onSubmit={handleSubmit}>
      <div className="flex flex-col justify-center items-center  gap-7 w-full">
        <div className="flex flex-row items-center gap-5 justify-center p-0 ">
          <h1 className="font-bold text-lg ">Try Our Shipping Calculator</h1>
          <div
            onClick={() => {
              setType("Domestic");
            }}
            className={` cursor-pointer flex items-center justify-center px-4 py-3 rounded-[90px] border-2 ${
              type == "Domestic" ? "border-[#4b7de1]" : "border-[#4b7de]"
            } `}
          >
            Domestic
          </div>
          <div
            onClick={() => {
              setType("International");
            }}
            className={` cursor-pointer flex items-center justify-center px-4 py-3 rounded-[90px] border-2 ${
              type == "International" ? "border-[#4b7de1]" : "border-[#4b7de]"
            }  cursor-pointer `}
          >
            International
          </div>
          <div
            onClick={() => {
              setType("Same Day");
            }}
            className={` cursor-pointer flex items-center justify-center px-4 py-3 rounded-[90px] border-2 ${
              type == "Same Day" ? "border-[#4b7de1]" : "border-[#4b7de]"
            }  cursor-pointer `}
          >
            Same Day
          </div>
        </div>
        <div className="flex items-center p-0 gap-10 w-full justify-center">
          {type == "Domestic" && (
            <>
              <div className="flex items-center mr-2 gap-2">
                {/* logo */}
                <CiLocationOn className=" text-4xl" />
                <div className="flex flex-col">
                  <span className="font-semibold text-[24px] leading-[32px]">
                    From
                  </span>
                  <input
                    type="text"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    placeholder="Enter City"
                    required
                    className="border-b-[1px] w-[80%] focus:outline-none hover:outline-none my-[1px] bg-transparent"
                  />
                </div>
              </div>
              <div className="flex items-center mr-2 gap-2">
                {/* logo */}
                <CiLocationArrow1 className=" text-4xl" />
                <div className="flex flex-col">
                  <span className="font-semibold text-[24px] leading-[32px]">
                    To
                  </span>
                  <input
                    type="text"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    placeholder="Enter City"
                    required
                    className="border-b-[1px] w-[80%] focus:outline-none hover:outline-none my-[1px] bg-transparent"
                  />
                </div>
              </div>
            </>
          )}
          {type == "Same Day" && (
            <>
              <div className="flex items-center mr-2 gap-2">
                {/* logo */}
                <CiLocationOn className=" text-4xl" />
                <div className="flex flex-col">
                  <span className="font-semibold text-[24px] leading-[32px]">
                    From
                  </span>
                  <input
                    type="text"
                    value={fromZip}
                    onChange={(e) => setFromZip(e.target.value)}
                    placeholder="Enter Zip Code"
                    required
                    className="border-b-[1px] w-[80%] focus:outline-none hover:outline-none my-[1px] bg-transparent"
                  />
                </div>
              </div>
              <div className="flex items-center mr-2 gap-2">
                {/* logo */}
                <CiLocationArrow1 className=" text-4xl" />
                <div className="flex flex-col">
                  <span className="font-semibold text-[24px] leading-[32px]">
                    To
                  </span>
                  <input
                    type="text"
                    value={toZip}
                    onChange={(e) => setToZip(e.target.value)}
                    placeholder="Enter Zip Code"
                    required
                    className="border-b-[1px] w-[80%] focus:outline-none hover:outline-none my-[1px] bg-transparent"
                  />
                </div>
              </div>
            </>
          )}
          {type == "International" && (
            <>
              <div className="flex items-center mr-2 gap-2">
                {/* logo */}
                <CiLocationOn className=" text-4xl" />
                <div className="flex flex-col">
                  <span className="font-semibold text-[24px] leading-[32px]">
                    From
                  </span>
                  <input
                    type="text"
                    value="United Kingdom"
                    readOnly
                    className="border-b-[1px] w-[80%] focus:outline-none hover:outline-none my-[1px] bg-transparent"
                  />
                </div>
              </div>
              <div className="flex items-center mr-2 gap-2">
                {/* logo */}
                <CiLocationArrow1 className=" text-4xl" />
                <div className="flex flex-col">
                  <span className="font-semibold text-[24px] leading-[32px]">
                    To
                  </span>
                  <select
                    className="border-b-[1px] w-full focus:outline-none hover:outline-none my-[1px] bg-transparent"
                    value={selectedOption}
                    onChange={handleSelect}
                  >
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="China">China</option>
                  </select>
                </div>
              </div>
            </>
          )}
          <button
            className="flex justify-center items-center py-4 px-6 text-white bg-[#008185] rounded-[90px]"
            type="submit"
          >
            Get Quote
          </button>
        </div>
      </div>
    </form>
  );
}
