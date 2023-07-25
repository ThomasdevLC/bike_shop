import { useEffect, useRef } from "react";
import SplitType from "split-type";

const FinalPage = () => {
  const splitBrandRef = useRef(null); // Utilisez un nom de variable différent pour useRef.

  useEffect(() => {
    if (splitBrandRef.current) {
      const splitBrand = SplitType.create(splitBrandRef.current);
      const sChar = splitBrand.chars[1];
      const pChar = splitBrand.chars[2];
      gsap.fromTo(
        [sChar, pChar],
        { y: "30%" },
        { y: 0, stagger: 0.2, duration: 1.2, ease: "sine.inOut" }
      );
    }
  }, []);
  return (
    <div className="finalpage">
      <div className="finalpage__container">
        <div className="finalpage__container__shop">shop</div>
        <div className="finalpage__container__hidden">
          <div
            className="finalpage__container__hidden__brand"
            ref={splitBrandRef}
          >
            {" "}
            ASPHALT
          </div>
        </div>
        <div className="finalpage__container__time">sat 29 july</div>
      </div>
    </div>
  );
};

export default FinalPage;
