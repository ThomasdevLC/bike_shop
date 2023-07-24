import { useEffect, useRef } from "react";
import SplitType from "split-type";

const BlockTypeScale = ({ utc, city }) => {
  const blockTypeBottomRef = useRef(null);

  useEffect(() => {
    const city = SplitType.create(".blocktype__bottom__citytwo");
    const splitCity = city.chars;

    gsap.from(splitCity, {
      opacity: 0, // Start with opacity 0 so that characters are hidden
      duration: 1, // Animation duration
      stagger: 0.1, // Stagger the appearance of characters
      ease: "power3.out", // Easing function
    });
  }, [city]); // Run the effect whenever the randomIndex changes

  useEffect(() => {
    const delay = setTimeout(() => {
      if (blockTypeBottomRef.current) {
        gsap.to(blockTypeBottomRef.current, {
          duration: 1,
          scaleX: 2,
          scaleY: 2,
          y: "100%",
          transformOrigin: "0% 50%", // Set the transform origin to keep the left edge fixed

          ease: "power3.inOut",
        });
      }
    }, 1800);

    return () => clearTimeout(delay);
  }, []);

  const getRandomIndex = () => {
    const newIndex = Math.floor(Math.random() * capitalsUTC.length);
    setRandomIndex(newIndex);
  };

  return (
    <div className="blocktype">
      <div className="blocktype__top">
        <p className="blocktype__top__name">BIKKEY</p>
        <p className="blocktype__top__catch">RIDE THE WORLD</p>
      </div>
      <div ref={blockTypeBottomRef} className="blocktype__bottom">
        <p className="blocktype__bottom__time">{`UTC ${utc}`}</p>
        <p className="blocktype__bottom__cityone">{city}</p>
        <p className="blocktype__bottom__citytwo">BEIJING</p>
      </div>
    </div>
  );
};

export default BlockTypeScale;
