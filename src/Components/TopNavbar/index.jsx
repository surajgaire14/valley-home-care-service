import React from "react";
import "./style.scss";

const TopNavbar = () => {
  return (
    <div className="topnavbar__container">
      <div className="logo__container">
        <h1>Logo</h1>
      </div>
      <div className="company__info">
        <p>
          <i className="ri-phone-line"></i> <span>98-xx-xx-xx-xx</span>
        </p>
        <div className="icons__container">
          <p>
            <i className="ri-facebook-fill"></i>
          </p>
          <p>
          <i className="ri-instagram-line"></i>
          </p>
          <p>
            <i className="ri-twitter-fill"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
