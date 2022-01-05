import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { Container, Button } from '@mui/material';

const TodoList = (todo) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (name) => {
    const todoslist = [...tasks, { name }];
    setTasks(todoslist);
  };

  const removeTask = (index) => {
    const newtodolist = [...tasks];
    newtodolist.splice(index, 1);
    setTasks(newtodolist);
  };

  return ( 
    <Container>
      <TodoForm addTask={addTask}></TodoForm>
        {tasks.map((task, index) => (
          <Todo task={task.name} index={index} removeTask={removeTask} />
        ))}
    </Container>
  );
};

export default TodoList;
