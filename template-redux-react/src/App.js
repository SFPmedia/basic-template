import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, postTodo, deleteTodo } from "./actions";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const handleClick = (id) => dispatch(deleteTodo(id));
  if (!todos || !todos.length) {
    return <p>NO TODOS</p>;
  }
  return (
    <ul>
      {todos.map((todo) => (
        <li onClick={() => handleClick(todo.id)} key={todo.label}>
          {todo.label}
        </li>
      ))}
    </ul>
  );
};

const TodoInput = () => {
  const dispatch = useDispatch();
  // Made sure the useState("") would initialize with a string. Else it would result in an error when you started typing.
  const [newTodo, setNewTodo] = useState("");
  const handleChange = (event) => setNewTodo(event.target.value);
  const handleClick = () =>
    dispatch(
      postTodo({
        label: newTodo,
        id: Math.ceil(Math.random() * 100),
      })
    );
  return (
    <>
      <input value={newTodo} onChange={handleChange} type="text" />
      <button onClick={handleClick}>ADD TODO</button>
    </>
  );
};

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>TODOS</p>
        <Todos />
        <TodoInput />
      </header>
    </div>
  );
}

export default App;
