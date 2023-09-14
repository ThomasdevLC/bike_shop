/* eslint-disable react/prop-types */

import { useEffect, useRef } from "react";
import josh3 from "../assets/images/josh3.webp";
import transition from "../components/Transition/transition";
import dateTimeUtils from "../utils/dateTimeUtils";
import TagLine from "../components/LandingPage/TagLine";
// import Count from "../components/LandingPage/Count";
import ScrollSection from "./ScrollSection";

const LandingPage = () => {
  const time = dateTimeUtils.currentTime();
  const brandTopRef = useRef(null);
  const brandContRef = useRef(null);
  const cityTimeRef = useRef(null);
  const btnRef = useRef(null);

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
        duration: 1.2,
        ease: "cubic-bezier(.075,.82,.165,1.5)",
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
        ease: "cubic-bezier(.075,.82,.165,1.5)",
        delay: 0.9,
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
        delay: 1.2,
      }
    );
  }, []);

  return (
    <>
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
        {/* <div className="">
          <Count />
        </div> */}
        <button className="button" ref={btnRef}>
          SCROLL DOWN{" "}
        </button>
      </div>
      <ScrollSection />
    </>
  );
};

const WrappedLanding = transition(LandingPage);

export default WrappedLanding;
