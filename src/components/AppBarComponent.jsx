import React from "react";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';

export default function AppBarComponent() {
    return (
      <AppBar position="sticky">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            To Do List 
          </Typography>
        </Toolbar>
      </AppBar>
    );
}


  
  