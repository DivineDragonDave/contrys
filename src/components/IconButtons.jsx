import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import PropTypes from "prop-types";

export default function IconButtons({ text, toggleTheme, theme }) {
  const handleOnClick = () => {
    toggleTheme();
  };

  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="center"
      alignItems="center"
    >
      <Button
        className="theme-button"
        variant="text"
        startIcon={theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        sx={{ fontWeight: 300, fontSize: "16px" }}
        onClick={handleOnClick}
      >
        {text}
      </Button>
    </Stack>
  );
}

IconButtons.propTypes = {
  text: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};
