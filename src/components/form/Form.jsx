import React, { useState } from "react";
import "./style.css";

const Form = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "title") setTitle(value);
    if (name === "body") setBody(value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!title || !body) return;

    const newTodo = {
      id: Date.now(),
      title,
      body,
      isDone: false,
    };
    setTodos([...todos, newTodo]);

    setTitle("");
    setBody("");
  };

  return (
    <form className="add_form" onSubmit={onSubmitHandler}>
      <div className="input_group">
        <label className="form_label">제목</label>
        <input
          type="text"
          name="title"
          placeholder="제목을 입력하세요."
          value={title}
          onChange={onChangeHandler}
        />
        <label className="form_label">내용</label>
        <input
          type="text"
          name="body"
          placeholder="내용을 입력하세요."
          value={body}
          onChange={onChangeHandler}
        />
      </div>
      <button type="submit">추가하기</button>
    </form>
  );
};

export default Form;
