import React from "react";
import "./GetQouteForm.css";
import location from "../../assets/Home/location.svg";
import downArrow from "../../assets/Home/downArrow.svg";
import to from "../../assets/Home/to.svg";
import calendar from "../../assets/Home/calendar.svg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";

const apiKey = import.meta.env.VITE_API_KEY;
const DELIVERY_URL = "/api/couriers/fetchbydelivery/";
const GetQouteForm = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [data, setData] = useState({});
  const [distance, setDistance] = useState("10");
  const [serviceType, setServiceType] = useState("same Day");

  //   const [j, setJ] = useState(0);
  //   const arr = [10, 12, 13, 14, 15, 17, 18, 19, 22];
  var min = 10;
  var max = 20;
  var rand = min + Math.random() * (max - min);

  let navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    //  try{

    //  }
    //  catch(e){
    //    console.log(e);
    //  }
    try {
      //  const response = await axios.get(DELIVERY_URL);

      const response = await axios.post(
        DELIVERY_URL,
        {
          Length: length,
          Height: height,
          Width: width,
          Distance: rand,
          service_type: serviceType,
        },
        {
          headers: { "content-Type": "application/json" },
        }
      );

      const Data = await response?.data;

      console.log(Data);
      setData(response.data);
      navigate("/result", { state: Data });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    console.log(source);
  }, [source]);

  return (
    <div className="getQouteForm">
      <div>
        <span className="tryCalculatorHeading">
          Try our shipping calculator
        </span>
      </div>
      <form className="formGetQoute" onSubmit={handleSubmit}>
        <div className="form-field">
          <div className="form-field-container">
            <img src={location}></img>
            <div>
              <h2>From</h2>
              <input
                type="text"
                placeholder="Enter Pincode"
                onChange={(e) => {
                  setSource(e.target.value);
                }}
              />
            </div>
          </div>
          {/* <div className='downArrow'>
               <img src={downArrow}></img>
            </div> */}
        </div>
        <div className="form-field">
          <div className="form-field-container">
            <img src={to}></img>
            <div>
              <h2>To</h2>
              <input
                type="text"
                placeholder="Enter Pincode"
                onChange={(e) => {
                  setDestination(e.target.value);
                }}
              />
            </div>
          </div>
          {/* <div className="downArrow">
            <img src={downArrow}></img>
          </div> */}
        </div>
        <div className="form-field">
          <div className="form-field-container">
            <img src={calendar}></img>
            <div>
              <h2>Width?</h2>
              <input
                type="text"
                onChange={(e) => {
                  setWidth(e.target.value);
                }}
              />
              <span>m</span>
            </div>
          </div>
        </div>
        <div className="form-field">
          <div className="form-field-container">
            <img src={calendar}></img>
            <div>
              <h2>length?</h2>
              <input
                type="text"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <span>m</span>
            </div>
          </div>
        </div>
        <div className="form-field">
          <div className="form-field-container">
            <img src={calendar}></img>
            <div>
              <h2>height?</h2>
              <input
                type="text"
                onChange={(e) => {
                  setHeight(e.target.value);
                }}
              />
              <span>m</span>
            </div>
          </div>
        </div>
        <div className="get-qoute">
          <button type="submit">Get Qoute</button>
        </div>
      </form>
    </div>
  );
};

export default GetQouteForm;
