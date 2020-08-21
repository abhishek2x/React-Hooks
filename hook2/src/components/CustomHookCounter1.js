import React from "react";
import useCustomHookCounter from "../hooks/useCustomHookCounter";

function CustomHookCounter1() {
  const [count, increment, decrement, reset] = useCustomHookCounter(0, 1);

  return (
    <div>
      <h2>Count - {count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default CustomHookCounter1;
