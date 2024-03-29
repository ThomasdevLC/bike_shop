import { useEffect, useRef, useMemo } from "react";
import { useSlideContext } from "../../context/SlideContext";
import SplitType from "split-type";
import capitalsUTC from "../../data/citiesData";
import uniqueIndex from "../../utils/uniqueIndex";

const BlockLeft = () => {
  const { gsap } = window;
  const { currentSlideIndex } = useSlideContext();

  const randomIndex = useMemo(() => uniqueIndex(0, capitalsUTC.length - 1, 5), []);
  const lastCityLeftRef = useRef(null);

  useEffect(() => {
    if (currentSlideIndex === 3) {
      const city = SplitType.create(lastCityLeftRef.current);
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
    <div className="blockleft">
      <p className="blockleft__hidden">BIKKEY</p>

      <div className="blockleft__top">
        <p className="blockleft__top__name">ASPHALT</p>
        <p className="blockleft__top__catch">RIDE THE WORLD</p>
      </div>
      <div className="blockleft__bottom">
        <p>{`UTC${capitalsUTC[11]?.utc}`} </p> <p>{capitalsUTC[11]?.city}</p>
        {randomIndex.map((index, i) => (
          <p key={index} ref={i === randomIndex.length - 1 ? lastCityLeftRef : null}>
            {capitalsUTC[index]?.city}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BlockLeft;
