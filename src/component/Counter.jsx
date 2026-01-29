import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const multiply = () => setCount(count + 2);
    const handleDecrement = () => {
    }


    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={multiply}>+2</button>
            <button onClick={handleDecrement}>-2</button>
        </div>
    );
}
export default Counter;