import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import PropTypes from "prop-types";
import "./Card.css";

export default function ActionAreaCard({
  flagPng,
  countryName,
  population,
  region,
  capital,
}) {
  if (capital) {
    capital = capital.join(" ");
  }

  return (
    <Card className="card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={flagPng}
          alt={`Flag of ${countryName}`}
          style={{ boxShadow: "0 5px 10px 5px rgba(0, 0, 0, 0.2)" }}
        />
        <CardContent>
          <Typography variant="h6" component="div">
            {countryName}
          </Typography>
          <Typography variant="body1">
            <strong>Population:</strong>
            <span>
              {population.toLocaleString("en-US", {
                style: "decimal",
                useGrouping: true,
              })}
            </span>
          </Typography>
          <Typography variant="body1">
            <strong>Region:</strong> <span>{region}</span>
          </Typography>
          <Typography variant="body1">
            <strong>Capital:</strong> <span>{capital || "N/A"}</span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

ActionAreaCard.propTypes = {
  flagPng: PropTypes.string.isRequired,
  countryName: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.arrayOf(PropTypes.string),
};

ActionAreaCard.defaultProps = {
  capital: [],
};
