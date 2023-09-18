import { useEffect } from "react";
import singleSpanChar from "../../utils/singleSpanChar";

const BottomShape = () => {
  const className = "city";
  const cities = ["MADRID - UTC +1:00", "OSAKA - UTC +7:00", "BERLIN - UTC +01:00", "SYDNEY - UTC+10:00"];

  useEffect(() => {
    const citySpans = document.querySelectorAll(".city-span");

    gsap.fromTo(
      citySpans,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.03,
        delay: 1.5,
        stagger: {
          from: "random",
          each: 0.03,
        },
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className="blocklanding-container">
      {cities.map((city, index) => (
        <div className="blocklanding" key={index}>
          <div className="blocklanding__city">{singleSpanChar(city, className)}</div>
        </div>
      ))}
    </div>
  );
};

export default BottomShape;
