import React from "react";
import "./style.scss";
import { motion, AnimatePresence } from "framer-motion";

const MobileMenu = ({ mobileNavRef }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="mobilemenu__container"
        ref={mobileNavRef}
        initial={{ opacity: 0, x: 250 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 250 }}
        transition={{
          type: "spring",
          stiffness: 50,
        }}
      >
        <nav>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About US</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
      </motion.div>
    </AnimatePresence>
  );
};

export default MobileMenu;
