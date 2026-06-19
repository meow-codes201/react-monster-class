import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };
  const reset = () => {
    setCount(0);
  };
  const sub = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1 style={{ fontSize: "6em", margin: "0px", textAlign: "center" }}>
        {count}
      </h1>
      <div style={{ textAlign: "center" }}>
        <button
          style={{
            backgroundColor: "green",
            width: "100px",
            height: "100px",
            border: "1px solid white",
            margin: "10px",
            cursor: "pointer",
            color: "white",
            fontSize: "2rem",
          }}
          onClick={add}
        >
          +
        </button>
        <button
          style={{
            border: "1px solid white",

            fontSize: "2rem",
            backgroundColor: "pink",
            width: "100px",
            height: "100px",
            margin: "10px",
            cursor: "pointer",
            color: "white",
          }}
          onClick={reset}
        >
          reset
        </button>
        <button
          style={{
            border: "1px solid white",
            fontSize: "2rem",
            backgroundColor: "red",
            width: "100px",
            height: "100px",
            margin: "10px",
            cursor: "pointer",
            color: "white",
          }}
          onClick={sub}
        >
          -
        </button>
      </div>
    </>
  );
}
export default Counter;
