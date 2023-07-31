import { motion } from "framer-motion";
import bikes from "./bikes";

const Slider = () => {
  console.log(bikes);
  return (
    <div>
      <motion.div className="carousel">
        <motion.div className="inner-carousel">
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
