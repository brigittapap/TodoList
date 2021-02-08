import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { Container } from "@material-ui/core";

const TodoList = (todo) => {
  const [tasks, setTasks] = useState([{ name: "task1" }]);

  const addTask = (name) => {
    const todoslist = [...tasks, { name }];
    setTasks(todoslist);
  };

  const removeTask = (index) => {
    const newtodolist = [...tasks];
    newtodolist.splice(index, 1);
    setTasks(newtodolist);
  };

  const crossLine = (event) => {
    const element = event.target;
    element.classList.toggle("crossed-line");
  };

  return (
    <Container fixed>
      <TodoForm addTask={addTask}></TodoForm>
      <p className="tasks" onClick={crossLine}>
        {tasks.map((task, index) => (
          <Todo task={task.name} index={index} removeTask={removeTask} />
        ))}
      </p>
    </Container>
  );
};

export default TodoList;
