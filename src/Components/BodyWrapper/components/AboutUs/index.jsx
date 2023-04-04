import React from "react";
import "./style.scss";

const AboutUs = () => {
  return (
    <div className="about__container">
      <div className="about">
        <h1>About Us</h1>
        <h2>Our Mission</h2>
        <p>
          Our mission is to ensure that our senior population will have the
          support and resources they need to live the life they have earned and
          now deserve as our generation’s elders.
        </p>
        <p className="donation">What do donations go towards?</p>
        <div className="donation__container">
          <div>
            <p><i className="ri-check-line"></i> Food</p>
            <p><i className="ri-check-line"></i> Get Medical Help</p>
            <p><i className="ri-check-line"></i> Medical Equipment</p>
            <p><i className="ri-check-line"></i> Rent</p>
            <p><i className="ri-check-line"></i> Medical Bills</p>
          </div>
          <div>
            <p><i className="ri-check-line"></i>Affodable Housing</p>
            <p><i className="ri-check-line"></i>Utility Bills</p>
            <p><i className="ri-check-line"></i>Home Energy Bills</p>
            <p><i className="ri-check-line"></i>Insurance</p>
          </div>
        </div>
        <button>About Us</button>
      </div>
      <div className="images">
        <div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="unsplash_image"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="unsplash_image"
            />
          </div>
        </div>
        <div>
          <button>View all cases</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
