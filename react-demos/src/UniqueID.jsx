import { useId } from "react";
function UniqueID() {
  const id = useId();
  const id2 = useId();
  return (
    <>
      <label htmlFor={`${id}`}>Email </label>
      <input type="email" id={`${id}`} />
      <label htmlFor={`${id2}`}>Name </label>
      <input type="text" id={`${id2}`} />
    </>
  );
}
export default UniqueID;
