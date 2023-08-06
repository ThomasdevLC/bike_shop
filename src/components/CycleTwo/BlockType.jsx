import { useEffect, useRef } from "react";
import SplitType from "split-type";

const BlockType = ({ utc, city, nextCity }) => {
  const splitBlockCityRef = useRef(null);

  useEffect(() => {
    const splitBlockCity = SplitType.create(splitBlockCityRef.current);
    const chars = splitBlockCity.chars;

    gsap.from(chars, {
      opacity: 0,
      duration: 0.2,
      stagger: 0.2,
      ease: "power3.out",
    });

    return () => {
      // Cleanup the SplitType instance when the component is unmounted
      splitBlockCity.revert();
    };
  }, [city]); // Re-run the effect whenever 'city' changes

  return (
    <div className="blocktype">
      <div className="blocktype__top">
        <p className="blocktype__top__name">BIKKEY</p>
        <p className="blocktype__top__catch">RIDE THE WORLD</p>
      </div>
      <div className="blocktype__bottom">
        <p className="blocktype__bottom__time">{`UTC ${utc}`}</p>
        <p className="blocktype__bottom__cityone">{city}</p>
        <p ref={splitBlockCityRef} className="blocktype__bottom__citytwo">
          {nextCity}
        </p>
      </div>
    </div>
  );
};

export default BlockType;
