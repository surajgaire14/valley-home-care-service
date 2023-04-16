import React from "react";
import "./style.scss";
import logo from "../../images/logo1.png";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer">
        <div>
          <h1>About Us</h1>
          <p>
            Welcome to{" "}
            <strong>Valley Health Care Service and Training Center!</strong> We
            are a team of healthcare professionals and educators dedicated to
            providing high-quality healthcare services and training to
            individuals and healthcare organizations.
          </p>
          <img
            src={logo}
            alt="logo"
            width={100}
            height={100}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="contact__info">
          <h1>Contact Info</h1>
          <p>
            Address: <span>Gwarko,Lalitpur</span>{" "}
          </p>
          <p>
            Phone: <span>01-5201787</span>{" "}
          </p>
          <p>
            Email: <span>valleyhomecareservices85@gmail.com</span>{" "}
          </p>
        </div>
        {/* <div className="links">
          <h1>Links</h1>
          <p>
            <a href="/">Home</a>
          </p>
          <p>
            <a href="/services">Services</a>
          </p>
          <p>
            <a href="/about">About</a>
          </p>
        </div> */}
        {/* <div>
          <h1>Newsletter</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, nam?
          </p>
          <div className="buttons">
            <input type="email" name="" id="" placeholder="Enter Email" />
            <button>Subscribe</button>
          </div>
        </div> */}
      </div>
      <div className="copyright">
        <p>
          Copyright &copy; 2023 All Rights Reserved | Made with{" "}
          <i className="ri-heart-line"></i> by{" "}
          <a href="https://codewithsudeep.com/">CodeWithSudeep</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
