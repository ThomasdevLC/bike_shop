import { useEffect, useRef } from "react";
import SplitType from "split-type";

const BlockType = ({ utc, city, nextCity }) => {
  const blockTypeBottomRef = useRef(null);

  useEffect(() => {
    const city = SplitType.create(".blocktype__bottom__citytwo");
    const splitCity = city.chars;

    gsap.from(splitCity, {
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
    });
  }, [city]);

  return (
    <div className="blocktype">
      <div className="blocktype__top">
        <p className="blocktype__top__name">BIKKEY</p>
        <p className="blocktype__top__catch">RIDE THE WORLD</p>
      </div>
      <div ref={blockTypeBottomRef} className="blocktype__bottom">
        <p className="blocktype__bottom__time">{`UTC ${utc}`}</p>
        <p className="blocktype__bottom__cityone">{city}</p>
        <p className="blocktype__bottom__citytwo">{nextCity}</p>
      </div>
    </div>
  );
};

export default BlockType;
