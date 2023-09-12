import useSpanElements from "../../utils/useSpanElements.jsx";

const TagLine = () => {
  const wordOne = "RIDE";
  const wordTwo = " THE ";
  const wordThree = " WORLD";

  const spanElemOne = useSpanElements(wordOne);
  const spanElemTwo = useSpanElements(wordTwo);
  const spanElemThree = useSpanElements(wordThree);

  return (
    <div className="tagline">
      <div>{spanElemOne}</div>
      <div>{spanElemTwo}</div>
      <div>{spanElemThree}</div>
    </div>
  );
};

export default TagLine;
