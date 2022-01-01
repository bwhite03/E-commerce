import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "axios";

function SignupPage(props: any) {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");

  const submit = async (event: any) => {
    event.preventDefault();
    try {
      const response = await axios.post("/register", {
        username: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
      });
      navigate("/signin");
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
        Create Your Guitar World Account
      </Typography>
      <Stack component="form">
        <TextField
          id="standard-basic"
          label="First Name"
          variant="standard"
          required
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <TextField
          id="standard-basic"
          label="Last Name"
          variant="standard"
          required
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
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
          Create Account
        </Button>
        <Link to="/signin" style={{ color: "#1976D2", marginTop: "10px" }}>
          <Button variant="outlined" style={{ width: "100%" }}>
            Sign In
          </Button>
        </Link>
      </Stack>
    </Box>
  );
}

export default SignupPage;
