const useSpanElements = (word) => {
  const spanElements = word.split("").map((char, index) => (
    <span key={index} className="first-level-span">
      <span className="second-level-span">{char}</span>
    </span>
  ));

  return spanElements;
};

export default useSpanElements;
