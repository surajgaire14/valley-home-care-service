import React from "react";
import ceo from "../../../../images/ceo.webp";
import "./style.scss";
import { useScroll, useTransform, motion } from "framer-motion";

const CEOWords = () => {
  const ceoRef = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ceoRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    <motion.div
      className="ceo__container"
      ref={ceoRef}
      style={{ opacity: opacity }}
    >
      <h1>Words from our CEO</h1>
      <div className="wrapper">
        <div className="image__container">
          <img src={ceo} alt="neharika-kc" width={650} height={450} />
        </div>
        <div className="testimonial">
          <h2>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            molestias sed magni fuga reiciendis ut dignissimos dolore, porro hic
            accusamus!"
          </h2>
          <div className="info">
            <p>- Neharika KC </p>
            <p>Founder and CEO</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CEOWords;
