import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import rider from "../assets/images/rider.jpg";
const ThanksPage = () => {
  const navigate = useNavigate();
  const { gsap } = window;

  const textTopRef = useRef(null);
  const textBottomRef = useRef(null);
  const spanTopRef = useRef(null);
  const boxRiderRef = useRef(null);

  const handleShopClick = () => {
    navigate("/Shop");
  };

  useEffect(() => {
    const top = textTopRef.current;
    const bottom = textBottomRef.current;
    const span = spanTopRef.current;
    const rider = boxRiderRef.current;

    gsap.fromTo([top, bottom, span], { y: "110%" }, { y: 0, stagger: 0.4, duration: 0.6 });
    gsap.fromTo([top, bottom, span], { y: "110%" }, { y: 0, stagger: 0.4, duration: 0.6 });
    gsap.fromTo(
      rider,
      { scaleY: 1.5 },

      {
        scaleY: 0,
        duration: 1,
        transformOrigin: "top ",
      }
    );
  }, []);

  return (
    <div className="thankspage">
      <div className="thankspage__top">
        <p className="thankspage__top__brand">ASPHALT</p>
        <p className="thankspage__top__back" onClick={handleShopClick}>
          <span className="material-symbols-outlined thankspage__top__back__arrow ">arrow_back_ios</span>
          back to shop
        </p>
      </div>
      <div className="thankspage__text">
        <div className="thankspage__text__top">
          <p className="thankspage__text__top__txt" ref={textTopRef}>
            You can
          </p>
        </div>
        <div className="thankspage__text__bottom">
          <p className="thankspage__text__bottom__txt " ref={textBottomRef}>
            ride <span ref={spanTopRef}>now</span>
          </p>
        </div>
      </div>
      <div className="thankspage__box">
        <div className="thankspage__box__slide" ref={boxRiderRef}></div>
        <div className="thankspage__box__slide__image">
          <img src={rider} alt="rider picture" />
        </div>
      </div>
    </div>
  );
};

export default ThanksPage;
