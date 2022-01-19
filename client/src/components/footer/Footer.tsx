import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Footer() {
  return (
    <AppBar
      position="static"
      color="primary"
      sx={{ position: "absolute", bottom: "0" }}
    >
      <Toolbar>
        <Typography variant="body1" color="inherit">
          © 2019 Gistia
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
