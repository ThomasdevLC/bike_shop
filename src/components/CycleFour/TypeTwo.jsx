import { useEffect, useRef } from "react";
import SplitType from "split-type";
import capitalsUTC from "../../data/citiesData";
import uniqueIndex from "../../utils/uniqueIndex";

const TypeTwo = () => {
  const randomIndex = uniqueIndex(0, capitalsUTC.length - 1, 15);
  const lastCityMiddletRef = useRef(null);

  useEffect(() => {
    if (lastCityMiddletRef.current) {
      const city = SplitType.create(lastCityMiddletRef.current);
      const splitCity = city.chars;
      gsap.from(splitCity, {
        delay: 2.2,
        opacity: 0,
        duration: 0.1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }
  }, []);
  return (
    <div className="typetwo">
      <div className="typetwo__bottom">
        <p>{`UTC${capitalsUTC[8]?.utc}`} </p> <p>{capitalsUTC[8]?.city}</p>
        {randomIndex.map((index, i) => (
          <p
            key={index}
            ref={i === randomIndex.length - 1 ? lastCityMiddletRef : null}
          >
            {capitalsUTC[index]?.city}
          </p>
        ))}
        <div className="typetwo__top">
          <p className="typetwo__top__catch">RIDE THE WORLD</p>
          <p className="typetwo__top__name">ASPHALT</p>
        </div>
      </div>
    </div>
  );
};

export default TypeTwo;
