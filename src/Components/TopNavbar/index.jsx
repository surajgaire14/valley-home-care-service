import React from "react";
import "./style.scss";
import logo from "../../images/logo.png";

const TopNavbar = () => {
  return (
    <div className="topnavbar__container">
      <div className="logo__container">
        <img src={logo} alt="logo" width={100} height={100} />
      </div>
      <div className="company__info">
        <p>
        <i className="ri-phone-fill"></i> <span>01-5201787</span>
        </p>
        <div className="icons__container">
          <p>
            <a
              href="https://www.facebook.com/valleyhomecareservicesandtrainingcenter"
              target={"_blank"}
            >
              <i className="ri-facebook-fill"></i>
            </a>
          </p>
          <p>
            <a href="https://mail.google.com/mail/u/0/#inbox" target={"_blank"}>
              <i className="ri-mail-line"></i>
            </a>
          </p>
          <p>
            <a
              href="https://www.youtube.com/@valleyhomecareservicesandtrain"
              target={"_blank"}
            >
              <i className="ri-youtube-line"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
