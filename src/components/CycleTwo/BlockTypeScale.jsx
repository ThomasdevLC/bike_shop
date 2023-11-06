/* eslint-disable react/prop-types */

import { useEffect, useRef } from "react";
import { useSlideContext } from "../../context/SlideContext";
import SplitType from "split-type";

const BlockTypeScale = () => {
  const { gsap } = window;
  const { currentSlideIndex } = useSlideContext();

  const blockScaleRef = useRef(null);

  useEffect(() => {
    if (currentSlideIndex === 2) {
      const city = SplitType.create(".blocktypescale__bottom__citytwo");
      const splitCity = city.chars;
      const mandarin = SplitType.create(".blocktypescale__bottom__citythree");
      const splitMandarin = mandarin.chars;

      gsap.from(splitCity, {
        opacity: 0,
        duration: 0.2,
        stagger: 0.2,
        ease: "power3.inOut",
      });
      gsap.fromTo(
        blockScaleRef.current,
        {
          scaleX: 1,
          scaleY: 1,
          y: "0%",
          transformOrigin: "50% 50%",
        },
        {
          delay: 1,
          duration: 1,
          scaleX: 2,
          scaleY: 2,
          y: "85%",
          transformOrigin: "0% 50%",
          ease: "power3.inOut",
        }
      );

      gsap.from(splitMandarin, {
        delay: 2,
        opacity: 0,
        duration: 0.2,
        stagger: 0.3,
        ease: "power3.out",
      });
    }
  }, [currentSlideIndex, gsap]);

  return (
    <div className="blocktypescale">
      <div className="blocktypescale__top">
        <p className="blocktypescale__top__name">ASPHALT</p>
        <p className="blocktypescale__top__catch">RIDE THE WORLD</p>
      </div>
      <div ref={blockScaleRef} className="blocktype__bottom">
        <p className="blocktypescale__bottom__time">UTC -07:00</p>
        <p className="blocktypescale__bottom__cityone">LOS ANGELES</p>
        <p className="blocktypescale__bottom__citytwo">
          BEIJING <span className="blocktypescale__bottom__citythree">北京 </span>
        </p>
      </div>
    </div>
  );
};

export default BlockTypeScale;
