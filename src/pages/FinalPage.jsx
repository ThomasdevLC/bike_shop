import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import dateTimeUtils from "../utils/dateTimeUtils";
import SplitType from "split-type";
import josh5 from "../assets/images/josh5.webp";

const FinalPage = () => {
  const navigate = useNavigate();
  const date = dateTimeUtils.currentDay();
  const splitBrandRef = useRef(null);

  const handleShopClick = () => {
    navigate("/Shop");
  };

  useEffect(() => {
    if (splitBrandRef.current) {
      const splitBrand = SplitType.create(splitBrandRef.current);
      const sChar = splitBrand.chars[1];
      const pChar = splitBrand.chars[2];
      gsap.fromTo([sChar, pChar], { y: "30%" }, { y: 0, stagger: 0.2, delay: 0.4, duration: 1.2, ease: "sine.inOut" });
    }
  }, []);
  return (
    <div className="finalpage">
      <img src={josh5} alt="Your alt text" className="background-image" loading="lazy" />
      <div className="finalpage__container">
        <div className="finalpage__container__shop" onClick={handleShopClick}>
          shop
        </div>{" "}
        <div className="finalpage__container__hidden">
          <div className="finalpage__container__hidden__brand" ref={splitBrandRef}>
            {" "}
            ASPHALT
          </div>
        </div>
        <div className="finalpage__container__time">{date}</div>
      </div>
    </div>
  );
};

export default FinalPage;
