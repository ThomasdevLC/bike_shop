import capitalsUTC from "../../data/citiesData";
import uniqueIndex from "../../utils/uniqueIndex";

const BlockMiddle = () => {
  const randomIndex = uniqueIndex(0, capitalsUTC.length - 1, 5);

  return (
    <div className="blockmiddle">
      <div className="blockmiddle__top">
        <p className="blockmiddle__top__name">BIKKEY</p>
        <p className="blockmiddle__top__catch">RIDE THE WORLD</p>
      </div>
      <div className="blockmiddle__bottom">
        <p>{`UTC${capitalsUTC[8]?.utc}`} </p> <p>{capitalsUTC[8]?.city}</p>
        {randomIndex.map((index) => (
          <p key={index}>{capitalsUTC[index]?.city}</p>
        ))}
      </div>
    </div>
  );
};

export default BlockMiddle;
