/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import josh3 from "../assets/images/josh3.webp";
import world from "../assets/images/world.gif";
import transition from "../components/Transition/transition";
import dateTimeUtils from "../utils/dateTimeUtils";
import TagLine from "../components/LandingPage/TagLine";
import ScrollSection from "./ScrollSection";
import BottomShape from "../components/LandingPage/BottomShape";

const LandingPage = () => {
  const time = dateTimeUtils.currentTime();
  const brandTopRef = useRef(null);
  const brandContRef = useRef(null);
  const cityRef = useRef(null);
  const timeRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const brand = brandTopRef.current;
    const brandCont = brandContRef.current;
    const city = cityRef.current;
    const time = timeRef.current;
    const btn = btnRef.current;

    gsap.fromTo(
      [brand, brandCont],
      {
        y: 250,
      },
      {
        y: 0,
        duration: 1,
        ease: [0.075, 0.82, 0.165, 1.5],
      }
    );
    gsap.fromTo(
      [city, time],
      {
        y: 300,
      },
      {
        y: 0,
        duration: 0.6,
        delay: 0.9,
        stagger: 0.2,
        ease: [0.075, 0.82, 0.165, 1.5],
      }
    );
    gsap.fromTo(
      btn,
      {
        y: 150,
      },
      {
        y: 0,
        duration: 0.6,
        delay: 1.5,
        ease: [0.075, 0.82, 0.165, 1.5],
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
              <div className="landingpage__container__top__catch__world">
                <img src={world} alt="world GIF" />
              </div>
            </div>
          </div>

          <div className="landingpage__container__bottom">
            <BottomShape />
            <div className="landingpage__container__bottom__city">
              <p ref={cityRef}>PARIS</p>
              <p ref={timeRef}>{time}</p>
            </div>
          </div>
        </div>

        <button className="button" ref={btnRef}>
          SCROLL DOWN
          <span className="button__arrow material-symbols-outlined">expand_more</span>
        </button>
      </div>
      <ScrollSection />
    </>
  );
};

const WrappedLanding = transition(LandingPage);

export default WrappedLanding;
