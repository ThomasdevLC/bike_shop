import { useRef, useEffect } from "react";

const BannerOne = () => {
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
        y: "-220%",
        duration: 0.8,
        ease: "power2.in",
      });

    return () => {
      timeline.kill();
    };
  }, []);

  const numberOfCities = 10;

  const renderCities = () => {
    const cities = [];

    for (let i = 0; i < numberOfCities; i++) {
      cities.push(
        <div
          className="banner__one__city"
          key={i}
          ref={(el) => (cityRefs.current[i] = el)}
        >
          <p className="banner__one__city__time">UTC -05:00</p>
          <p className="banner__one__city__name">Mexico</p>
        </div>
      );
    }

    return cities;
  };

  return (
    <div className="container">
      <div className="banner__one">
        {renderCities()}
        {/* Ajouter les autres div "city" ici */}
      </div>
    </div>
  );
};

export default BannerOne;
