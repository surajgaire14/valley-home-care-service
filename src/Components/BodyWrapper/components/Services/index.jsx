import React from "react";
import "./style.scss";

const service = [
  {
    img:"https://images.unsplash.com/photo-1576765607924-3f7b8410a787?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80",
    title:"24/7 Availability",
    
  }
]

const Services = () => {
  return (
    <div className="services__container" id="services__container">
      <div className="title__container">
        <h1>Why Choose Home Valley Care Service ?</h1>
        <button>Learn More About Us</button>
      </div>
      <div className="services">
        {/* <Swiper> */}
        {[0, 1, 2, 3].map((_, index) => {
          return (
            // <SwiperSlide>
            <div className="service" key={index}>
              <img
                src="https://images.unsplash.com/photo-1576765607924-3f7b8410a787?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80"
                alt="unsplash-image"
                width={"100%"}
                height={400}
              />
              <div className="desp">
                <h3>Primary Care</h3>
                <p>Partner with your primary care</p>
              </div>
            </div>
            // </SwiperSlide>
          );
        })}
        {/* </Swiper> */}
      </div>
    </div>
  );
};

export default Services;
