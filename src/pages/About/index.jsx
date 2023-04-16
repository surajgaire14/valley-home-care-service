import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="aboutpage__container">
      <div className="about__heroimg">
        <p>
          <Link to={"/"}>
            <i className="ri-home-4-fill"></i>
          </Link>{" "}
          &gt; About
        </p>
      </div>
      <div className="about">
        <div className="heading">
          <span></span>
          <h1>About Us</h1>
          <p>Why we Started it ?</p>
        </div>
        <div className="desp">
          <p>
            At our center, we offer a wide range of healthcare services to meet
            the needs of our patients. Our team consists of experienced
            physicians, nurses, and other healthcare professionals who are
            committed to providing compassionate and patient-centered care. We
            offer various services, such as primary care, specialized care, and
            preventive care, to ensure that our patients receive the best
            possible treatment and support.
          </p>
          <p>
            In addition to our healthcare services, we also offer training and
            education programs for healthcare professionals. Our training center
            provides a comprehensive curriculum that covers a wide range of
            topics related to healthcare, including clinical skills, patient
            safety, and medical technology. Our training programs are designed
            to equip healthcare professionals with the knowledge and skills they
            need to provide high-quality care to their patients.
          </p>
          <p>
            At Valley Health Care Service and Training Center, we are committed
            to excellence in everything we do. We strive to provide the highest
            level of care and service to our patients and to support healthcare
            professionals in their pursuit of excellence. Thank you for
            considering us for your healthcare needs and training.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
