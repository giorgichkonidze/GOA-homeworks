import React, { useState } from "react";
import Counter from "./Counter";

const CounterContainer = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  };

  const decrement = () => {
    setCount(count - 1)
  };

  return (
    <Counter
      count={count}
      increment={increment}
      decrement={decrement}
    />
  );
};

export default CounterContainer