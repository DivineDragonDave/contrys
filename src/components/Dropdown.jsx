import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledBox = styled(Box)`
  min-width: 160px;
`;

export default function Dropdown({ region, setRegion }) {
  const handleChange = (event) => {
    setRegion(event.target.value);
  };

  return (
    <StyledBox>
      <FormControl fullWidth>
        <InputLabel id="region-select-label">Region</InputLabel>
        <Select
          labelId="region-select-label"
          id="region-select"
          value={region}
          label="Region"
          onChange={handleChange}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="africa">Africa</MenuItem>
          <MenuItem value="americas">Americas</MenuItem>
          <MenuItem value="asia">Asia</MenuItem>
          <MenuItem value="europe">Europe</MenuItem>
          <MenuItem value="oceania">Oceania</MenuItem>
        </Select>
      </FormControl>
    </StyledBox>
  );
}

Dropdown.propTypes = {
  region: PropTypes.string.isRequired,
  setRegion: PropTypes.func.isRequired,
};
