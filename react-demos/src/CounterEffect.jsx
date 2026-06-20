import { useState, useEffect } from "react";
function CounterEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`updated ${count} times`);
    document.title = `updated ${count} times`;
  }, [count]);
  return (
    <>
      <div style={{ textAlign: "center", backgroundColor: "whitesmoke" }}>
        <h1
          style={{
            fontSize: "4em",
            textDecoration: "underline",
            marginBottom: "0px",
            marginBottom: "5px",
          }}
        >
          {count}
        </h1>
        <button
          style={{
            height: "100px",
            width: "100px",
            border: "2px solid white",
            borderRadius: "10px",
            fontSize: "2em",
            margin: "5px",
            backgroundColor: "#22C55E",
            color: "white",
          }}
          onClick={() => setCount(count + 1)}
        >
          ADD
        </button>

        <button
          style={{
            height: "100px",
            width: "120px",
            border: "2px solid white",
            borderRadius: "10px",
            fontSize: "2em",
            margin: "5px",

            backgroundColor: "#FACC15",
            color: "white",
          }}
          onClick={() => setCount(0)}
        >
          RESET
        </button>

        <button
          style={{
            height: "100px",
            width: "100px",
            border: "2px solid white",
            borderRadius: "10px",
            fontSize: "2em",
            margin: "5px",
            backgroundColor: "#111827",
            color: "white",
          }}
          onClick={() => setCount(count - 1)}
        >
          SUB
        </button>
      </div>
    </>
  );
}
export default CounterEffect;
