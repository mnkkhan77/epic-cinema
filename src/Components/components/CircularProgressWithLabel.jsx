import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const CircularProgressWithLabel = ({ value, ...props }) => {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        aria-label="circularProgress"
        variant="determinate"
        color="success"
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

const CircularWithValueLabel = ({ progress = 50 }) => {
  return <CircularProgressWithLabel value={progress} />;
};

export default CircularWithValueLabel;
