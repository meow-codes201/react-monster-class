import { useState, useEffect } from "react";

function FetchDataEffect() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const jsonData = await res.json();
      setData(jsonData);
    }
    getData();
  }, []);

  return (
    <>
      <ul>
        {data.map((d) => (
          <li key={d.id}>{d.title}</li>
        ))}
      </ul>
    </>
  );
}
export default FetchDataEffect;
