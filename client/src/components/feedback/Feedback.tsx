import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Feedback() {
  return (
    <div
      style={{
        marginTop: "40px",
        padding: "30px",
        background: "rgb(242, 248, 253)",
        position: "absolute",
        width: "100%",
        left: "0",
        textAlign: "center",
      }}
    >
      <Typography variant="body2" component="div" gutterBottom>
        We'd love to hear what you think!
      </Typography>
      <Button variant="outlined" size="small">
        Give Feedback
      </Button>
    </div>
  );
}

export default Feedback;
