import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
};

const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>useReducer Hook</h2>
      <h3>Count: {count}</h3>

      <button onClick={() => dispatch({ type: "INC" })}>Add</button>
      <button onClick={() => dispatch({ type: "DEC" })}>Subtract</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default UseReducer;
