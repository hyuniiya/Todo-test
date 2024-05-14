import React from "react";

const TodoItem = ({ todo, oncompleteHandler, ondeleteHandler }) => {
  return (
    <div className="todo_container">
      <div>
        <h2 className="todo_title">{todo.title}</h2>
        <div>{todo.body}</div>
      </div>
      <div className="button_set">
        {/* 삭제 버튼 */}
        <button className="delete_btn" onClick={() => ondeleteHandler(todo.id)}>
          삭제
        </button>
        {/* 완료 버튼 */}
        <button
          className="complete_btn"
          onClick={() => oncompleteHandler(todo.id)}
        >
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
