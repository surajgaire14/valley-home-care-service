import React from "react";
import "./style.scss";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer">
        <div>
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            possimus facere officia sint, laborum vero?
          </p>
          <h1>Logo</h1>
        </div>
        <div>
          <h1>Contact Info</h1>
          <p>
            Address: <span>Sainamain-09,Bansgadhi</span>{" "}
          </p>
          <p>
            Phone: <span>98-xx-xx-xx-xx</span>{" "}
          </p>
          <p>
            Email: <span>example@gmail.com</span>{" "}
          </p>
        </div>
        <div className="links">
          <h1>Links</h1>
          <p>
            <a href="/">Home</a>
          </p>
          <p>
            <a href="/blog">Blog</a>
          </p>
          <p>
            <a href="/services">Services</a>
          </p>
          <p>
            <a href="/about">About</a>
          </p>
        </div>
        <div>
          <h1>Newsletter</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, nam?
          </p>
          <div className="buttons">
            <input type="email" name="" id="" placeholder="Enter Email" />
            <button>Subscribe</button>
          </div>
        </div>
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
