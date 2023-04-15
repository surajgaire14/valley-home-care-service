import React from "react";
import "./style.scss";
import { AnimatePresence, motion } from "framer-motion";

const ModelComponent = ({ modalref, setOpenModal }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="modal__container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 500 }}
        transition={{
          type: "tween",
          stiffness: 100,
          damping: 100,
          delay: 0.02,
        }}
      >
        <motion.div className="video__container">
          <p>
            <i
              className="ri-close-line"
              onClick={() => setOpenModal(false)}
            ></i>
          </p>
          <div className="video" ref={modalref}>
            <iframe
              width="1280"
              height="725"
              src="https://www.youtube.com/embed/IqYIKNr6ADI"
              title="Feedback || Valley Home Care Services &amp; Training  Center"
              style={{ border: "none" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ModelComponent;
