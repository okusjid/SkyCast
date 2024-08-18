import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useGetWeatherByCityQuery, useGetCityByCoordsQuery } from "../../services/weatherApi";
import { addSearch } from "../recentSearches/recentSearchesSlice";
import WeatherCardLayout from "./WeatherCardLayout";

export default function WeatherCard() {
  const [city, setCity] = useState("Lahore");
  const [coords, setCoords] = useState(null);
  const dispatch = useDispatch();

  // Fetch city name using coordinates
  const { data: cityData, isLoading: cityLoading } = useGetCityByCoordsQuery(coords, {
    skip: !coords,
  });

  // Get user's approximate location and find the city name
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCoords({ lat: latitude, lon: longitude });
        },
        (error) => {
          console.error("Error fetching location: ", error);
          // Fallback city if location access is denied
          setCity("Lahore");
        }
      );
    } else {
      setCity("Lahore"); // Fallback city if geolocation is not supported
    }
  }, []);

  // Set city name once fetched from coordinates
  useEffect(() => {
    if (cityData) {
      setCity(cityData[0]?.name);
    }
  }, [cityData]);

  // Handle manual city search
  const handleCitySearch = (searchedCity) => {
    setCity(searchedCity);
    dispatch(addSearch(searchedCity));
  };

  if (cityLoading) return <p>Loading...</p>;

  return (
    <WeatherCardLayout gradient="from-purple-600 to-blue-400">
      <h2 className="text-3xl font-extrabold text-gray-100 mb-2">City: {city}</h2>
      <h3 className="text-lg text-gray-200 mb-1">Date: {new Date().toLocaleDateString()}</h3>
      <h3 className="text-lg text-gray-200 mb-1">Time: {new Date().toLocaleTimeString()}</h3>
      <h3 className="text-lg text-gray-200">Weather: Sunny</h3> {/* This can be updated dynamically if needed */}
    </WeatherCardLayout>
  );
}
