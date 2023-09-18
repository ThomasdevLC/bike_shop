import { useEffect, useRef } from "react";
import useSingleSpanChar from "../../utils/useSingleSpanChar.jsx";

const BottomShape = () => {
  const className = "city";
  const cityOne = "PARIS - 10:58 PM";
  const cityTwo = "OSAKA - UTC +7:00";

  const spanCityOne = useSingleSpanChar(cityOne, className);
  const spanCityTwo = useSingleSpanChar(cityTwo, className);

  const cityShapeRefOne = useRef(null);
  const cityShapeRefTwo = useRef(null);

  useEffect(() => {
    const cityTimesOne = cityShapeRefOne.current.querySelectorAll(".city-span");
    const cityTimesTwo = cityShapeRefTwo.current.querySelectorAll(".city-span");

    gsap.fromTo(
      [cityTimesOne, cityTimesTwo],
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.075,
        delay: 0.8,
        stagger: {
          from: "random",
          each: 0.05,
        },
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div className="shape">
      <div className="shape__city" ref={cityShapeRefOne}>
        {spanCityOne}
      </div>
      <div className="shape__city" ref={cityShapeRefTwo}>
        {spanCityTwo}
      </div>
    </div>
  );
};

export default BottomShape;
