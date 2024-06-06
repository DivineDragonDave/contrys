import React from "react";
import { Box, TextField } from "@mui/material";
import Dropdown from "./Dropdown";
import PropTypes from "prop-types";
import "./Search.css";

const Search = ({ region, setRegion, nameFilter, setNameFilter }) => {
  const handleTextFieldChange = (event) => {
    setNameFilter(event.target.value.toLowerCase());
  };

  return (
    <Box className="search-box-container">
      <TextField
        className="search-items"
        id="outlined-basic"
        label="Search for a country"
        variant="outlined"
        onChange={handleTextFieldChange}
      />
      <Dropdown
        className="search-items"
        region={region}
        setRegion={setRegion}
      />
    </Box>
  );
};

Search.propTypes = {
  region: PropTypes.string.isRequired,
  setRegion: PropTypes.func.isRequired,
  nameFilter: PropTypes.string.isRequired,
  setNameFilter: PropTypes.func.isRequired,
};

export default Search;
