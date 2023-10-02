import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import sliderData from "../../data/bikesData";
import DragInfo from "./DragInfo";

const Slider = () => {
  const navigate = useNavigate();
  const handleBuyClick = () => {
    navigate("/ThanksPage");
  };

  const [width, setWidth] = useState(0);
  const sliderWrapper = useRef();

  useEffect(() => {
    setWidth(sliderWrapper.current.scrollWidth - sliderWrapper.current.offsetWidth);
  }, []);

  return (
    <div className="slider">
      <motion.div className="slider__wrapper" ref={sliderWrapper} whileTap={{ cursor: "grabbing" }}>
        <motion.div className="slider__wrapper__inner" drag="x" dragConstraints={{ right: 0, left: -width }}>
          {sliderData.map((card, index) => (
            <div className={`card ${index === 0 ? "first-card" : ""}`} key={index}>
              <h1 className="card__title">{card.title}</h1>
              <div className="card__img">
                <img src={card.image} alt="" />
              </div>

              <DragInfo index={index} />

              <div className="card__bottom">
                <p className="card__bottom__price">{card.price}</p>
                <div className="card__bottom__purchase" onClick={handleBuyClick}>
                  <span>
                    <span>
                      PURCHASE <span>PURCHASE</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Slider;
