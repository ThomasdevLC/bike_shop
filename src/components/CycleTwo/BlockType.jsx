import { useEffect } from "react";
import SplitType from "split-type";

const BlockType = ({ utc, city, nextCity }) => {
  useEffect(() => {
    const city = SplitType.create(".blocktype__bottom__citytwo");
    const splitBlockCity = city.chars;

    gsap.from(splitBlockCity, {
      opacity: 0,
      duration: 0.2,
      stagger: 0.1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="blocktype">
      <div className="blocktype__top">
        <p className="blocktype__top__name">BIKKEY</p>
        <p className="blocktype__top__catch">RIDE THE WORLD</p>
      </div>
      <div className="blocktype__bottom">
        <p className="blocktype__bottom__time">{`UTC ${utc}`}</p>
        <p className="blocktype__bottom__cityone">{city}</p>
        <p className="blocktype__bottom__citytwo">{nextCity}</p>
      </div>
    </div>
  );
};

export default BlockType;
