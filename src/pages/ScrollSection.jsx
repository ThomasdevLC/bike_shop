import { useRef } from "react";
import CycleOne from "./CycleOne";
import CycleTwo from "./CycleTwo";
import CycleThree from "./CycleThree";
import CycleFour from "./CycleFour";
import FinalPage from "./FinalPage";
import CycleSection from "../utils/CycleSection";

const ScrollSection = () => {
  const sectionRefOne = useRef(null);
  const sectionRefTwo = useRef(null);
  const sectionRefThree = useRef(null);
  const sectionRefFour = useRef(null);
  const sectionRefFinal = useRef(null);

  return (
    <div className="scroll-section-outer">
      <div className="scroll-section">
        <div className="scroll-section-inner">
          <CycleSection sectionRef={sectionRefOne} cycleComponent={<CycleOne />} />
        </div>
        <div className="scroll-section-inner">
          <CycleSection sectionRef={sectionRefTwo} cycleComponent={<CycleTwo />} />
        </div>
        <div className="scroll-section-inner">
          <CycleSection sectionRef={sectionRefThree} cycleComponent={<CycleThree />} />
        </div>
        <div className="scroll-section-inner">
          <CycleSection sectionRef={sectionRefFour} cycleComponent={<CycleFour />} />
        </div>
        <div className="scroll-section-inner">
          <CycleSection sectionRef={sectionRefFinal} cycleComponent={<FinalPage />} />
        </div>
      </div>
    </div>
  );
};

export default ScrollSection;
