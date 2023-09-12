import { useState, useEffect, useRef } from "react";
import josh3 from "../assets/images/josh3.webp";
import transition from "../components/Transition/transition";
import dateTimeUtils from "../utils/dateTimeUtils";
import TagLine from "../components/LandingPage/TagLine";

const LandingPage = () => {
  const [count, setCount] = useState(100);
  const formattedCount = String(count).padStart(3, "0");
  const time = dateTimeUtils.currentTime();

  const brandTopRef = useRef(null);
  const brandContRef = useRef(null);
  const cityTimeRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count > 0) {
        setCount(count - 1);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [count]);

  useEffect(() => {
    const brand = brandTopRef.current;
    const brandCont = brandContRef.current;
    const cityTime = cityTimeRef.current;
    const btn = btnRef.current;

    gsap.fromTo(
      [brand, brandCont],
      {
        y: 200,
      },
      {
        y: 0,
        duration: 1,
        ease: "cubic-bezier(.075,.82,.165,1)",
      }
    );
    gsap.fromTo(
      cityTime,
      {
        y: 200,
      },
      {
        y: 0,
        duration: 0.6,
        ease: "cubic-bezier(.075,.82,.165,1)",
        delay: 1.2,
      }
    );
    gsap.fromTo(
      btn,
      {
        y: 150,
      },
      {
        y: 0,
        duration: 0.5,
        ease: "cubic-bezier(.075,.82,.165,1)",
        delay: 1.6,
      }
    );
  }, []);

  return (
    <div className="landingpage">
      <img src={josh3} alt="Your alt text" className="background-image" loading="lazy" />
      <div className="landingpage__container">
        <div className="landingpage__container__top">
          <div className="landingpage__container__top__brand" ref={brandContRef}>
            <p ref={brandTopRef}>ASPHALT</p>
          </div>
          <div className="landingpage__container__top__catch">
            <TagLine />
          </div>
        </div>
        <div className="landingpage__container__bottom" ref={cityTimeRef}>
          <p className="landingpage__container__bottom__city">PARIS</p>
          <p className="landingpage__container__bottom__time">{time}</p>
        </div>
      </div>
      <p className="count"> {formattedCount}</p>
      <button className="button" ref={btnRef}>
        SKIP INTRO
      </button>
    </div>
  );
};

const WrappedLanding = transition(LandingPage);

export default WrappedLanding;
