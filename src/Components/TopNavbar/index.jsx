import React from "react";
import "./style.scss";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TopNavbar = () => {
  const notify = () => toast("phone number copied successfully");

  const error = () => toast.error("failed to copy phone number");

  return (
    <div className="topnavbar__container">
      <div className="logo__container">
        <p>
          <i
            className="ri-phone-fill"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="copy phone number"
            data-tooltip-place="left"
            onClick={async () =>
              await navigator.clipboard
                .writeText("01-5201787")
                .then(() => notify())
                .catch(() => error())
            }
          ></i>
          <span>01-5201787</span>
        </p>
        <Tooltip id="my-tooltip" />
        <ToastContainer position="bottom-right" autoClose={2000} theme="dark" />
      </div>
      <div className="company__info">
        <div className="icons__container">
          <p>
            <a
              href="https://www.facebook.com/valleyhomecareservicesandtrainingcenter"
              target={"_blank"}
            >
              <i className="ri-facebook-fill"></i>
            </a>
          </p>
          <p>
            <a href="https://mail.google.com/mail/u/0/#inbox" target={"_blank"}>
              <i className="ri-mail-line"></i>
            </a>
          </p>
          <p>
            <a
              href="https://www.youtube.com/@valleyhomecareservicesandtrain"
              target={"_blank"}
            >
              <i className="ri-youtube-line"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
