import Header from "../components/ShopPage/Header";
import Slider from "../components/ShopPage/Slider";
import transition from "../components/Transition/transition";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shop__header">
        <Header />
      </div>
      <div className="shop__slider">
        <Slider />
      </div>
    </div>
  );
};

const WrappedShop = transition(Shop);

export default WrappedShop;
