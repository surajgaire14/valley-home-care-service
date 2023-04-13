import { useScroll, useTransform, motion } from "framer-motion";
import React from "react";
import "./style.scss";

const Video = () => {
  const videocontainerRef = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: videocontainerRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  return (
    <motion.div
      className="video__container"
      ref={videocontainerRef}
      style={{ opacity: opacity }}
    >
      <div className="wrapper">
        <div>
          <h1>Welcome to Valley Home Care Service</h1>
          <p>
            "<i>care with excellence...</i>"
          </p>
        </div>
        <div className="iframe__container">
          <iframe
            src="https://www.youtube.com/embed/q-70975w9wA"
            title="Valley Home Care Service And Health Center"
            // frameborder="0"
            style={{ border: "none" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // allowFullScreen={true}
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
};

export default Video;
