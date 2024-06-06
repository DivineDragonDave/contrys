import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Search from "../components/Search";
import Card from "/src/components/Card";
import SkeletonCard from "/src/components/SkeletonCard";
import { useFetchCountries } from "../components/useFetchCountries";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

function Home() {
  const [region, setRegion] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const { countries, loading, error } = useFetchCountries(region, nameFilter);
  const navigate = useNavigate();

  if (error)
    return (
      <div className="main-container">
        <div className="button-container">
          <Button
            className="theme-button"
            variant="text"
            startIcon={<ArrowBackIcon />}
            sx={{ fontWeight: 300, fontSize: "16px" }}
            onClick={() => navigate(-1)}
          >
            back
          </Button>
        </div>
        <h1>Error: {error.message}</h1>
      </div>
    );

  return (
    <main style={{ padding: "0 10px" }}>
      <Search
        region={region}
        setRegion={setRegion}
        nameFilter={nameFilter}
        setNameFilter={setNameFilter}
      />
      <div
        className="main-container"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexFlow: "wrap",
          justifyContent: "center",
          gap: "40px",
        }}
      >
        {!loading
          ? countries.map((country, i) => (
              <Link
                key={i}
                to={"/country/" + country.cca3}
                style={{ textDecoration: "none" }}
              >
                <Card {...country} />
              </Link>
            ))
          : Array.from({ length: 12 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
        {countries.length === 0 && !loading && (
          <h2>No countries in that region</h2>
        )}
      </div>
    </main>
  );
}

export default Home;
