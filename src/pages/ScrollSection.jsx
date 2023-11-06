import { useEffect, useRef, useState } from "react";
import { useSlideContext } from "../context/SlideContext";

import LandingPage from "./LandingPage";
import CycleOne from "./CycleOne";
import CycleTwo from "./CycleTwo";
import CycleThree from "./CycleThree";
import CycleFour from "./CycleFour";
import FinalPage from "./FinalPage";

const ScrollSection = () => {
  const { gsap } = window;
  const slidesRef = useRef([]);
  const { currentSlideIndex, updateSlideIndex } = useSlideContext();
  const [isAnimating, setIsAnimating] = useState(false);
  const [prevSlideIndex, setPrevSlideIndex] = useState(0);

  useEffect(() => {
    updateSlideIndex(0);
  }, []);

  useEffect(() => {
    const slides = slidesRef.current;
    const slideCount = slides.length;

    const showSlide = (index) => {
      if (isAnimating) return;
      setIsAnimating(true);

      gsap.to(slides[index], {
        clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.8,
        ease: "power4.inOut",
        onComplete: () => {
          setIsAnimating(false);
        },
      });
    };

    const hideSlide = (index) => {
      if (isAnimating) return;
      setIsAnimating(true);

      gsap.to(slides[index], {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        duration: 0.8,
        ease: "power4.inOut",
        onComplete: () => {
          setIsAnimating(false);
        },
      });
    };

    const handleWheel = (e) => {
      if (isAnimating) return;

      if (e.deltaY > 0 && currentSlideIndex < slideCount - 1) {
        showSlide(currentSlideIndex + 1);
        updateSlideIndex(currentSlideIndex + 1);
      } else if (e.deltaY < 0 && currentSlideIndex > 0) {
        hideSlide(currentSlideIndex);
        updateSlideIndex(currentSlideIndex - 1);
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [currentSlideIndex, isAnimating, updateSlideIndex, gsap]);

  useEffect(() => {
    if (currentSlideIndex > prevSlideIndex || currentSlideIndex < prevSlideIndex || currentSlideIndex == 0) {
      const img = document.querySelectorAll(".background-image");
      if (img.length > 0) {
        gsap.fromTo(
          img[currentSlideIndex],
          {
            scale: 1.3,
          },
          {
            scale: 1,
            duration: 2,
            ease: "power4.out",
          }
        );
      }
      setPrevSlideIndex(currentSlideIndex);

      console.log("prevSlideIndex", prevSlideIndex);
      console.log("currentSlideIndex", currentSlideIndex);
    }
  }, [currentSlideIndex, prevSlideIndex, gsap]);

  return (
    <div className="carousel">
      <div ref={(el) => (slidesRef.current[0] = el)} className="carousel-slide" id="carousel-slide-1">
        <LandingPage />
      </div>
      <div ref={(el) => (slidesRef.current[1] = el)} className="carousel-slide" id="carousel-slide-2">
        <CycleOne />
      </div>
      <div ref={(el) => (slidesRef.current[2] = el)} className="carousel-slide" id="carousel-slide-3">
        <CycleTwo />
      </div>
      <div ref={(el) => (slidesRef.current[3] = el)} className="carousel-slide" id="carousel-slide-4">
        <CycleThree />
      </div>
      <div ref={(el) => (slidesRef.current[4] = el)} className="carousel-slide" id="carousel-slide-5">
        <CycleFour />
      </div>
      <div ref={(el) => (slidesRef.current[5] = el)} className="carousel-slide" id="carousel-slide-6">
        <FinalPage />
      </div>
    </div>
  );
};

export default ScrollSection;
