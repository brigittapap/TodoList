import React from "react";
import { TextField, Button, Paper } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const Todo = ({ task, index, removeTask }) => {
  return (
    <Paper
      elevation={3}
      style={{
        padding: "1.5rem 1rem",
        margin: "0.75rem",
      }}
    >
      {task}
      <IconButton
        aria-label="delete"
        style={{ float: "right" }}
        onClick={() => removeTask(index)}
      >
        <DeleteIcon />
      </IconButton>
    </Paper>
  );
};

export default Todo;
