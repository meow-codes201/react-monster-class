import { createContext } from "react";

export const MyContext = createContext();
function UserContext({ children }) {
  const data = 35;

  return (
    <>
      <MyContext.Provider value={data}>{children} </MyContext.Provider>
    </>
  );
}
export default UserContext;
