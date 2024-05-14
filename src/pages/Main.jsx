import React, { useState } from "react";
import "./style.css";
import Form from "../components/form/Form.jsx";
import TodoList from "../components/todolist/TodoList.jsx";

const Main = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "react props",
      body: "drilling",
      isDone: false,
    },
    {
      id: 2,
      title: "react state",
      body: "usestate",
      isDone: true,
    },
  ]);
  return (
    <div className="layout">
      <div className="container">
        <div>My Todo List</div>
        <div>React</div>
      </div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Main;
