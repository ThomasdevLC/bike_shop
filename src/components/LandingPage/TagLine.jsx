import useSpanElements from "../../utils/useSpanElements.jsx";

const TagLine = () => {
  const className = "tag";
  const wordOne = "RIDE";
  const wordTwo = " THE ";
  const wordThree = " WORLD";

  const spanElemOne = useSpanElements(wordOne, className);
  const spanElemTwo = useSpanElements(wordTwo, className);
  const spanElemThree = useSpanElements(wordThree, className);

  return (
    <div className="tagline">
      <div>{spanElemOne}</div>
      <div>{spanElemTwo}</div>
      <div>{spanElemThree}</div>
    </div>
  );
};

export default TagLine;
