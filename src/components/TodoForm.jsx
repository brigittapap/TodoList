import React, { useState } from "react";
import { TextField, Button, Paper, makeStyles } from "@material-ui/core";


const useStyles = makeStyles(() => ({
  paper: {
    padding: "0.75rem",
    margin: "0.75rem",
    fontSize: "26",
  },
  button: {
    margin: "18"
  },
  textfield: {
    width: "85%",
    margin: "0 0.75rem",
  }

}));

const TodoForm = ({ addTask }) => {
  const [todo, setTodo] = useState("");
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!todo) return;
    addTask(todo);
    setTodo("");
  };

  return (
    <Paper className={classes.paper} elevation={0}>
      <form onSubmit={handleSubmit}>
        <TextField className={classes.textfield}
          id="standard-basic"
          variant="outlined" 
          type="text"
          size="small"
          value={todo}
          placeholder="Add a new task"
          onChange={(event) => setTodo(event.target.value)}
        />
        <Button 
          variant="contained" 
          type="submit" 
          classes={classes.button}>
          Add Task
        </Button>
      </form>
    </Paper>
  );
};

export default TodoForm;
