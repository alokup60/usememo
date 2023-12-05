import React from "react";

const Todos = ({ todos, addTodo }) => {
  //   console.log("Todos called");
  return (
    <div>
      {todos.map((todo, i) => (
        <p key={i}>{todo}</p>
      ))}
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default Todos;
