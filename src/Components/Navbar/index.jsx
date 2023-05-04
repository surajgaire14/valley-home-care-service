import React, { useEffect } from "react";
import "./style.scss";
import MobileMenu from "../MobMenu";
import logo from "../../images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useCycle } from "framer-motion";
import { links } from "../MobMenu";

const Navbar = () => {
  const [showmenu, setShowMenu] = React.useState(false);
  const [open, cycleOpen] = useCycle(false, true);
  const [activeId, setActiveId] = React.useState(0);
  const mobileNavRef = React.useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

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
              {links.map((link, i) => {
                return (
                  <li key={i}>
                    <a
                      href={link.href}
                      onClick={() => setActiveId(i)}
                      className={`${activeId}` == i ? "active" : ""}
                    >
                      {link.link}{" "}
                    </a>
                  </li>
                );
              })}
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
