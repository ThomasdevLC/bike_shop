import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import bike1 from "../../assets/images/bike-one.jpg";

const Slider = () => {
  const [width, setwidth] = useState(0);
  const slider_wrapper = useRef();

  useEffect(() => {
    setwidth(
      slider_wrapper.current.scrollWidth - slider_wrapper.current.offsetWidth
    );
  }, []);

  return (
    <div className="slider">
      <motion.div
        className="slider_wrapper"
        ref={slider_wrapper}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="slider_wrapper_inner"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          <div className="card">
            <h1 className="card__title">740 STORMZ</h1>
            <div className="card_img">
              <img src={bike1} alt="" />
            </div>
            <div className="card_bottom">
              <p>1 299 €</p>
            </div>
          </div>
          <div className="card">
            <h1 className="card__title">740 STORMZ</h1>

            <div className="card_img">
              <img src={bike1} alt="" />
            </div>
            <div className="card_bottom">
              <p>price</p>
            </div>
          </div>
          <div className="card">
            <h1 className="card__title">740 STORMZ</h1>

            <div className="card_img">
              <img src={bike1} alt="" />
            </div>
            <div className="card_bottom">
              <p>price</p>
            </div>
          </div>
          <div className="card">
            <h1 className="card__title">740 STORMZ</h1>

            <div className="card_img">
              <img src={bike1} alt="" />
            </div>
            <div className="card_bottom">
              <p>price</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Slider;
