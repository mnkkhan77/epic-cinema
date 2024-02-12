import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const CircularProgressWithLabel = ({ value, ...props }) => {
  let color;
  if (value > 70) {
    color = "green";
  } else if (value >= 50 && value <= 70) {
    color = "yellow";
  } else {
    color = "red";
  }
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        aria-label="circularProgress"
        variant="determinate"

        style={{ backgroundColor: "#394F8A", borderRadius: "50%", color: color }}
        thickness={5}
        value={value}
        {...props}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="white"
          fontWeight="1000"
        >
          {parseFloat((value / 10).toFixed(1))}
        </Typography>
      </Box>
    </Box>
  );
};

const CircularWithValueLabel = ({ progress = 100 }) => {
  return <CircularProgressWithLabel value={progress} />;
};

export default CircularWithValueLabel;
