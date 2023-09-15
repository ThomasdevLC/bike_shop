import { useEffect, useRef } from "react";
import BlockRight from "../components/CycleThree/BlockRight";
import BlockMiddle from "../components/CycleThree/BlockMiddle";
import BlockLeft from "../components/CycleThree/BlockLeft";
import josh3 from "../assets/images/josh3.webp";

const CycleThree = () => {
  const leftRef = useRef(null);
  const middleRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const leftBlock = leftRef.current;
    const middleBlock = middleRef.current;
    const rightBlock = rightRef.current;

    gsap.fromTo([rightBlock, middleBlock, leftBlock], { x: "-150%" }, { x: 0, stagger: 0.4, duration: 1, ease: [0.075, 0.82, 0.165, 1] });
  }, []);

  return (
    <div className="cyclethree">
      <img src={josh3} alt="Your alt text" className="background-image" loading="lazy" />

      <div className="cyclethree__left" ref={leftRef}>
        <BlockLeft />
      </div>
      <div className="cyclethree__middle" ref={middleRef}>
        <BlockMiddle />
      </div>
      <div className="cyclethree__right" ref={rightRef}>
        <BlockRight />
      </div>
    </div>
  );
};

export default CycleThree;
