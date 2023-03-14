import React from "react";

import "./WhyUs.css";
import whyChooseUs from "../../../assets/Home/whyChooseUspng.png";


const whyUs = () => {
  return (
    <>
      <div className="why-choose-us">
        <h2>Why You Choose Us?</h2>
        <p>Parcel Delivery Made Easy!</p>
      </div>
      <div>
        <div className="why-choose-container">
          <div className="choose-content">
            <div className="number-chooseUs">1</div>
            <div>
              <h2>Parcel Delivery Made Easy</h2>
              <p>
                If you’re looking for a convenient parcel delivery and want to
                ensure that your parcel gets delivered without much effort,
                Parcello made it easy for you. It’s super simple to send a
                parcel through Parcello.
              </p>
            </div>

            <div
              style={{ backgroundColor: "#92A5EF" }}
              className="number-chooseUs"
            >
              2
            </div>
            <div>
              <h2>Cheapest Parcel Delivery</h2>
              <p>
                We have built a strong relationship with a host of high-profile
                global logistics. This means that we can offer our customers the
                most competitive parcel delivery prices in the market.
              </p>
            </div>

            <div
              style={{ backgroundColor: "#58C27D" }}
              className="number-chooseUs"
            >
              3
            </div>
            <div>
              <h2>Guaranteed Fastest Delivery</h2>
              <p>
                We only work with the best carriers and we continually monitor
                delivery performance and benchmark against other carriers. Our
                expert professionals always ensure the best possible service
                that can be given.
              </p>
            </div>
            <br></br>
            <button className="btn" >Send Parcel Now!</button>
          </div>
          <div className="choose-image">
            <img src={whyChooseUs}></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default whyUs;
