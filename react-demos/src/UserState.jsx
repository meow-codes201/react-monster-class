function UserState({ loggedIn, isAdmin }) {
  if (loggedIn && isAdmin) {
    return (
      <h1 style={{ color: "#0550ff" }}>Admin has ENTERED THE CHAT 🥶♾️</h1>
    );
  } else if (loggedIn) {
    return <h1 style={{ color: "#33ff74" }}>USER ENTERED THE CHAT😎</h1>;
  } else {
    return <h1 style={{ color: "hotpink" }}>lock in, bruh 😏</h1>;
  }
}
export default UserState;
