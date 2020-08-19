import React, { useState, useEffect, useRef } from "react";


function HookTimer() {

  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      Hook timer - {timer}
      <button onClick={() => clearInterval(intervalRef.current)}>Clear timer</button>
    </div>
  );
}

export default HookTimer;

/*

Altogether, it can be used to create a generic container which
can hold a mutable value similar to  instance properties of a 
class components. 
This generic container does not cause rerenders
when the data it stores changes. 
At the same time it also remembers the stored data in after other
state variable cause a re-render of this component
 
*/