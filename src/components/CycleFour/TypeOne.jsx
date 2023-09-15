import capitalsUTC from "../../data/citiesData";
import uniqueIndex from "../../utils/uniqueIndex";

const TypeOne = () => {
  const randomIndex = uniqueIndex(0, capitalsUTC.length - 1, 3);

  return (
    <div className="typeone">
      <div className="typeone__bottom">
        <p>{`UTC${capitalsUTC[8]?.utc}`} </p> <p>{capitalsUTC[8]?.city}</p>
        {randomIndex.map((index) => (
          <p key={index}>{capitalsUTC[index]?.city}</p>
        ))}
        <div className="typeone__top">
          <p className="typeone__top__catch">RIDE THE WORLD</p>
          <p className="typeone__top__name">ASPHALT</p>
        </div>
      </div>
    </div>
  );
};

export default TypeOne;
