import BannerFive from "../components/CycleOne/BannerFive";
import BannerFour from "../components/CycleOne/BannerFour";
import Bannerthree from "../components/CycleOne/BannerThree";
import BannerTwo from "../components/CycleOne/BannerTwo";
import BannerOne from "../components/CycleOne/BannerOne";
import BannerSeven from "../components/CycleOne/BannerSeven";
import BannerEight from "../components/CycleOne/BannerEight";
import josh1 from "../assets/images/josh.webp";

const CycleOne = () => {
  return (
    <div className="cycleone">
      <img src={josh1} alt="Your alt text" className="background-image" loading="lazy" />

      <BannerFive />
      <BannerFour />
      <Bannerthree />
      <BannerTwo />
      <BannerOne />
      <BannerSeven />
      <BannerEight />
    </div>
  );
};

export default CycleOne;
