import React from "react";
import Video from "../Video";
import AboutUs from "./components/AboutUs";
import CEOWords from "./components/CEOwords";
import Hero from "./components/Hero";
import Services from "./components/Services";
// import Blog from "./components/Blog";
import Location from "./components/Location";
import Training from "./components/Training";
import FAQ from "./components/FAQ";
import "../../variable.scss";

const BodyWrapper = ({observerRefs}) => {

  return (
    <div className="bodywrapper__container">
      <Hero/>
      <CEOWords />
      <Video />
      <AboutUs observerRefs = {observerRefs}  />
      <Services />
      <Training />
      <FAQ />
      <Location />
    </div>
  );
};

export default BodyWrapper;
