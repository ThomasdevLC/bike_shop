import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import bike1 from "../../assets/images/bike-one.png";
import bike2 from "../../assets/images/bike-two.png";
import bike3 from "../../assets/images/bike-three.png";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Slider = () => {
  const navigate = useNavigate();
  const handleBuyClick = () => {
    navigate("/ThanksPage");
  };

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
        className="slider__wrapper"
        ref={slider_wrapper}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="slider__wrapper__inner"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          <div className="card card-first">
            <h1 className="card__title">740 STORMZ</h1>
            <div className="card__img">
              <img src={bike1} alt="" />
            </div>
            <div className="card__bottom">
              <p className="card__bottom__price">1 299 €</p>
              <div className="card__bottom__purchase" onClick={handleBuyClick}>
                <span>
                  <span>
                    PURCHASE <span>PURCHASE</span>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="card">
            <h1 className="card__title">740 STORMZ</h1>
            <div className="card__img">
              <img src={bike2} alt="" />
            </div>
            <div className="card__bottom">
              <p className="card__bottom__price">1 299 €</p>
              <p className="card__bottom__purchase">PURCHASE</p>
            </div>
          </div>
          <div className="card">
            <h1 className="card__title">740 STORMZ</h1>
            <div className="card__img">
              <img src={bike3} alt="" />
            </div>
            <div className="card__bottom">
              <p className="card__bottom__price">1 299 €</p>
              <p className="card__bottom__purchase">PURCHASE</p>
            </div>
          </div>
          <div className="card">
            <h1 className="card__title">740 STORMZ</h1>
            <div className="card__img">
              <img src={bike1} alt="" />
            </div>
            <div className="card__bottom">
              <p className="card__bottom__price">1 299 €</p>
              <p className="card__bottom__purchase">PURCHASE</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Slider;
