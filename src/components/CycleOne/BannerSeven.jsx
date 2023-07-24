import { useRef, useEffect } from "react";
import capitalsUTC from "../../data/citiesData";
import uniqueIndex from "../../utils/uniqueIndex";

const BannerSeven = () => {
  const randomIndex = uniqueIndex(0, capitalsUTC.length - 1, 18);
  const cityRefs = useRef([]);

  useEffect(() => {
    const cities = cityRefs.current;
    const timeline = gsap.timeline();

    timeline
      .to(cities, {
        x: "-600%",
        duration: 2,
        ease: "power3.out",
      })
      .to(cities, {
        x: "-610%",
        y: "500%",
        duration: 0.7,
        ease: "power2.in",
      });

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div className="container">
      <div className="banner__seven">
        {randomIndex.map((index, i) => (
          <div
            className="banner__seven__city"
            key={i}
            ref={(el) => (cityRefs.current[i] = el)}
          >
            <p className="banner__seven__city__time">{`UTC ${capitalsUTC[index]?.utc}`}</p>
            <p className="banner__seven__city__name">
              {capitalsUTC[index]?.city}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerSeven;
