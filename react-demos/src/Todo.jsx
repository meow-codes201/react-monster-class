import { useState } from "react";
function Todo() {
  const [task, setTask] = useState([]);
  const [input, setInput] = useState("");

  const change = (e) => {
    setInput(e.target.value);
  };

  const addTask = () => {
    if (input.trim() === "") return;
    setTask([...task, input]);
    setInput("");
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <input
          style={{
            backgroundColor: "lightpink",
            width: "500px",
            height: "50px",
            fontSize: "25px",
            border: "none",
            fontFamily: "math",
            borderRadius: "10px",
            paddingLeft: "5px",
            margin: "5px",
            color: "black",
            fontWeight: "bold",
          }}
          placeholder="Add new Task"
          type="text"
          onChange={change}
          value={input}
        />
        <button
          style={{
            width: "90px",
            height: "50px",
            fontSize: "25px",
            border: "none",
            backgroundColor: "black",
            color: "hotpink",
            borderRadius: "19px",
            fontWeight: "bold",
          }}
          onClick={addTask}
        >
          Add
        </button>
        <ul>
          {task.map((t, i) => (
            <li
              key={i}
              style={{
                color: "hotpink",
                fontSize: "30px",
                fontWeight: "bold",
                fontStyle: "oblique",
              }}
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Todo;
