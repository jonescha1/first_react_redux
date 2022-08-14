import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, clearTodos, removeOneTodo } from "./features/todoSlice";

function Todo() {
  const todoItems = useSelector((state) => state.todo.items);

  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const renderItems = todoItems.map((item, index) => (
    <li key={index} onClick={() => dispatch(removeOneTodo(index))}>
      {item}
    </li>
  ));

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
    e.target.reset();
  };

  return (
    <div>
      <h1>Add a Todo!</h1>
      <form onSubmit={(e) => submitForm(e)}>
        <input type="string" onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <ul>{renderItems}</ul>
      <button onClick={() => dispatch(clearTodos())}>Clear All Todos</button>
    </div>
  );
}

export default Todo;
