import { useEffect, useRef } from "react";
import BlockRight from "../components/CycleThree/BlockRight";
import BlockMiddle from "../components/CycleThree/BlockMiddle";
import BlockLeft from "../components/CycleThree/BlockLeft";

const CycleThree = () => {
  const leftRef = useRef(null);
  const middleRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const leftBlock = leftRef.current;
    const middleBlock = middleRef.current;
    const rightBlock = rightRef.current;

    gsap.fromTo(
      [rightBlock, middleBlock, leftBlock],
      { x: "-200%" },
      { x: 0, stagger: 0.5, duration: 1.5, ease: "sine.inOut" }
    );

    gsap.fromTo(
      [rightBlock, middleBlock, leftBlock],
      { y: 0 },
      {
        y: "200%",
        delay: 3.6,
        stagger: 0.15,
        duration: 1.5,
        ease: "sine.inOut",
      }
    );
  }, []);

  return (
    <div className="cyclethree">
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
