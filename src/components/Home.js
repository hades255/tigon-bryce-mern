import { Box, Button, Grid, Typography } from "@mui/material";
import JoinForm from "./JoinForm";
import ChatBot from "./ChatBot";
import title from "../assets/title.png";
import title_image from "../assets/title_image.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box sx={{ margin: "4rem auto", padding: "0rem 3rem", maxWidth: "1326px" }}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <img src={title} />
          <div
            style={{ width: "80%", paddingRight: "20px", paddingTop: "2rem" }}
          >
            <p class="font_raleway m-5 font-20">
              Discover Bryce AI – Your Virtual Girlfriend
            </p>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/register"
            >
              <Box
                class="font_raleway button join font-20 m-5"
                sx={{
                  color: "white",
                  fontSize: 20,
                  fontFamily: "Raleway",
                  textAlign: "center",
                  bgcolor: "#4B73FF",
                  p: 1,
                }}
              >
                JOIN
              </Box>
            </Link>
            <p class="font_raleway m-5 font-20">
              Read about the recent Banter Acquisition
            </p>
          </div>
        </Grid>
        <Grid item xs={7}>
          <img
            src={title_image}
            style={{
              width: "43rem",
            }}
          ></img>
        </Grid>
      </Grid>

      <JoinForm />
      <ChatBot />
    </Box>
  );
};
export default Home;
