import { Box, Button, Container, Stack, Typography } from "@mui/material";
import logo from "../assets/logo.png";
import logo_white from "../assets/logo_white.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box
      sx={{
        width: "100%",
        pt: 8,
        pb: 8,
      }}
    >
      <Container>
        <Stack direction={"row"}>
          <div>
            <Link to="/">
              <img
                style={{
                  width: "5rem",
                  margin: "1rem 0rem",
                  padding: "0rem 1rem",
                }}
                src={logo_white}
              />
            </Link>
          </div>
          <Typography variant="h4" component="h2" sx={{ margin: "0rem 1rem" }}>
            Bryce.ai
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};
export default Header;
