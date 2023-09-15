import { useEffect, useRef } from "react";
import BlockTypeScale from "../components/CycleTwo/BlockTypeScale";
import BlockType from "../components/CycleTwo/BlockType";
import capitalsUTC from "../data/citiesData";
import josh2 from "../assets/images/josh2.webp";

const CycleTwo = () => {
  const topRightRef = useRef(null);
  const bottomRef = useRef(null);
  useEffect(() => {
    const topCities = topRightRef.current;
    const bottomCities = bottomRef.current;

    gsap.to(topCities, {
      x: "150%",
      duration: 0.8,
      delay: 1.2,
      ease: "Power3.inOut",
    });
    gsap.to(bottomCities, {
      y: "150%",
      duration: 0.8,
      delay: 1.2,
      ease: "Power3.inOut",
    });
  }, []);
  return (
    <div className="cycletwo">
      <img src={josh2} alt="Your alt text" className="background-image" loading="lazy" />

      <div className="cycletwo__top">
        <BlockTypeScale utc={capitalsUTC[8]?.utc} city={capitalsUTC[8]?.city} />
        <div ref={topRightRef} className="cycletwo__top__right">
          <BlockType utc={capitalsUTC[0]?.utc} city={capitalsUTC[0]?.city} nextCity={capitalsUTC[1]?.city} />
        </div>
      </div>
      <div ref={bottomRef} className="cycletwo__bottom">
        <BlockType utc={capitalsUTC[2]?.utc} city={capitalsUTC[2]?.city} nextCity={capitalsUTC[3]?.city} />
        <BlockType utc={capitalsUTC[4]?.utc} city={capitalsUTC[4]?.city} nextCity={capitalsUTC[6]?.city} />
      </div>
    </div>
  );
};

export default CycleTwo;
