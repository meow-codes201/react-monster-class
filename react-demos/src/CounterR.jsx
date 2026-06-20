import { intialState, CounterReducer } from "./CounterReducer";
import { useState, useReducer } from "react";

function CounterR() {
  const [state, dispatch] = useReducer(CounterReducer, intialState);

  const [inputVal, setInputVal] = useState(0);

  const handleAddByAmount = () => {
    if (inputVal) {
      dispatch({ type: "addByAmount", payload: Number(inputVal) });
    }
    setInputVal("");
  };
  const handleSubByAmount = () => {
    if (inputVal) {
      dispatch({ type: "subByAmount", payload: Number(inputVal) });
    }
    setInputVal("");
  };

  return (
    <>
      <h1>count : {state.count}</h1>
      <button onClick={() => dispatch({ type: "inc" })}>inc</button>
      <button onClick={() => dispatch({ type: "dec" })}>dec</button>

      <button onClick={() => dispatch({ type: "add5" })}>add 5</button>
      <button onClick={() => dispatch({ type: "sub5" })}>sub 5</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>

      <input
        type="number"
        placeholder="Enter amount"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />

      <button onClick={handleAddByAmount}>add by amount</button>
      <button onClick={handleSubByAmount}>sub by amount</button>
    </>
  );
}
export default CounterR;
