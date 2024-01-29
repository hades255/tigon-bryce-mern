import React, { useCallback, useState } from "react";
import Grid from "@mui/material/Grid";
import { Button, Stack, TextField, Typography } from "@mui/material";
import titleImage from "../assets/title_image.png";
import { Link } from "react-router-dom";

export default function Register() {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = useCallback(
    ({ target: { name, value } }) => {
      setState({ ...state, [name]: value });
    },
    [state]
  );

  return (
    <Stack direction={"row"} justifyContent={"center"}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item lg={5} md={6} sm={6} xs={8} sx={{ mx: "auto" }}>
          <Stack spacing={6}>
            <Stack direction={"row"} justifyContent={"center"}>
              <Typography>Sign Up</Typography>
            </Stack>
            <TextField
              id="username"
              name="username"
              value={state.username}
              onChange={handleInputChange}
              label="Username"
              variant="outlined"
              size="small"
            />
            <TextField
              id="email"
              name="email"
              value={state.email}
              onChange={handleInputChange}
              label="Email"
              variant="outlined"
              size="small"
            />
            <TextField
              id="password"
              name="password"
              value={state.password}
              onChange={handleInputChange}
              label="Password"
              variant="outlined"
              size="small"
            />
            <Button variant="contained" size="small">
              Sign up
            </Button>
            <Stack direction={"row"} justifyContent={"center"}>
              <Typography sx={{ pr: 1 }}>Already have an account?</Typography>
              <Link to={"/login"} style={{ textDecoration: "none" }}>
                <Typography color={"primary"}> Login </Typography>
              </Link>
            </Stack>
          </Stack>
        </Grid>
        <Grid item lg={7} md={6} sm={6} xs={8} sx={{ mx: "auto" }}>
          <img
            style={{
              width: "100%",
              maxWidth: 700,
            }}
            src={titleImage}
            alt="main img"
          />
        </Grid>
      </Grid>
    </Stack>
  );
}
