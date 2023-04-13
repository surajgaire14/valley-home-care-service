import React from "react";
import "./style.scss";
import image from "../../../../images/featureimg.webp";
import { useScroll, useTransform, motion } from "framer-motion";
import { useAnimation } from "../../../../Hooks/useAnimation";

const AboutUs = () => {
  const firstimageRef = React.useRef(null);
  const secondimageRef = React.useRef(null);
  const aboutRef = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: firstimageRef,
    offset: ["end end", "end start"],
  });

  const translate = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.3], [-100, 0]);

  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);

  const { opacity } = useAnimation(aboutRef);

  return (
    <motion.div
      className="about__container"
      id="about__container"
      ref={aboutRef}
      style={{ opacity: opacity }}
    >
      <div className="wrapper">
        <div className="about">
          <h2>About Us</h2>
          <p>
            Welcome to{" "}
            <strong>Valley Health Care Service and Training Center!</strong> We
            are a team of healthcare professionals and educators dedicated to
            providing high-quality healthcare services and training to
            individuals and healthcare organizations.
          </p>
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
          {/* <p className="donation">What do donations go towards?</p>
          <div className="donation__container">
            <div>
              <p>
                <i className="ri-check-line"></i> Food
              </p>
              <p>
                <i className="ri-check-line"></i> Get Medical Help
              </p>
              <p>
                <i className="ri-check-line"></i> Medical Equipment
              </p>
              <p>
                <i className="ri-check-line"></i> Rent
              </p>
              <p>
                <i className="ri-check-line"></i> Medical Bills
              </p>
            </div>
            <div>
              <p>
                <i className="ri-check-line"></i>Affodable Housing
              </p>
              <p>
                <i className="ri-check-line"></i>Utility Bills
              </p>
              <p>
                <i className="ri-check-line"></i>Home Energy Bills
              </p>
              <p>
                <i className="ri-check-line"></i>Insurance
              </p>
            </div>
          </div> */}
          <button>About Us</button>
        </div>
        <div className="images">
          <div>
            <motion.div
              ref={firstimageRef}
              style={{ translateY: translate, opacity: opacity1 }}
              transition={{ type: "spring", damping: 0, stiffness: 10 }}
            >
              <img src={image} alt="unsplash_image" />
            </motion.div>
            <motion.div ref={secondimageRef} style={{ translateY, opacity }}>
              <img
                src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="unsplash_image"
              />
            </motion.div>
          </div>
          {/* <div>
            <button>View all cases</button>
          </div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
