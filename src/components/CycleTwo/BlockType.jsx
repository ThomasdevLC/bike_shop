import { useEffect, useRef } from "react";
import SplitType from "split-type";

const BlockType = ({ utc, city, nextCity }) => {
  const blockTypeBottomRef = useRef(null);

  useEffect(() => {
    const city = SplitType.create(".blocktype__bottom__citytwo");
    const splitCity = city.chars;

    gsap.from(splitCity, {
      opacity: 0, // Start with opacity 0 so that characters are hidden
      duration: 1, // Animation duration
      stagger: 0.1, // Stagger the appearance of characters
      ease: "power3.out", // Easing function
    });
  }, [city]); // Run the effect whenever the randomIndex changes

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
