import React from "react";
import "./App.css";

// import ClassCounter from "./conponents/ClassCounter";
// import HookCounter from "./conponents/HookCounter";

// import HookCounterTwo from "./conponents/HookCounterTwo";

// import HookCounterThree from "./conponents/HookCounterThree";

// import HookCounterFour from "./conponents/HookCounterFour";

// import ClassCounterOne from "./conponents/ClassCounterOne";
// import HookCounterOne from "./conponents/HookCounterOne";

// import ClassMouse from "./conponents/ClassMouse";
// import HookMouse from "./conponents/HookMouse";

// import MouseContainer from "./conponents/MouseContainer";

// import IntervalClassCounter from './conponents/IntervalClassCounter'
import IntervalHookCounter from "./conponents/IntervalHookCounter"


function App() {
  return (
    <div className="App">
      <h1>Hook-1</h1>
      <p>Counter using class and hooks</p>
      <p>Modifications on Counter using hooks</p>
      <p>Playing with the movements of mouse</p>
      <hr/>
      {/* <ClassCounter /> */}
      {/* <HookCounter/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounterThree/> */}
      {/* <HookCounterFour /> */}
      {/* <ClassCounterOne />  */}
      {/* <HookCounterOne /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalClassCounter/> */}
      <IntervalHookCounter/>
    </div>
  );
}

export default App;
