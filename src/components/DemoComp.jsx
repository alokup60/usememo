import React, { useState } from "react";
import Todos from "./Todos";

const DemoComp = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = expensiveCalc(count);

  const incHandler = () => {
    setCount((prev) => prev + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, " New Todo"]);
  };
  return (
    <div>
      <h2>My Todos</h2>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      {count} <button onClick={incHandler}>+</button>
      <h3>Expensive Calculation {calculation}</h3>
    </div>
  );
};

const expensiveCalc = (num) => {
  console.log("calculating.........");
  for (let i = 0; i < 50; i++) {
    num += 1;
  }
  return num;
};

export default DemoComp;
