import React from "react";
import ModelComponent from "../../../Modal";
import "./style.scss";

const Training = () => {
  const [openModal, setOpenModal] = React.useState(false);

  const modalref = React.useRef(null);

  const handleClickOutside = (e) => {
    if (modalref.current && !modalref.current.contains(e.target)) {
      setOpenModal(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, [openModal]);

  React.useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [openModal]);

  return (
    <>
      <div className="training__container">
        <div className="wrapper">
          <h1>Our Training Programs Help You Build Quality</h1>
          <span></span>
          <p>
            3 month Critical Care Training is based in 1month theory plus 2month
            practical classes fully ICU ward based. By which all nurses, medical
            person will be fully trained and will know about all settings of ICU
            ward. After this training you all can easily apply for job after
            which no nurses have to do volunteer job or observation duties.{" "}
          </p>

          <h2>What Skills will you develop after this training ?</h2>
          <span></span>
          <div className="skills">
            <ul>
              <li>Advanced cardiovascular life support (ACLS).</li>
              <li>Patient care</li>
              <li>Critical care</li>
              <li>Life support</li>
              <li>Cardiopulmonary resuscitation (CPR)</li>
              <li>Trauma</li>
              <li>Pt. /family education and instruction.</li>
              <li>Telemetry</li>
              <li>Discharge planning.</li>
            </ul>
          </div>
          <h2>What qualities will you develop after this training?</h2>
          <span></span>
          <div className="skills">
            <ul>
              <li>Planning</li>
              <li>Communication</li>
              <li>Critical thinking</li>
              <li>Research</li>
              <li>Computer literacy</li>
              <li>Physical abilities</li>
              <li>Problem solving</li>
              <li>Organization</li>
              <li>Time management</li>
            </ul>
          </div>
          <button onClick={() => setOpenModal(true)}>Watch Video</button>
        </div>
      </div>
      {openModal && (
        <ModelComponent modalref={modalref} setOpenModal={setOpenModal} />
      )}
    </>
  );
};

export default Training;
