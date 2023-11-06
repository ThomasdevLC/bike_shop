import { useEffect, useRef, useMemo } from "react";
import { useSlideContext } from "../../context/SlideContext";
import SplitType from "split-type";
import capitalsUTC from "../../data/citiesData";
import uniqueIndex from "../../utils/uniqueIndex";

const BlockRight = () => {
  const { gsap } = window;
  const { currentSlideIndex } = useSlideContext();

  const randomIndex = useMemo(() => uniqueIndex(0, capitalsUTC.length - 1, 5), []);

  const lastCityRightRef = useRef(null);

  useEffect(() => {
    if (currentSlideIndex === 3) {
      const city = SplitType.create(lastCityRightRef.current);
      const splitCity = city.chars;
      gsap.from(splitCity, {
        delay: 1,
        opacity: 0,
        duration: 0.1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }
  }, [gsap, currentSlideIndex]);

  return (
    <div className="blockright">
      <p className="blockright__hidden">BIKKEY</p>

      <div className="blockright__top">
        <p className="blockright__top__name">ASPHALT</p>
        <p className="blockright__top__catch">RIDE THE WORLD</p>
      </div>
      <div className="blockright__bottom">
        {randomIndex.map((index, i) => (
          <p key={index} ref={i === randomIndex.length - 1 ? lastCityRightRef : null}>
            {capitalsUTC[index]?.city}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BlockRight;
