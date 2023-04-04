import React from "react";

const Location = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.7117266655737!2d85.33072849999999!3d27.6643893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb177ca067571b%3A0x85d06e871a217f58!2sValley%20Homecare%20Training%20Center!5e0!3m2!1sen!2snp!4v1680537542295!5m2!1sen!2snp"
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Location;
