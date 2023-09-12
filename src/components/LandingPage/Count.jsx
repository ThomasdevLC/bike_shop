import { useState, useEffect } from "react";
import useSpanElements from "../../utils/useSpanElements.jsx";

const Count = () => {
  const [count, setCount] = useState(100);
  const formattedCount = String(count).padStart(3, "0");
  const className = "count";
  const finalCount = useSpanElements(formattedCount, className);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count > 0) {
        setCount(count - 1);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="count">
      <p> {finalCount}</p>
    </div>
  );
};

export default Count;
