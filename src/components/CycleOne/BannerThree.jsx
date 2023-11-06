import { useRef, useEffect, useMemo } from "react";
import { useSlideContext } from "../../context/SlideContext";
import capitalsUTC from "../../data/citiesData";
import uniqueIndex from "../../utils/uniqueIndex";

const Bannerthree = () => {
  const { gsap } = window;
  const { currentSlideIndex } = useSlideContext();

  const randomIndex = useMemo(() => {
    return uniqueIndex(0, capitalsUTC.length - 1, 18);
  }, []);
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

  return (
    <div className="container">
      <div className="banner__three">
        {randomIndex.map((index, i) => (
          <div className="banner__three__city" key={i} ref={(el) => (cityRefs.current[i] = el)}>
            <p className="banner__three__city__time">{`UTC ${capitalsUTC[index]?.utc}`}</p>
            <p className="banner__three__city__name">{capitalsUTC[index]?.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bannerthree;
