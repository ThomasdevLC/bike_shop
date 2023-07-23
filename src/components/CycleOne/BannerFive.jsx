import { useRef, useEffect } from "react";

const BannerFive = () => {
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
      }); // Start the second animation 0.5 seconds before the first animation ends

    return () => {
      // Arrêter l'animation lorsqu'on démonte le composant
      timeline.kill();
    };
  }, []);

  const numberOfCities = 20; // Le nombre total d'éléments "city" que vous voulez créer

  const renderCities = () => {
    const cities = [];

    for (let i = 0; i < numberOfCities; i++) {
      cities.push(
        <div
          className="banner__five__city"
          key={i}
          ref={(el) => (cityRefs.current[i] = el)}
        >
          <p className="banner__five__city__time">UTC -05:00</p>
          <p className="banner__five__city__name">Mexico</p>
        </div>
      );
    }

    return cities;
  };

  return (
    <div className="container">
      <div className="banner__five">
        {renderCities()}
        {/* Ajouter les autres div "city" ici */}
      </div>
    </div>
  );
};

export default BannerFive;
