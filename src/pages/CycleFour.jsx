import { useEffect, useRef } from "react";
import BoxOne from "../components/CycleFour/BoxOne";
import BoxTwo from "../components/CycleFour/BoxTwo";
import BoxThree from "../components/CycleFour/BoxThree";
import BoxFour from "../components/CycleFour/BoxFour";
import josh4 from "../assets/images/josh4.webp";

const CycleFour = () => {
  const oneRef = useRef(null);
  const twoRef = useRef(null);
  const threeRef = useRef(null);
  const fourRef = useRef(null);

  useEffect(() => {
    const BoxOneX = oneRef.current;
    const BoxTwoX = twoRef.current;
    const BoxThreeX = threeRef.current;
    const BoxFourX = fourRef.current;

    gsap.fromTo(
      [BoxOneX, BoxTwoX, BoxThreeX, BoxFourX],
      { x: "-120%" },
      { x: 0, stagger: 0.3, duration: 0.8, ease: "sine.inOut" }
    );
    gsap.fromTo(
      [BoxOneX, BoxTwoX, BoxThreeX, BoxFourX],
      { y: 0 },
      {
        y: "-700%",
        delay: 2.4,
        stagger: 0.02,
        duration: 1,
        ease: "sine.inOut",
      }
    );
  }, []);

  return (
    <div className="cyclefour">
      <img
        src={josh4}
        alt="Your alt text"
        className="background-image"
        loading="lazy"
      />

      <div className="cyclefour__boxone" ref={oneRef}>
        <BoxOne />
      </div>
      <div className="cyclefour__boxtwo" ref={twoRef}>
        <BoxTwo />
      </div>
      <div className="cyclefour__boxthree" ref={threeRef}>
        <BoxThree />
      </div>
      <div className="cyclefour__boxfour" ref={fourRef}>
        <BoxFour />
      </div>
    </div>
  );
};

export default CycleFour;
