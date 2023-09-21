import { useState } from "react";

const useCounter = (stock, initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    if (count >= stock) return;
    setCount(count + 1);  
  };

  const decrement = () => {
    if (count <= 0 && stock>0) return;
    setCount(count - 1);
  };

  return { count, increment, decrement };
};

export default useCounter;