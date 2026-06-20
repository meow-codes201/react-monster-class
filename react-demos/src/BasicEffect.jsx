import { useState, useEffect } from "react";
function BasicEffect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("only once");
  }, []);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>ADD</button>
    </>
  );
}

export default BasicEffect;
