import React, { useState } from "react";

function Count(props) {
  let [count, setCount] = useState(props.count ? props.count : 0)

  let increment = () => {
    setCount(count + 1)
  }

  let decrement = () => {
    setCount(count - 1)
  }

  let reset = () => {
    setCount(props.count)
  }

  return (
    <div className="App">
      <p>Value is { count }</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>+1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Count;
