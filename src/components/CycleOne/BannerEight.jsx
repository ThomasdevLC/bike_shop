import { useRef, useEffect } from "react";
import capitalsUTC from "../../data/citiesData";
import uniqueIndex from "../../utils/uniqueIndex";
const BannerEight = () => {
  const randomIndex = uniqueIndex(0, capitalsUTC.length - 1, 18);
  const cityRefs = useRef([]);

  useEffect(() => {
    const cities = cityRefs.current;
    const timeline = gsap.timeline();

    timeline.to(cities, {
      x: "-600%",
      duration: 2,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="container">
      <div className="banner__eight">
        {randomIndex.map((index, i) => (
          <div className="banner__eight__city" key={i} ref={(el) => (cityRefs.current[i] = el)}>
            <p className="banner__eight__city__time">{`UTC ${capitalsUTC[index]?.utc}`}</p>
            <p className="banner__eight__city__name">{capitalsUTC[index]?.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerEight;
