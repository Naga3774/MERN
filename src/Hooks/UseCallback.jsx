import { useCallback, useState } from "react";
import Child from "./Child";

const UseCallback = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div>
      <h2>useCallback Hook</h2>

      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <Child onClick={handleClick} />
    </div>
  );
};

export default UseCallback;
