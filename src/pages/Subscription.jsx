import React, { useCallback, useState } from "react";
import Grid from "@mui/material/Grid";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import titleImage from "../assets/title_image.png";
import { Link } from "react-router-dom";
import "../style/subscription.css";
import coin from "../assets/coin.svg";

export default function Subscription() {
  const data = [
    { title: "Basic", cost: 5, min: 5, color: "#00A4BA" },
    { title: "Standard", cost: 10, min: 10, color: "#8C8AFF" },
    { title: "Premium", cost: 30, min: 30, color: "#FD8AFF" },
    { title: "Ultimate", cost: 60, min: 60, color: "#FF8A8A" },
    { title: "Special", cost: 500, min: 500, color: "#FE9A24" },
  ];

  return (
    <>
      <img
        style={{
          width: "100%",
          maxWidth: "70vw",
          position: "absolute",
          top: -350,
          right: 0,
          zIndex: 0,
          opacity: 0.2,
        }}
        src={titleImage}
        alt="main img"
      />
      <Stack
        direction={"row"}
        justifyContent={"center"}
        sx={{ mt: 5, mb: 10, zIndex: 1, position: "relative" }}
      >
        <Typography sx={{ fontFamily: "Raleway", fontSize: 33 }}>
          Choose the plan that's right for you
        </Typography>
      </Stack>
      <Stack direction={"row"} justifyContent={"center"}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ mx: "auto" }}
        >
          {data.map((item, key) => (
            <Grid
              key={key}
              item
              sx={{ width: "20%", minWidth: 220, mx: "auto", mt: 2 }}
            >
              <Stack className="subs-item">
                <Box
                  className="subs-ribbon"
                  sx={{ backgroundColor: item.color }}
                >
                  {item.title}
                </Box>
                <Stack
                  direction={"row"}
                  justifyContent={"center"}
                  sx={{ mt: 15, position: "relative" }}
                >
                  <img alt="coin img" src={coin} width={180} />
                  <Box
                    sx={{
                      width: 180,
                      height: 160,
                      position: "absolute",
                      fontFamily: "Rajdhani",
                      fontWeight: 600,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#FFEA7D",
                      textShadow: "0 4px 3px #714a00",
                    }}
                  >
                    <sub style={{ fontSize: 44, paddingTop: 30 }}>$</sub>
                    <span style={{ fontSize: 73 }}>{item.cost}</span>
                  </Box>
                </Stack>
                <Stack
                  direction={"row"}
                  justifyContent={"center"}
                  sx={{
                    fontSize: 37,
                    fontWeight: 400,
                    fontFamily: "WallPoet",
                    mt: 3,
                    mb: 3,
                  }}
                >
                  {item.min} min
                </Stack>
                <Stack
                  direction={"row"}
                  justifyContent={"center"}
                  sx={{ mt: 3 }}
                >
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      fontSize: 14,
                      backgroundColor: "#4B73FF",
                      width: 150,
                      height: 30,
                    }}
                  >
                    Buy Now
                  </Button>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </>
  );
}
