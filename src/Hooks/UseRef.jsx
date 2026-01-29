import { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>useRef Example</h2>
      <input ref={inputRef} placeholder="Click button to focus" />
      <br /><br />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default UseRef;
