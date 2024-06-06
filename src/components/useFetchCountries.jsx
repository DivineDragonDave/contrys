import { useState, useEffect } from "react";

export const useFetchCountries = (region, nameFilter) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        let url;
        if (region === "all" || !region) {
          url = `https://restcountries.com/v3.1/all`;
        } else {
          url = `https://restcountries.com/v3.1/region/${region}`;
        }

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        if (!Array.isArray(json)) {
          throw new Error("Unexpected response format");
        }
        json.sort((a, b) => a.name.common.localeCompare(b.name.common));
        const sortedCountries = json.map(
          ({ flags, name, population, region, capital, cca3 }) => ({
            flagPng: flags.png,
            countryName: name.common,
            population,
            region,
            capital,
            cca3,
          })
        );
        const filteredCountries = sortedCountries.filter((country) =>
          country.countryName.toLowerCase().startsWith(nameFilter.toLowerCase())
        );
        setCountries(filteredCountries);
      } catch (error) {
        console.error("Error fetching countries:", error); // Log detailed error
        setError({ message: error.message }); // Ensure error has a message property
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [region, nameFilter]);

  return { countries, loading, error };
};
