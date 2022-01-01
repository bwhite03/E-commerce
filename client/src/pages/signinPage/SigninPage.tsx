import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "axios";

function SigninPage(props: any) {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const submit = async (event: any) => {
    event.preventDefault();
    try {
      const response = await axios.post("/authenticate", {
        username: email,
        password: password,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      style={{
        textAlign: "center",
        width: "40%",
        margin: "auto",
        paddingTop: "15px",
      }}
    >
      <Typography variant="h6" component="div" gutterBottom>
        Sign Into Your Guitar World Account
      </Typography>
      <Stack component="form">
        <TextField
          id="standard-basic"
          label="Email Address"
          variant="standard"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          type="password"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          variant="contained"
          style={{ marginTop: "10px" }}
          onClick={submit}
        >
          Sign In
        </Button>
        <Link to="/signup" style={{ color: "#1976D2", marginTop: "10px" }}>
          <Button variant="outlined" style={{ width: "100%" }}>
            Create Account
          </Button>
        </Link>
      </Stack>
    </Box>
  );
}

export default SigninPage;
