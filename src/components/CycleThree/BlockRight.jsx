import { useEffect, useRef } from "react";
import SplitType from "split-type";

import capitalsUTC from "../../data/citiesData";
import uniqueIndex from "../../utils/uniqueIndex";

const BlockRight = () => {
  const randomIndex = uniqueIndex(0, capitalsUTC.length - 1, 5);
  const lastCityRef = useRef(null);

  useEffect(() => {
    if (lastCityRef.current) {
      const city = SplitType.create(lastCityRef.current);
      const splitCity = city.chars;
      gsap.from(splitCity, {
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <div className="blockright">
      <div className="blockright__top">
        <p className="blockright__top__name">BIKKEY</p>
        <p className="blockright__top__catch">RIDE THE WORLD</p>
      </div>
      <div className="blockright__bottom">
        {randomIndex.map((index, i) => (
          <p
            key={index}
            ref={i === randomIndex.length - 1 ? lastCityRef : null}
          >
            {capitalsUTC[index]?.city}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BlockRight;
