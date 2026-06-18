function MouseMovEvent() {
  const MouseHandler = () => {
    alert("Mouse is moving");
  };

  return (
    <>
      <div
        style={{ backgroundColor: "pink", width: "100%", height: "200px" }}
        onMouseMove={MouseHandler}
      >
        {" "}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut omnis
          error pariatur tempora corporis sed repellendus nulla ullam deserunt
          fugiat.
        </p>
      </div>
    </>
  );
}
export default MouseMovEvent;
