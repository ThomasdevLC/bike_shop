import { useEffect, useRef } from "react";
import BlockTypeScale from "../components/CycleTwo/BlockTypeScale";
import BlockType from "../components/CycleTwo/BlockType";
import capitalsUTC from "../data/citiesData";
import josh2 from "../assets/images/josh2.webp";

const CycleTwo = () => {
  const topRightRef = useRef(null);
  const bottomRef = useRef(null);
  useEffect(() => {
    // Animation logic for cycletwo__top__right sliding to the right and off the screen
    gsap.to(topRightRef.current, {
      x: "150%",
      duration: 0.7,
      delay: 2.2,
      ease: "Power3.inOut",
    });
    // Animation logic for cycletwo__bottom descending down
    gsap.to(bottomRef.current, {
      y: "150%",
      duration: 0.8,
      delay: 2.2,
      ease: "Power3.inOut",
    });
  }, []);
  return (
    <div className="cycletwo">
      <img src={josh2} alt="Your alt text" className="background-image" />

      <div className="cycletwo__top">
        <BlockTypeScale utc={capitalsUTC[8]?.utc} city={capitalsUTC[8]?.city} />
        <div ref={topRightRef} className="cycletwo__top__right">
          <BlockType
            utc={capitalsUTC[0]?.utc}
            city={capitalsUTC[0]?.city}
            nextCity={capitalsUTC[1]?.city}
          />
        </div>
      </div>
      <div ref={bottomRef} className="cycletwo__bottom">
        <BlockType
          utc={capitalsUTC[2]?.utc}
          city={capitalsUTC[2]?.city}
          nextCity={capitalsUTC[3]?.city}
        />
        <BlockType
          utc={capitalsUTC[4]?.utc}
          city={capitalsUTC[4]?.city}
          nextCity={capitalsUTC[6]?.city}
        />
      </div>
    </div>
  );
};

export default CycleTwo;
