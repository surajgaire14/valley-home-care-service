import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./style.scss";
import { Autoplay, Navigation } from "swiper";

const Hero = () => {
  return (
    <div className="hero__container">
      <Swiper modules={[Navigation,Autoplay]} navigation autoplay>
        {[0, 1, 2, 3].map((_, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="hero__swipper__container">
                <h1>Title</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Distinctio tempore facilis cupiditate aperiam similique enim
                  totam dolore in nesciunt repudiandae.
                </p>
                <button>Get In Touch</button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Hero;
