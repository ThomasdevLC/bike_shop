import { useRef, useEffect } from "react";
import capitalsUTC from "../../data/citiesData";
import uniqueIndex from "../../utils/uniqueIndex";

const BannerFour = () => {
  const randomIndex = uniqueIndex(0, capitalsUTC.length - 1, 18);
  const cityRefs = useRef([]);

  useEffect(() => {
    const { gsap } = window;

    const cities = cityRefs.current;
    const timeline = gsap.timeline();

    timeline.to(cities, {
      x: "-600%",
      duration: 2,
      ease: "power3.out",
    });

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div className="container">
      <div className="banner__four">
        {randomIndex.map((index, i) => (
          <div className="banner__four__city" key={i} ref={(el) => (cityRefs.current[i] = el)}>
            <p className="banner__four__city__time">{`UTC ${capitalsUTC[index]?.utc}`}</p>
            <p className="banner__four__city__name">{capitalsUTC[index]?.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerFour;
