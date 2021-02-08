import "./App.css";
import TodoList from "./components/TodoList";
import { Paper, Typography, AppBar, Toolbar } from "@material-ui/core";

function App() {
  return (
    <Paper
      elevation={0}
      style={{ padding: 0, margin: 0, backgroundColor: "#fafafa" }}
    >
      <AppBar color="primary" position="static" style={{ height: 64 }}>
        <Toolbar style={{ height: 64 }}>
          <Typography color="inherit">TODO APPLICATION</Typography>
        </Toolbar>
      </AppBar>

      <TodoList></TodoList>
    </Paper>
  );
}

export default App;
