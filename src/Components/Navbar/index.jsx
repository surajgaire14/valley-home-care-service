import React from "react";
import "./style.scss";
import MobileMenu from "../MobMenu";

const Navbar = () => {
  const [showmenu, setShowMenu] = React.useState(false);
  const mobileNavRef = React.useRef(null)

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
        </div>
        <div className="hamburgermenu">
          <p>
            <i className="ri-menu-line" onClick={() => setShowMenu(true)}></i>
          </p>
        </div>
      </div>
      {showmenu && <MobileMenu mobileNavRef = {mobileNavRef}/>}
    </>
  );
};

export default Navbar;
