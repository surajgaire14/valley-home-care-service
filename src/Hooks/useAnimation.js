import { useScroll, useTransform } from "framer-motion";

export const useAnimation = (ref) => {
  // const ref = React.useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return { opacity };
};
