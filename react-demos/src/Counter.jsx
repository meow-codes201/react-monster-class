import { useState } from "react";
function Counter() {
  [count, setCount] = useState(0);

  const add = () => {
    setCount(count++);
  };
  const reset = () => {
    setCount(0);
  };
  const sub = () => {
    setCount(count--);
  };

  return (
    <>
      <button
        style={{
          backgroundColor: "green",
          width: "50px",
          cursor: "pointer",
          color: "white",
        }}
        onClick={add}
      >
        +
      </button>
      <button
        style={{
          backgroundColor: "pink",
          width: "50px",
          cursor: "pointer",
          color: "white",
        }}
        onClick={reset}
      >
        reset
      </button>
      <button
        style={{
          backgroundColor: "red",
          width: "50px",
          cursor: "pointer",
          color: "white",
        }}
        onClick={sub}
      >
        -
      </button>
    </>
  );
}
