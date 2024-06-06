import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import { Box } from "@mui/material";
import "./CountrySkeleton.css";

const CountrySkeleton = () => {
  return (
    <Box className="main-container">
      <Box className="button-container">
        <Skeleton
          variant="rectangular"
          width={100}
          height={40}
          style={{ marginRight: "10px" }}
        />
        <Skeleton variant="rectangular" width={100} height={40} />
      </Box>
      <Box className="country">
        <Box className="flag-container">
          <Skeleton
            variant="rectangular"
            width="100%"
            height={300}
            className="flag-skeleton"
          />
        </Box>
        <Box className="info-container">
          <h1>
            <Skeleton width="60%" />
          </h1>
          <Box className="info">
            <Box className="sub-container">
              <Box className="info-text-container">
                <strong>Population: </strong>
                <Skeleton width="40%" />
              </Box>
              <Box className="info-text-container">
                <strong>Region: </strong>
                <Skeleton width="40%" />
              </Box>
              <Box className="info-text-container">
                <strong>Capital: </strong>
                <Skeleton width="40%" />
              </Box>
              <Box className="info-text-container">
                <strong>Native Name: </strong>
                <Skeleton width="40%" />
              </Box>
            </Box>
            <Box className="sub-container">
              <Box className="info-text-container">
                <strong>Top Level Domain: </strong>
                <Skeleton width="40%" />
              </Box>
              <Box className="info-text-container">
                <strong>Currencies: </strong>
                <Skeleton width="40%" />
              </Box>
              <Box className="info-text-container">
                <strong>Languages: </strong>
                <Skeleton width="40%" />
              </Box>
            </Box>
          </Box>
          <Box className="border-countries">
            <strong>Border Countries: </strong>
            <Box className="border-countries-container">
              <Skeleton
                variant="rectangular"
                width={100}
                height={40}
                style={{ marginRight: "10px" }}
              />
              <Skeleton variant="rectangular" width={100} height={40} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CountrySkeleton;
