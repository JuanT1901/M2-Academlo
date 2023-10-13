import { useState } from "react";

const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const handleIncrement = () => {
    setCounter(counter + 1);
  }

  const handleDecrement = () => {
    setCounter(counter - 1);
  }

  return {counter, 
    handleDecrement, 
    handleIncrement
  };
}
export default useCounter