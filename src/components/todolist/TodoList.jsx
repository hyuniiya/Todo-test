import React from "react";
import "./style.css";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos }) => {
  const oncompleteHandler = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(updatedTodos);
  };

  const ondeleteHandler = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  // Working과 Done으로 구분
  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <div className="list_container">
      <h2 className="list_title">할 일..🔥</h2>
      <div className="list_wrapper">
        {/* Working Todo 출력 */}
        {workingTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            oncompleteHandler={oncompleteHandler}
            ondeleteHandler={ondeleteHandler}
          />
        ))}
      </div>
      <h2 className="list_title">완료..!🎉</h2>
      <div className="list_wrapper">
        {/* Done Todo 출력 */}
        {doneTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            oncompleteHandler={oncompleteHandler}
            ondeleteHandler={ondeleteHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
