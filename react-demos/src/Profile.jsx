import { useState } from "react";

function Profile() {
  const [prof, setProf] = useState([
    { id: 1, name: "Alex", age: 20 },
    { id: 2, name: "Jake", age: 22 },
  ]);

  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");

  const addProfile = () => {
    if (inputName.trim() === "" || inputAge === "") return;

    const newProfile = {
      id: prof.length + 1,
      name: inputName,
      age: Number(inputAge),
    };

    setProf([...prof, newProfile]);

    setInputName("");
    setInputAge("");
  };

  return (
    <>
      <input
        placeholder="name"
        value={inputName}
        type="text"
        onChange={(e) => setInputName(e.target.value)}
      />

      <input
        placeholder="age"
        value={inputAge}
        type="number"
        onChange={(e) => setInputAge(e.target.value)}
      />

      <button onClick={addProfile}>Add Profile</button>

      <div>
        {prof.map((p) => (
          <h1 key={p.id}>
            {p.name} - {p.age}
          </h1>
        ))}
      </div>
    </>
  );
}

export default Profile;
