import React from "react";
import { Paper, makeStyles } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles(() => ({
  paper: {
    padding: "1.5rem 1rem",
    margin: "0.75rem",
    fontSize: "26",
    fontWeight: "bolder",
  },
  deleteIcon: {
    float: "right"
  }

}));

const Todo = ({ task, index, removeTask }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} elevation={15}>
      {task}  
      <DeleteIcon className={classes.deleteIcon} onClick={() => removeTask(index)}>
      </DeleteIcon>
    </Paper>
  );
};

export default Todo;
