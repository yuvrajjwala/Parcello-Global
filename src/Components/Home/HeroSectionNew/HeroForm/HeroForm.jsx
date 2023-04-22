import React, { useState } from "react";
import "../HeroSection.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;

export default function HeroForm() {
  const navigate = useNavigate();
  const [type, setType] = useState("Domestic");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [fromZip, setFromZip] = useState("");
  const [toZip, setToZip] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

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
      <div className="flex flex-col justify-center items-start p-0 gap-7 ">
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
        <div className="flex items-center p-0 gap-10 justify-between">
          {type == "Domestic" && (
            <>
              <div className="flex flex-col">
                <label className=" font-semibold"> From</label>
                <input
                  className=" border-b-2 border-slate-300 outline-none"
                  type="text"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  placeholder="Enter City"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className=" font-semibold"> To</label>
                <input
                  className=" border-b-2 border-slate-300 outline-none"
                  type="text"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  placeholder="Enter City"
                  required
                />
              </div>
            </>
          )}
          {type == "Same Day" && (
            <>
              <div className="flex flex-col">
                <label className=" font-semibold">From</label>
                <input
                  className=" border-b-2 border-slate-300 outline-none"
                  type="text"
                  value={fromZip}
                  onChange={(e) => setFromZip(e.target.value)}
                  placeholder="Enter Zip Code"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className=" font-semibold">To</label>
                <input
                  className=" border-b-2 border-slate-300 outline-none"
                  type="text"
                  value={toZip}
                  onChange={(e) => setToZip(e.target.value)}
                  placeholder="Enter Zip Code"
                  required
                />
              </div>
            </>
          )}
          {type == "International" && (
            <>
              <div className="flex flex-col">
                <label htmlFor="from" className=" font-semibold">
                  From
                </label>
                <input
                  className=" border-b-2 border-slate-300 outline-none"
                  type="text"
                  value="United Kingdom"
                  readOnly
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="to" className=" font-semibold">
                  To
                </label>
                <select value={selectedOption} onChange={handleSelect}>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="China">China</option>
                </select>
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
