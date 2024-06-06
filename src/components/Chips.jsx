import React from "react";
import { Link } from "react-router-dom";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";

const Chips = ({ chip }) => {
  return (
    <Stack direction="row" spacing={1}>
      <Link to={`/country/${chip}`} style={{ textDecoration: "none" }}>
        <Chip className="chip" label={chip} clickable />
      </Link>
    </Stack>
  );
};

Chips.propTypes = {
  chip: PropTypes.string.isRequired,
};

export default Chips;
