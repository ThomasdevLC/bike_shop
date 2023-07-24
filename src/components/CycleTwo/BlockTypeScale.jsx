import { useEffect, useRef } from "react";
import SplitType from "split-type";

const BlockTypeScale = ({ utc, city }) => {
  const blockTypeBottomRef = useRef(null);

  useEffect(() => {
    const city = SplitType.create(".blocktypescale__bottom__citytwo");
    const splitCity = city.chars;
    const mandarin = SplitType.create(".blocktypescale__bottom__citythree");
    const splitMandarin = mandarin.chars;

    gsap.from(splitCity, {
      opacity: 0, // Start with opacity 0 so that characters are hidden
      duration: 1, // Animation duration
      stagger: 0.1, // Stagger the appearance of characters
      ease: "power3.out", // Easing function
    });

    gsap.from(splitMandarin, {
      delay: 2.8,
      opacity: 0, // Start with opacity 0 so that characters are hidden
      duration: 1, // Animation duration
      stagger: 0.3, // Stagger the appearance of characters
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

  return (
    <div className="blocktypescale">
      <div className="blocktypescale__top">
        <p className="blocktypescale__top__name">BIKKEY</p>
        <p className="blocktypescale__top__catch">RIDE THE WORLD</p>
      </div>
      <div ref={blockTypeBottomRef} className="blocktype__bottom">
        <p className="blocktypescale__bottom__time">{`UTC ${utc}`}</p>
        <p className="blocktypescale__bottom__cityone">{city}</p>
        <p className="blocktypescale__bottom__citytwo">
          BEIJING{" "}
          <span className="blocktypescale__bottom__citythree">北京 </span>
        </p>
      </div>
    </div>
  );
};

export default BlockTypeScale;
