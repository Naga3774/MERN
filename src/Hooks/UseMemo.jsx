import { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const calculation = useMemo(() => {
    console.log("Heavy calculation running");
    return count * 5;
  }, [count]);

  return (
    <div>
      <h2>useMemo Hook</h2>

      <h3>Count: {count}</h3>
      <h3>Result: {calculation}</h3>

      <button onClick={() => setCount(count + 1)}>Increase</button>

      <br /><br />

      <input
        type="text"
        placeholder="Typing should NOT recalculate"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default UseMemo;
