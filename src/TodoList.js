import React from "react";

function TodoList({ todos, toggleTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li
          key={index}
          className={todo.completed ? "completed" : ""}
          onClick={() => toggleTodo(index)}>
          {todo.text}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
