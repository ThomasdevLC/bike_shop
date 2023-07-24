import capitalsUTC from "../../data/citiesData";
import uniqueIndex from "../../utils/uniqueIndex";
import { useRef, useEffect } from "react";

const BannerFive = () => {
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
        y: "-190%",
        duration: 0.5,
        ease: "power2.in",
      });

    return () => {
      // Arrêter l'animation lorsqu'on démonte le composant
      timeline.kill();
    };
  }, []);

  return (
    <div className="container">
      <div className="banner__five">
        {randomIndex.map((index, i) => (
          <div
            className="banner__five__city"
            key={i}
            ref={(el) => (cityRefs.current[i] = el)}
          >
            <p className="banner__five__city__time">{`UTC ${capitalsUTC[index]?.utc}`}</p>
            <p className="banner__five__city__name">
              {capitalsUTC[index]?.city}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerFive;
