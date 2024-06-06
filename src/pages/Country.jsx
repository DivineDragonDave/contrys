import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/material/Button";
import Chips from "../components/Chips";
import CountrySkeleton from "../components/CountrySkeleton";
import "./Country.css";
import { useState, useEffect } from "react";

const Country = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
        if (!res.ok) {
          throw new Error(`Could not get country with id ${id}`);
        }
        const data = await res.json();
        setCountry(data[0]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryData();
  }, [id]);

  if (loading) {
    return <CountrySkeleton />;
  }

  if (error) {
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
          <Button
            className="theme-button"
            variant="text"
            startIcon={<HomeIcon />}
            sx={{ fontWeight: 300, fontSize: "16px" }}
            onClick={() => navigate("/")}
          >
            home
          </Button>
        </div>
        <h1>Error loading country data: {error.message}</h1>
      </div>
    );
  }

  const nativeName = country.name.nativeName
    ? Object.values(country.name.nativeName)[0].common
    : "N/A";
  const currencies = country.currencies
    ? Object.values(country.currencies)
        .map((currency) => currency.name)
        .join(", ")
    : "N/A";
  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "N/A";
  const chipArray = country.borders ? country.borders : [];

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
        <Button
          className="theme-button"
          variant="text"
          startIcon={<HomeIcon />}
          sx={{ fontWeight: 300, fontSize: "16px" }}
          onClick={() => navigate("/")}
        >
          home
        </Button>
      </div>
      <div className="country">
        <div className="flag-container">
          <img
            className="flag-img"
            src={country.flags.png}
            alt={`flag of ${country.name.common}`}
          />
        </div>
        <div className="info-container">
          <h1>{country.name.common}</h1>
          <div className="info">
            <div className="sub-container">
              <div className="info-text-container">
                <strong>Population: </strong>
                {country.population.toLocaleString("en-US", {
                  style: "decimal",
                  useGrouping: true,
                })}
              </div>
              <div className="info-text-container">
                <strong>Region: </strong>
                {country.region}
              </div>
              <div className="info-text-container">
                <strong>Capital: </strong>
                {country.capital ? country.capital.join(", ") : "N/A"}
              </div>
              <div className="info-text-container">
                <strong>Native Name: </strong>
                {nativeName}
              </div>
            </div>
            <div className="sub-container">
              <div className="info-text-container">
                <strong>Top Level Domain: </strong>
                {country.tld ? country.tld.join(" ") : "N/A"}
              </div>
              <div className="info-text-container">
                <strong>Currencies: </strong>
                {currencies}
              </div>
              <div className="info-text-container">
                <strong>Languages: </strong>
                {languages}
              </div>
            </div>
          </div>
          <div className="border-countries">
            <strong>Border Countries: </strong>
            <div className="border-countries-container">
              {chipArray.length > 0
                ? chipArray.map((chip, i) => <Chips chip={chip} key={i} />)
                : "N/A"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
