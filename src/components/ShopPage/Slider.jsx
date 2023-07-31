import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import bikes from "./bikes";

const Slider = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div>
      <motion.div className="carousel">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{ cursor: "grabbing" }}
          ref={carousel}
          className="inner-carousel"
        >
          {bikes.map((bike) => {
            return (
              <motion.div className="item" key={bike.id}>
                <img src={bike} alt="image bike" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Slider;
