import { useEffect, useRef } from "react";
import SplitType from "split-type";
import capitalsUTC from "../../data/citiesData";
import uniqueIndex from "../../utils/uniqueIndex";

const BlockMiddle = () => {
  const randomIndex = uniqueIndex(0, capitalsUTC.length - 1, 5);
  const lastCityMiddletRef = useRef(null);

  useEffect(() => {
    if (lastCityMiddletRef.current) {
      const city = SplitType.create(lastCityMiddletRef.current);
      const splitCity = city.chars;
      gsap.from(splitCity, {
        delay: 1,
        opacity: 0,
        duration: 0.1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }
  }, []);
  return (
    <div className="blockmiddle">
      <p className="blockmiddle__hidden">BIKKEY</p>

      <div className="blockmiddle__top">
        <p className="blockmiddle__top__name">BIKKEY</p>
        <p className="blockmiddle__top__catch">RIDE THE WORLD</p>
      </div>
      <div className="blockmiddle__bottom">
        <p>{`UTC${capitalsUTC[8]?.utc}`} </p> <p>{capitalsUTC[8]?.city}</p>
        {randomIndex.map((index, i) => (
          <p
            key={index}
            ref={i === randomIndex.length - 1 ? lastCityMiddletRef : null}
          >
            {capitalsUTC[index]?.city}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BlockMiddle;
