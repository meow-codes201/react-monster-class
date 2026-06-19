import "./App.css";
import ProfileCard from "./ProfileCard";
import StyleCard from "./StyleCard";
import IconComponent from "./IconComponent";
import Button from "./Button";
import CopyEvent from "./CopyEvent";
import MouseMovEvent from "./MouseMovEvent";
import UseStateHook from "./UseStateHook";
import FriendsState from "./FriendsState";
import StateinObj from "./StateinObj";
import ArrayOfObjState from "./ArrayOfObjState";
import Local from "./Local";
import Counter from "./Counter";
import Todo from "./Todo";
import Profile from "./Profile";
import ShoppingList from "./ShoppingList";
import { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      if (data && data.length) {
        setData(data);
      }
    }
    getData();
  }, []);

  return (
    <>
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>
            <h3> title - {todo.title}</h3>
            <p>Body: {todo.body || "No content"}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;
