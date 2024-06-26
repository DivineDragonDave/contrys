import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import "./SkeletonCard.css";

export default function SkeletonCard() {
  return (
    <div className="card-container">
      <Skeleton variant="rectangular" width={270} height={140} />
      <div className="text-container">
        <Skeleton
          className="h2-skeleton"
          variant="text"
          sx={{ fontSize: "26px" }}
        />
        <div className="p-container">
          <div className="p-title">Population:</div>
          <Skeleton
            className="p-skeleton"
            variant="text"
            sx={{ fontSize: "1rem" }}
          />
        </div>
        <div className="p-container">
          <div className="p-title">Region:</div>
          <Skeleton
            className="p-skeleton"
            variant="text"
            sx={{ fontSize: "1rem" }}
          />
        </div>
        <div className="p-container">
          <div className="p-title">Capital:</div>
          <Skeleton
            className="p-skeleton"
            variant="text"
            sx={{ fontSize: "1rem" }}
          />
        </div>
      </div>
    </div>
  );
}
