import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./style.scss";
import { Autoplay, Navigation, EffectFade } from "swiper";
import group from "../../../../images/group.webp";
import group1 from "../../../../images/group1.webp";

const slidesDate = [
  {
    title: "Qualified Caregivers",
    img: group,
    desp: "We assembled an incredible team of experienced Quality Caregivers who are truly passionate about and committed to providing the highest quality care.",
  },
  {
    title: "Private Nursing",
    img: group1,
    desp: "It's about believing in those people who need help living at home.And it's what we set out to do everyday.",
  },
];

const Hero = () => {
  return (
    <div className="hero__container">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        fadeEffect
        navigation
        autoplay
      >
        {slidesDate.map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className="hero__swipper__container"
                style={{ backgroundImage: `url(${data.img})` }}
              >
                <h1>{data.title}</h1>
                <p>{data.desp}</p>
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
