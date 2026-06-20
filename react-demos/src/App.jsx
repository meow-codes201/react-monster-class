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
import BasicEffect from "./BasicEffect";
import CounterEffect from "./CounterEffect";
import FetchDataEffect from "./FetchDataEffect";
import ComponentA from "./ComponentA.jsx";
import UserContext from "./UserContext.jsx";
import UpdateUser from "./UpdateUser.jsx";
import UserProfile from "./UserProfile.jsx";
import { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    case "incBy5":
      return { ...state, count: state.count + 5 };
    case "decBy5":
      return { ...state, count: state.count - 5 };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      <button onClick={() => dispatch({ type: "incBy5" })}>Add 5</button>

      <button onClick={() => dispatch({ type: "decBy5" })}>Sub 5</button>
    </>
  );
}
export default App;
