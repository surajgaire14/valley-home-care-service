import React from "react";
import "./style.scss";

const Video = () => {
  return (
    <div className="video__container">
      <div>
        <h1>Welcome to Valley Home Care Service</h1>
        <q>
          If you could have a perfect medical experience at your doctor’s
          office, what would it look like?
        </q>
      </div>
      <div className="iframe__container">
        <iframe
          width="1280"
          height="725"
          src="https://www.youtube.com/embed/q-70975w9wA"
          title="Valley Home Care Service And Health Center"
          // frameborder="0"
          style={{ border: "none" }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
