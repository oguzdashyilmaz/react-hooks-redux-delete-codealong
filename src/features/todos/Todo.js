import React from "react";

import { useDispatch } from "react-redux";
import { todoRemoved } from "./todosSlice";

function Todo({ todo }) {
  const dispatch = useDispatch();

  function handleDeleteClick() {
    dispatch(todoRemoved(todo.id));
  }

  return (
    <li style={{marginBottom: 10}}>
      <span>{todo.text}</span>
      <button  onClick={handleDeleteClick} style={{marginLeft: 10, color:"black", backgroundColor: "red", borderRadius: 10}}>DELETE</button>
    </li>
  );
}

export default Todo;
