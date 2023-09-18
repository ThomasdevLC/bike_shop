const useSingleSpanChar = (word, className) => {
  const spanElements = word.split("").map((char, index) => (
    <span key={index} className={`${className}-span`}>
      {char}
    </span>
  ));

  return spanElements;
};

export default useSingleSpanChar;
