import React from "react";
import "./style.scss";
import MobileMenu from "../MobMenu";


const Navbar = () => {
  const [showmenu, setShowMenu] = React.useState(false);
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
        <div className="nav__links">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about__container">About Us</a>
            </li>
            <li>
              <a href="#services__container">Services</a>
            </li>
            <li>
              <a href="#services__container">Training</a>
            </li>
            <li>
              <a href="#contact__container">Contact</a>
            </li>
          </ul>
        </div>
        <div className="hamburgermenu">
          <p>
            <i className="ri-menu-line" onClick={() => setShowMenu(true)}></i>
          </p>
        </div>
      </div>
      {showmenu && <MobileMenu mobileNavRef={mobileNavRef} />}
    </>
  );
};

export default Navbar;
