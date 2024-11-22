// mui-libs
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

// react-libs
import React, { ReactNode } from "react";

// interfaces
interface NavbarProps {
  children: ReactNode;  
}
const Navbar:  React.FC<NavbarProps> = ({ children }) => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>

        <IconButton edge="start" color="inherit" aria-label="logo" sx={{ mr: 2 }}>
          <img
            src='./nasdaq.png'
            alt="Logo"
            style={{ width: 40, height: 40 }}
          />
        </IconButton>


        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Nasdaq
        </Typography>

        {children}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
