import React from "react";

function Button({ handleClick, children }) {
  console.log(`Rendering -`, children);
  return (
    <div>
        {/* pops.childer refers to Increment Age text in ParentComponent */}
      <button onClick={handleClick}>{children}</button>
    </div>
  );
}

export default React.memo(Button);
