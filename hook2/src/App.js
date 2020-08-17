import React from "react";
import "./App.css";

// import DataFetching from "./components/DataFetching";
// import ComponentC from "./components/ComponentC";

// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

// import Counter1 from "./components/Counter1";
// import Counter2 from "./components/Counter2";
// import Counter3 from "./components/Counter3";

// import DataFetching1 from "./components/DataFetching1";
// import DataFetching2 from "./components/DataFetching2";

// import ParentComponent from "./components/ParentComponent";

// import MemoHook from "./components/MemoHook";

// import FocusInput from "./components/FocusInput";
// import ClassTimer from "./components/ClassTimer"
// import HookTimer from "./components/HookTimer";

// import DocTitleOne from "./components/DocTitleOne";
// import DocTitleTwo from "./components/DocTitleTwo";

// import CustomHookCounter1 from "./components/CustomHookCounter1";
// import CustomHookCounter2 from "./components/CustomHookCounter2";

import UserForm from "./components/UserForm";

function App() {
  return (
    <div className="App">
      <h1>Hello Hooks</h1>
      <p>Data Fetching using useState</p>
      <p>useContext</p>
      <p>useReducer</p>
      <p>Fetching data using useReducer</p>
      <p>Callback hooks</p>
      <p>useMemo hook</p>
      <p>useRef hook</p>

      <p>Three Custom Hooks</p>
      <hr />

      {/* <DataFetching /> */}

      {/* <UserContext.Provider value={"Abhishek"}>
        <ChannelContext.Provider value={"TheProgrammedEnthiusiast"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <Counter3 /> */}
      {/* <DataFetching1 /> */}
      {/* <DataFetching2 /> */}

      {/* <ParentComponent /> */}

      {/* <MemoHook /> */}

      {/* <FocusInput /> */}
      {/* <ClassTimer /> */}
      {/* <HookTimer /> */}

      {/* <DocTitleOne /> */}
      {/* <DocTitleTwo/> */}

      {/* <CustomHookCounter1 /> */}
      {/* <CustomHookCounter2 /> */}

      <UserForm />
    </div>
  );
}

export default App;
