import { useEffect, useRef } from "react";
import rider from "../assets/images/rider.jpg";
const ThanksPage = () => {
  const textTopRef = useRef(null);
  const textBottomRef = useRef(null);
  const spanTopRef = useRef(null);

  useEffect(() => {
    const top = textTopRef.current;
    const bottom = textBottomRef.current;
    const span = spanTopRef.current;

    gsap.fromTo(
      [top, bottom, span],
      { y: "110%" },
      { y: 0, stagger: 0.4, duration: 0.8, ease: "sine" }
    );

    gsap.fromTo(blockTypeBottomRef.current, {
       
        {scaleY: 0},
        {scaleY: 2, delay: 0.4,
            duration: 0.4, },
    
        ease: "power3.inOut",
      });

  }, []);

  return (
    <div className="thankspage">
      <div className="thankspage__text">
        <div className="thankspage__text__top">
          <p className="thankspage__text__top__txt" ref={textTopRef}>
            You can
          </p>
        </div>
        <div className="thankspage__text__bottom">
          <p className="thankspage__text__bottom__txt " ref={textBottomRef}>
            ride <span ref={spanTopRef}>now</span>
          </p>
        </div>
      </div>
      <div className="thankspage__image">
        <img src={rider} alt="rider picture" />
      </div>
    </div>
  );
};

export default ThanksPage;
