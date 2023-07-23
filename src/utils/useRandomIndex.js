import { useState } from "react";
import capitalsUTC from "../data/citiesData";

const useRandomIndex = () => {
  const [randomIndex, setRandomIndex] = useState(null);

  const getRandomIndex = () => {
    const newIndex = Math.floor(Math.random() * capitalsUTC.length);
    setRandomIndex(newIndex);
  };

  return { randomIndex, getRandomIndex };
};

export default useRandomIndex;
