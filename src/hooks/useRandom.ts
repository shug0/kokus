import { useState } from "react";

function useRandom(list: any[]) {
  const [random, setRandom] = useState(list[0]);

  const getRandom = () => {
    const randomIndex = Math.floor(Math.random() * list.length);
    setRandom(list[randomIndex]);
  };

  return [random, getRandom];
}

export default useRandom;
