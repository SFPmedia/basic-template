import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";

/* global ReactRedux, Redux, ReactDOM */

const todoMock = [
  {
    id: 1,
    completed: false,
    text: "new",
  },
];

const TodoList = ({ todos }) => (
  <ul>
    {todos.map((todo) => (
      <Todo key={todo.id} {...todo} />
    ))}
  </ul>
);

const Todo = ({ onClick, completed, text }) => {
  return (
    <li
      onClick={onClick}
      style={{ textDecoration: completed ? "line-through" : "none" }}
    >
      {text}
    </li>
  );
};

const Link = ({ active, children, onClick }) => {
  if (active) return <span>{children}</span>;
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

const Footer = () => {
  return (
    <p>
      Show: <Link filter="SHOW_ALL">All</Link>{" "}
      <Link filter="SHOW_ACTIVE">Active</Link>{" "}
      <Link filter="SHOW_COMPLETED">Completed</Link>
    </p>
  );
};

let AddTodo = () => {
  let input;

  return (
    <div>
      <input
        ref={(node) => {
          input = node;
        }}
      />
      <button>Add todo</button>
    </div>
  );
};

const TodoApp = () => {
  return (
    <div>
      <AddTodo />
      <TodoList todos={todoMock} />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

export default App;
