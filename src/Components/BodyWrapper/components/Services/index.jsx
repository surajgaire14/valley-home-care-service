import React from "react";
import "./style.scss";

const services = [
  {
    img: "https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "24/7 Availability",
  },
  {
    img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Bonded and qualified care givers",
  },
  {
    img: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Comfort Match Guarantee",
  },
];

const Services = () => {
  return (
    <div className="services__container" id="services__container">
      <div className="title__container">
        <h1>Why Choose Home Valley Care Service ?</h1>
        <button>Learn More About Us</button>
      </div>
      <div className="services">
        {services.map((service, index) => {
          return (
            <div className="service" key={index}>
              <img
                src={service.img}
                alt="unsplash-image"
                width={"100%"}
                height={400}
              />
              <div className="desp">
                <h3>{service.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
