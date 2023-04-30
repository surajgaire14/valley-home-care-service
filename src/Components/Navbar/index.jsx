import React from "react";
import "./style.scss";
import MobileMenu from "../MobMenu";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useCycle } from "framer-motion";

const Navbar = () => {
  const [showmenu, setShowMenu] = React.useState(false);
  const [open, cycleOpen] = useCycle(false, true);
  const mobileNavRef = React.useRef(null);

  const handleClickOutside = (e) => {
    if (mobileNavRef.current && !mobileNavRef.current.contains(e.target)) {
      setShowMenu(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, []);
  return (
    <>
      <div className="navbar__container">
        <nav>
          <div className="logo">
            <Link to={"/"}>
              <img src={logo} alt="logo" width={80} height={80} />
            </Link>
          </div>
          <div className="nav__links">
            <ul>
              <li>
                <a href="#" onClick={() => window.scrollTo(0, 0)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about__container">About Us</a>
              </li>
              <li>
                <a href="#services__container">Services</a>
              </li>
              <li>
                <a href="#training__container">Training</a>
              </li>
              <li>
                <a href="#contact__container">Contact</a>
              </li>
            </ul>
          </div>
          <div className="hamburgermenu">
            <p>
              <i
                className="ri-menu-fill"
                onClick={() => {
                  setShowMenu(true), cycleOpen();
                }}
              ></i>
            </p>
          </div>
        </nav>
      </div>
      {showmenu && (
        <MobileMenu
          mobileNavRef={mobileNavRef}
          setShowMenu={setShowMenu}
          open={open}
        />
      )}
    </>
  );
};

export default Navbar;
