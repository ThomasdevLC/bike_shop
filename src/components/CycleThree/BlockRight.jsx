import capitalsUTC from "../../data/citiesData";
import uniqueIndex from "../../utils/uniqueIndex";

const BlockRight = () => {
  const randomIndex = uniqueIndex(0, capitalsUTC.length, 5);

  return (
    <div className="blockright">
      <div className="blockright__top">
        <p className="blockright__top__name">BIKKEY</p>
        <p className="blockright__top__catch">RIDE THE WORLD</p>
      </div>
      <div className="blockright__bottom">
        {randomIndex.map((index) => (
          <p key={index}>{capitalsUTC[index]?.city}</p>
        ))}
      </div>
    </div>
  );
};

export default BlockRight;
