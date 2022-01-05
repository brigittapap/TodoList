import React, { useState } from "react";
import { TextField, Button, Paper } from "@material-ui/core";

const TodoForm = ({ addTask }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`to do  ${todo}`);

    if (!todo) return;
    addTask(todo);
    setTodo("");
  };

  return (
    <Paper style={{ margin: 16, padding: 16 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          type="text"
          value={todo}
          placeholder="Add a new task"
          onChange={(event) => setTodo(event.target.value)}
        />
        <Button variant="contained" color="primary" type="submit" style={{margin: 5 }}>
          Add Task
        </Button>
      </form>
    </Paper>
  );
};

export default TodoForm;
