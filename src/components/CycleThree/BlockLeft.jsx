import capitalsUTC from "../../data/citiesData";
import uniqueIndex from "../../utils/uniqueIndex";
const BlockLeft = () => {
  const randomIndex = uniqueIndex(0, capitalsUTC.length - 1, 5);

  return (
    <div className="blockleft">
      <div className="blockleft__top">
        <p className="blockleft__top__name">BIKKEY</p>
        <p className="blockleft__top__catch">RIDE THE WORLD</p>
      </div>
      <div className="blockleft__bottom">
        <p>{`UTC${capitalsUTC[11]?.utc}`} </p> <p>{capitalsUTC[11]?.city}</p>
        {randomIndex.map((index) => (
          <p key={index}>{capitalsUTC[index]?.city}</p>
        ))}
      </div>
    </div>
  );
};

export default BlockLeft;
