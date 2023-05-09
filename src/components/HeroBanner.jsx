import {
  Box,
  Button,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React from "react";
import HeroBannerImage from "../assets/images/banner.png";
const HeroBanner = () => {
  const theme = createTheme({
    palette: {
      secondary: {
        main: "#FF2625",
      },
    },
  });
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position={"relative"}
      p="20px"
    >
      <Typography color={"#FF2625"} fontWeight={600} height={"26px"}>
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb={"23px"}
        mt={"30px"}
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize={"22px"} lineHeight={"35px"} mb={4}>
        Check out the most effective exercises
      </Typography>
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          color={"secondary"}
          href="#exercises"
          sx={{ backgroundColor: "#FF2625", padding: "10px" }}
        >
          Explore Exercises
        </Button>
      </ThemeProvider>
      <Typography
        fontWeight={600}
        color={"#FF2625"}
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
        fontSize={"200px"}
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} className="hero-banner-img" alt="banner" />
    </Box>
  );
};

export default HeroBanner;
