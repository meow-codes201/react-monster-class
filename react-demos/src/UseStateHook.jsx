import { useState } from "react";
function UseStateHook() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);

  const decrease = () => {
    setCount(count - 1);
  };
  const reset = () => setCount(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increase}>Add</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrease}>Subtract</button>
    </>
  );
}
export default UseStateHook;
