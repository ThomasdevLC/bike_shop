import { useEffect, useRef } from "react";
import SplitType from "split-type";
import capitalsUTC from "../../data/citiesData";
import uniqueIndex from "../../utils/uniqueIndex";

const BlockLeft = () => {
  const randomIndex = uniqueIndex(0, capitalsUTC.length - 1, 5);
  const lastCityLefttRef = useRef(null);

  useEffect(() => {
    if (lastCityLefttRef.current) {
      const city = SplitType.create(lastCityLefttRef.current);
      const splitCity = city.chars;
      gsap.from(splitCity, {
        opacity: 0,
        duration: 0.1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }
  }, []);
  return (
    <div className="blockleft">
      <div className="blockleft__top">
        <p className="blockleft__top__name">BIKKEY</p>
        <p className="blockleft__top__catch">RIDE THE WORLD</p>
      </div>
      <div className="blockleft__bottom">
        <p>{`UTC${capitalsUTC[11]?.utc}`} </p> <p>{capitalsUTC[11]?.city}</p>
        {randomIndex.map((index, i) => (
          <p
            key={index}
            ref={i === randomIndex.length - 1 ? lastCityLefttRef : null}
          >
            {capitalsUTC[index]?.city}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BlockLeft;
