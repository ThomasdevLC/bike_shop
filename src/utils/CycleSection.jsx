/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

const CycleSection = ({ sectionRef, cycleComponent }) => {
  const [showCycle, setShowCycle] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const halfWindowHeight = windowHeight / 1.001;
      if (rect.top + rect.height / 1.001 >= windowHeight - halfWindowHeight && rect.bottom - rect.height / 1.001 <= halfWindowHeight) {
        setShowCycle(true);
      } else {
        setShowCycle(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);
    scrollHandler();

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [sectionRef]);

  return (
    <div className="scroll-section" ref={sectionRef}>
      <div className="scroll-section-inner">{showCycle && cycleComponent}</div>
    </div>
  );
};

export default CycleSection;
