import React, { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Button, Stack, TextField, Typography } from "@mui/material";
import titleImage from "../assets/title_image.png";

export default function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = useCallback(
    ({ target: { name, value } }) => {
      setState({ ...state, [name]: value });
    },
    [state]
  );

  // const handleLogin=useCallback

  return (
    <Stack direction={"row"} justifyContent={"center"}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
        <Grid item lg={5} md={6} sm={6} xs={8} sx={{ mx: "auto" }}>
          <Stack spacing={6}>
            <Stack direction={"row"} justifyContent={"center"}>
              <Typography>Log In</Typography>
            </Stack>
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
            <Button variant="contained" size="small" onClick={handleLogin}>
              Log In
            </Button>
            <Stack direction={"row"} justifyContent={"center"}>
              <Typography sx={{ pr: 1 }}>
                If you haven't Registered yet?
              </Typography>
              <Link to={"/register"} style={{ textDecoration: "none" }}>
                <Typography color={"primary"}> Register Now </Typography>
              </Link>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}
