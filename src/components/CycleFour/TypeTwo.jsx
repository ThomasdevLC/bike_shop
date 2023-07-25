import { useEffect, useState } from "react";
import capitalsUTC from "../../data/citiesData";
import uniqueIndex from "../../utils/uniqueIndex";

const TypeTwo = () => {
  const [randomIndexes, setRandomIndexes] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(
      () => {
        const randomIndex = uniqueIndex(0, capitalsUTC.length - 1, 8);
        setRandomIndexes(randomIndex);
      },

      800
    );

    // Clear the interval when the component unmounts to avoid memory leaks
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div className="typetwo">
      <div className="typetwo__bottom">
        {randomIndexes.map((index) => (
          <p key={index}>{capitalsUTC[index]?.city}</p>
        ))}
        <div className="typetwo__top">
          <p className="typetwo__top__catch">RIDE THE WORLD</p>
          <p className="typetwo__top__name">ASPHALT</p>
        </div>
      </div>
    </div>
  );
};

export default TypeTwo;
