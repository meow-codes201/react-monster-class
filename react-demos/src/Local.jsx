import { useEffect, useState } from "react";
function Local() {
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem("name");
    return savedName ? JSON.parse(savedName) : "";
  });

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const reset = () => {
    setName("");
  };

  return (
    <>
      <h1>your name : {name}</h1>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter name"
      />

      <button onClick={reset}>Clear name</button>
    </>
  );
}

export default Local;
