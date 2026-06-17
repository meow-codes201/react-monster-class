function Greeting({ time }) {
  if (time < 12) {
    return (
      <h1 style={{ color: "#06a842" }}>
        GOOD MORNING, take sunlight vitamin D 🌞🌅
      </h1>
    );
  } else if (time > 12 && time < 18) {
    return (
      <h1 style={{ color: "#ff0800" }}>
        Good afternoon, use sunscreen before going out 🥵
      </h1>
    );
  } else if (time > 18 && time <= 24) {
    return (
      <h1 style={{ color: "#2d0080" }}>Good evening, Isaac Newton time 📚📚</h1>
    );
  }
}
export default Greeting;
