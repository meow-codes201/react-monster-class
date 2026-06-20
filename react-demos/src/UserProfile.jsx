import { useContext } from "react";
import { MyContext } from "./UserContext";
import { Data1 } from "./UpdateUser";
function UserProfile({ children }) {
  const data = useContext(MyContext);
  const age = useContext(Data1);

  if (data < age) {
    return (
      <>
        <h1>{age}</h1>
      </>
    );
  } else {
    return (
      <>
        <h1>{data}</h1>
      </>
    );
  }
}
export default UserProfile;
