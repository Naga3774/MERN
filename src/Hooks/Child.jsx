import React from "react";

const Child = ({ onClick }) => {
  console.log("Child component rendered");

  return (
    <div>
      <button onClick={onClick}>Child Button</button>
    </div>
  );
};

export default React.memo(Child);
