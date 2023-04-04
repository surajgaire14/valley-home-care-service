import React from "react";
import Video from "../Video";
import AboutUs from "./components/AboutUs";
import CEOWords from "./components/CEOwords";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Location from "./components/Location";

const BodyWrapper = () => {
  return (
    <div className="bodywrapper__container">
      <Hero />
      <AboutUs />
      <CEOWords />
      <Services />
      <Video />
      <Blog />
      <Location />
    </div>
  );
};

export default BodyWrapper;
