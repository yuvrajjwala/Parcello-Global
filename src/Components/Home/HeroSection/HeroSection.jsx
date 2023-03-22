import React, { useEffect, useState } from "react";
import hero from "../../../assets/Home/hero.png";
import arrow from "../../../assets/Home/arrow.svg";
import "./HeroSection.css";

const HeroSection = () => {
  let index = 0;
  const [heading, setHeading] = useState("Cheapest");
  const arr = ["Cheapest", "Fastest", "Trusted"];

  function changeName(index) {
    setInterval(() => {
      // console.log(index);
      if (index < 2) {
        index += 1;
        setHeading(arr[index]);
      } else {
        index = 0;
        setHeading(arr[0]);
      }
    }, 2000);
  }
  useEffect(() => {
    changeName(0);
  }, []);
  return (
    <div className="heroSection">
      <div className="heroSection-content">
        <h2>
          Compare and Book <span className="highlight">{heading}</span> Shipping
          Services
        </h2>
        <p>
          We provide various services to make your business grow and get bigger.
          Your satisfaction is our first priority.
        </p>
        <button>
          Get Started <img src={arrow}></img>{" "}
        </button>
      </div>
      <div className="heroSection-img">
        <img src={hero}></img>
      </div>
    </div>
  );
};

export default HeroSection;
