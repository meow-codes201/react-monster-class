function Weather({ temperature }) {
  if (temperature < 15) {
    return (
      <>
        <h1 style={{ color: "#f1f5f6", backgroundColor: "#458dbb" }}>
          It is COLD outside ☃️🌨️❄️🥶🤧🧊
        </h1>
      </>
    );
  } else if (temperature > 15 && temperature < 25) {
    return (
      <>
        <h1 style={{ color: "#0b7da6", backgroundColor: "#c1e1c1" }}>
          It is NICE outside 🌞🌤️⛅😊
        </h1>
      </>
    );
  } else if (temperature > 25) {
    return (
      <>
        <h1 style={{ color: "#ff0800", backgroundColor: "#ffcccc" }}>
          it is HOT outside 🥵♨️🔥🌡️☁️
        </h1>
      </>
    );
  }
}
export default Weather;
