import { createContext } from "react";

export const Data1 = createContext();
function UpdateUser({ children }) {
  const age = 48;
  return (
    <>
      <Data1.Provider value={age}>{children}</Data1.Provider>
    </>
  );
}
export default UpdateUser;
