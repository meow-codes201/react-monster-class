function Button() {
  return (
    <>
      <button
        style={{
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
          width: "100px",
          height: "40px",
          cursor: "pointer",
        }}
        onClick={() => alert("Button Pressed!")}
      >
        Press
      </button>
    </>
  );
}
export default Button;
