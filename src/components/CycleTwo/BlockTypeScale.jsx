import { useState, useEffect, useRef } from "react";
import capitalsUTC from "../../data/citiesData";

const BlockTypeScale = () => {
  const [randomIndex, setRandomIndex] = useState(null);
  const blockTypeBottomRef = useRef(null);

  useEffect(() => {
    getRandomIndex();
  }, []);

  //   useEffect(() => {
  //     const delay = setTimeout(() => {
  //       if (blockTypeBottomRef.current) {
  //         gsap.to(blockTypeBottomRef.current, {
  //           duration: 1,
  //           scaleX: 2,
  //           scaleY: 2,
  //           y: "100%",
  //           transformOrigin: "0% 50%", // Set the transform origin to keep the left edge fixed

  //           ease: "power3.inOut",
  //         });
  //       }
  //     }, 1000);

  //     return () => clearTimeout(delay);
  //   }, []);

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
        <p className="blocktype__bottom__time">{`UTC ${capitalsUTC[randomIndex]?.utc}`}</p>
        <p className="blocktype__bottom__cityone">
          {capitalsUTC[randomIndex]?.city}
        </p>
        <p className="blocktype__bottom__citytwo">
          {capitalsUTC[randomIndex + 1]?.city}
        </p>
      </div>
    </div>
  );
};

export default BlockTypeScale;
