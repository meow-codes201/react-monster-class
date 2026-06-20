import ComponentB from "./ComponentB";
function ComponentA({ name }) {
  return (
    <>
      <ComponentB name={name} />
    </>
  );
}
export default ComponentA;
