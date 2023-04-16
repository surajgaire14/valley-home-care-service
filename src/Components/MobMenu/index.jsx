import React from "react";
import "./style.scss";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { link: "Home", href: "" },
  { link: "About Us", href: "#about__container" },
  { link: "Services", href: "#services__container" },
  { link: "Contact", href: "#contact__container" },
  { link: "Training", href: "#training__container" },
];

const MobileMenu = ({ mobileNavRef, setShowMenu }) => {
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
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <a
                    href={`${link.href}`}
                    onClick={() => setShowMenu(false)}
                  >{`${link.link}`}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </motion.div>
    </AnimatePresence>
  );
};

export default MobileMenu;
