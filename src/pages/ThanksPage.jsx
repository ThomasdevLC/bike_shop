import { useEffect, useRef } from "react";
import rider from "../assets/images/rider.jpg";
const ThanksPage = () => {
  const textTopRef = useRef(null);
  const textBottomRef = useRef(null);
  const spanTopRef = useRef(null);
  const boxContainerRef = useRef(null);
  const boxRiderRef = useRef(null);

  useEffect(() => {
    const top = textTopRef.current;
    const bottom = textBottomRef.current;
    const span = spanTopRef.current;
    const riderContainer = boxContainerRef.current;
    const rider = boxRiderRef.current;

    gsap.to([riderContainer], {
      rotate: 6,
      ease: "power3.out",
    });
    gsap.fromTo(
      [top, bottom, span],
      { y: "110%" },
      { y: 0, stagger: 0.4, duration: 0.6 }
    );
    gsap.fromTo(
      [rider],
      { scaleY: 1.5 },
      {
        scaleY: 0,
        duration: 1,
        transformOrigin: "top ",
      }
    );
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
      <div className="thankspage__box" ref={boxContainerRef}>
        <div className="thankspage__box__slide" ref={boxRiderRef}></div>
        <div className="thankspage__box__slide__image">
          <img src={rider} alt="rider picture" />
        </div>
      </div>
    </div>
  );
};

export default ThanksPage;
