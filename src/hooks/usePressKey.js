import { useState } from "react";

function usePressKey(list) {
  const [activeIndex, setActiveIndex] = useState(-1);

  const onKeyDown = (e) => {
    if (e.code === "ArrowDown") {
      setActiveIndex((prev) => {
        if (prev >= list.length - 1) {
          return (prev = 0);
        }
        return prev + 1;
      });
    }
    if (e.code === "ArrowUp") {
      setActiveIndex((prev) => {
        if (prev > 0) {
          return prev - 1;
        }
        return (prev = list.length - 1);
      });
    }
  };
  return [activeIndex, onKeyDown];
}

export default usePressKey;
