import { useEffect, useRef } from "react";
import josh5 from "../assets/images/josh5.webp";

const LandingPage = () => {
  const brandTopRef = useRef(null);
  useEffect(() => {
    const brand = brandTopRef.current;

    gsap.fromTo(
      brand,
      {
        opacity: 0,
      },
      {
        delay: 1,
        opacity: 1,
        duration: 0.2,
      }
    );
  }, []);
  return (
    <div className="landingpage">
      <img src={josh5} alt="Your alt text" className="background-image" />
      <div className="landingpage__container">
        <div className="landingpage__container__top">
          <p className="landingpage__container__top__brand" ref={brandTopRef}>
            ASPHALT
          </p>
          <div className="landingpage__container__top__catch">
            RIDE THE WORLD
          </div>
        </div>
        <div className="landingpage__container__bottom">
          <p className="landingpage__container__bottom__city">PARIS</p>
          <p className="landingpage__container__bottom__time">17:05</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
