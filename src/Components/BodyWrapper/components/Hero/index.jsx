import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./style.scss";
import { Autoplay, Navigation, EffectFade } from "swiper";
import group from "../../../../images/group.webp";
import group1 from "../../../../images/group1.webp";
import { useTransform, motion, useScroll } from "framer-motion";

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
  // const titleRef = React.useRef(null);
  // const desp = React.useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: titleRef,
  // });
  // const translateY = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);
  // const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);

  const heroRef = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  return (
    <motion.div
      className="hero__container"
      ref={heroRef}
      style={{ opacity: opacity }}
    >
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        navigation
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {slidesDate.map((data, index) => {
          return (
            <SwiperSlide
              key={index}
            >
              <div
                className="hero__swipper__container"
                style={{ backgroundImage: `url(${data.img})` }}
              >
                <motion.h1 className="title">{data.title}</motion.h1>
                <p>{data.desp}</p>
                <button>Get In Touch</button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};

export default Hero;
