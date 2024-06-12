import baseURL from "./url.js";

const fetchAllCities = async () => {
  const data = await fetch(`${baseURL}/cities`);
  const cities = await data.json();
};

const fetchPopularCities = async () => {
  const data = await fetch(`${baseURL}/cities/popular`);
  const popularCities = await data.json();

  return popularCities;
};

export { fetchAllCities, fetchPopularCities };
