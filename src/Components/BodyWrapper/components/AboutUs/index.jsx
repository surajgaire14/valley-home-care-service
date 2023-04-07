import React from "react";
import "./style.scss";
import image from "../../../../images/featureimg.webp";
import {
  useScroll,
  useTransform,
  motion,
  useAnimationControls,
} from "framer-motion";

const AboutUs = () => {
  const firstimageRef = React.useRef(null);
  const secondimageRef = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: firstimageRef,
    offset: ["end end", "end start"],
  });

  const translate = useTransform(scrollYProgress, [0, 0.1], [100, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.1], [-100, 0]);

  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);
  const controls = useAnimationControls();

  return (
    <div className="about__container" id="about__container">
      <div className="wrapper">
        <div className="about">
          <h2>About Us</h2>
          <p>
            Our mission is to ensure that our senior population will have the
            support and resources they need to live the life they have earned
            and now deserve as our generation’s elders.
          </p>
          <p className="donation">What do donations go towards?</p>
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
          </div>
          <button>About Us</button>
        </div>
        <div className="images">
          <div>
            <motion.div
              ref={firstimageRef}
              style={{ translateY: translate, opacity: opacity }}
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
          <div>
            <button>View all cases</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
