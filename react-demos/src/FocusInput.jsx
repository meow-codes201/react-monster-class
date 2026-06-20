import { useRef } from "react";

function FocusInput() {
  const myFocus = useRef(null);

  const focusNow = () => {
    myFocus.current.focus();
    myFocus.current.value = "yoo hoo";
  };
  return (
    <>
      <input type="text" ref={myFocus} />
      <button onClick={focusNow}>focus baby</button>
    </>
  );
}
export default FocusInput;
