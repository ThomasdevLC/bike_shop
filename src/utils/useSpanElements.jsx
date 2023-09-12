const useSpanElements = (word, className) => {
  const spanElements = word.split("").map((char, index) => (
    <span key={index} className={`${className}-first-level-span`}>
      <span className={`${className}-second-level-span`}>{char}</span>
    </span>
  ));

  return spanElements;
};

export default useSpanElements;
