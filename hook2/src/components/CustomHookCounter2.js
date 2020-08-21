import React from "react";
import useCustomHookCounter from "../hooks/useCustomHookCounter";

function CustomHookCounter2() {
  const [count, increment, decrement, reset] = useCustomHookCounter(10, 5);

  return (
    <div>
      <h2>Count - {count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default CustomHookCounter2;
