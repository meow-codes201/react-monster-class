import { useState } from "react";
function FriendsState() {
  const [friends, setFriends] = useState(["John", "Jane", "Bob"]);

  return (
    <>
      <ul>
        {friends.map((f) => (
          <li key={Math.random}>{f}</li>
        ))}
      </ul>
      <button onClick={() => setFriends([...friends, "Alex"])}>
        Add one friend
      </button>
      <button onClick={() => setFriends(friends.slice(0, -1))}>
        Remove one friend
      </button>
      <button
        onClick={() =>
          setFriends(friends.map((f) => (f === "John" ? "John Smith" : f)))
        }
      >
        Update a friend
      </button>
    </>
  );
}
export default FriendsState;
