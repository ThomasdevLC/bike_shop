import BlockTypeScale from "../components/CycleTwo/BlockTypeScale";
import BlockType from "../components/CycleTwo/BlockType";

const CycleTwo = () => {
  return (
    <div className="cycletwo">
      <div className="cycletwo__top">
        <BlockTypeScale />
        <BlockType />
      </div>
      <div className="cycletwo__bottom">
        <BlockType />
        <BlockType />
      </div>
    </div>
  );
};

export default CycleTwo;
