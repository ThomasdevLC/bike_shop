/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";

const SlideContext = createContext();

export const useSlideContext = () => {
  return useContext(SlideContext);
};

export const SlideProvider = ({ children }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const updateSlideIndex = (index) => {
    setCurrentSlideIndex(index);
  };

  return <SlideContext.Provider value={{ currentSlideIndex, updateSlideIndex }}>{children}</SlideContext.Provider>;
};
