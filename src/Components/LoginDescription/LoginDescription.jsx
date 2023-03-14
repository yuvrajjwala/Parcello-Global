import React from "react";
import "./LoginDescription.css";
import comma from "../../assets/login/comma.svg";
import star from "../../assets/login/Star.svg";
import img1 from "../../assets/login/img1.svg";
import img2 from "../../assets/login/img2.svg";
import img3 from "../../assets/login/img3.svg";
import star2 from "../../assets/login/star2.svg";

const LoginDescription = ({ descriptionImg }) => {
  return (
    <div className="loginDescription lg:hidden">
      <div className="content">
        <img src={comma} alt="" />
        <p>
          <span>
            Great course to learn web development. The course is
            well-structured,
          </span>
          &nbsp; follow and work step by step can let you master the web
          development skills.
        </p>
        <div className="review">
          <p>Chandler Bing</p>
          <div className="rating">
            <img src={star2} alt="star" />
            <img src={star2} alt="star" />
            <img src={star2} alt="star" />
            <img src={star2} alt="star" />
            <img src={star2} alt="star" />
          </div>
        </div>
        <div className="reviewer">
          <img className="img1" src={img3} alt="image 2" />
          <img className="img2" src={img1} alt="image 1" />
          <img className="img3" src={img2} alt="image 3" />
        </div>
      </div>

      <img className="description-img" src={descriptionImg} alt="" />
    </div>
  );
};

export default LoginDescription;
