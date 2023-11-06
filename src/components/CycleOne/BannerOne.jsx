import { useRef, useEffect } from "react";
import { useSlideContext } from "../../context/SlideContext";

const BannerOne = () => {
  const { gsap } = window;
  const { currentSlideIndex } = useSlideContext();

  const cityRefs = useRef([]);
  useEffect(() => {
    if (currentSlideIndex === 1) {
      const cities = cityRefs.current;

      gsap.fromTo(
        cities,
        {
          x: 0,
        },
        {
          x: "-600%",
          duration: 2,
          ease: "power3.out",
        }
      );
    }
  }, [gsap, currentSlideIndex]);

  const numberOfCities = 10;

  const renderCities = () => {
    const cities = [];

    for (let i = 0; i < numberOfCities; i++) {
      cities.push(
        <div className="banner__one__city" key={i} ref={(el) => (cityRefs.current[i] = el)}>
          <p className="banner__one__city__time">UTC -05:00</p>
          <p className="banner__one__city__name">Mexico</p>
        </div>
      );
    }

    return cities;
  };

  return (
    <div className="container">
      <div className="banner__one">{renderCities()}</div>
    </div>
  );
};

export default BannerOne;
