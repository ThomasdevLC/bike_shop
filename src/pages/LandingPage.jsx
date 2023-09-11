import { useState, useEffect, useRef } from "react";
import josh3 from "../assets/images/josh3.webp";
import transition from "../components/Transition/transition";
import dateTimeUtils from "../utils/dateTimeUtils";

const LandingPage = () => {
  const [count, setCount] = useState(100);
  const formattedCount = String(count).padStart(3, "0");

  useEffect(() => {
    const interval = setInterval(() => {
      if (count > 0) {
        setCount(count - 1);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [count]);

  const time = dateTimeUtils.currentTime();

  const brandTopRef = useRef(null);
  const rideRef = useRef(null);
  const worldRef = useRef(null);

  useEffect(() => {
    const brand = brandTopRef.current;
    const ride = rideRef.current;
    const world = worldRef.current;

    gsap.fromTo(
      brand,
      {
        opacity: 0,
      },
      {
        delay: 0.5,
        opacity: 1,
        duration: 0.1,
      }
    );
    gsap.fromTo(
      ride,
      {
        opacity: 0,
      },
      {
        delay: 1.4,
        opacity: 1,
        duration: 0.1,
      }
    );
    gsap.fromTo(
      world,
      {
        opacity: 0,
      },
      {
        delay: 1.6,
        opacity: 1,
        duration: 0.1,
      }
    );
  }, []);

  return (
    <div className="landingpage">
      <img src={josh3} alt="Your alt text" className="background-image" loading="lazy" />
      <div className="landingpage__container">
        <div className="landingpage__container__top">
          <p className="landingpage__container__top__brand" ref={brandTopRef}>
            ASPHALT
          </p>
          <div className="landingpage__container__top__catch">
            <span ref={rideRef}>RIDE</span> <span ref={worldRef}>THE WORLD</span>
          </div>
        </div>
        <div className="landingpage__container__bottom">
          <p className="landingpage__container__bottom__city">PARIS</p>
          <p className="landingpage__container__bottom__time">{time}</p>
        </div>
      </div>
      <p className="count"> {formattedCount}</p>
    </div>
  );
};

const WrappedLanding = transition(LandingPage);

export default WrappedLanding;
