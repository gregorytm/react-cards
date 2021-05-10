import { useState, useEffect } from "react";

const useFlipCard = (initialFlipState = true) => {
  const [isFlipped, setFlipped] = useState(initialFlipState);

  const flip = () => {
    setFlipped((isUp) => !isUp);
  };
  return [isFlipped, flip];
};

export default useFlipCard;
