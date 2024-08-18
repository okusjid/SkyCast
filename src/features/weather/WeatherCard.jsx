import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useGetWeatherByCityQuery, useGetCityByCoordsQuery } from "../../services/weatherApi";
import { addSearch } from "../recentSearches/recentSearchesSlice";
import WeatherCardLayout from "./WeatherCardLayout";

export default function WeatherCard({ city }) {
  const [localTime, setLocalTime] = useState(new Date());
  const [coords, setCoords] = useState(null);
  const dispatch = useDispatch();

  // Fetch weather data including timezone information using city name
  const { data: weatherData, isLoading: weatherLoading } = useGetWeatherByCityQuery(city);

  // Get user's approximate location and find the city name (only when first loading)
  useEffect(() => {
    if (!city && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCoords({ lat: latitude, lon: longitude });
        },
        (error) => {
          console.error("Error fetching location: ", error);
          // Fallback city if location access is denied
          dispatch(addSearch("Lahore")); // Optional: Add "Lahore" as fallback
        }
      );
    }
  }, [city, dispatch]);

  // Update the local time for the searched city based on the city's timezone
  useEffect(() => {
    if (weatherData && weatherData.timezone) {
      const timezoneOffsetInSeconds = weatherData.timezone;
      const currentUtcTime = new Date().getTime();
      const localTimeInMs = currentUtcTime + timezoneOffsetInSeconds * 1000;
      setLocalTime(new Date(localTimeInMs));
    }
  }, [weatherData]);

  // Set up the live clock with an interval that updates every second based on the city's timezone
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (weatherData && weatherData.timezone) {
        const timezoneOffsetInSeconds = weatherData.timezone;
        const currentUtcTime = new Date().getTime();
        const localTimeInMs = currentUtcTime + timezoneOffsetInSeconds * 1000;
        setLocalTime(new Date(localTimeInMs));
      }
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [weatherData]);

  if (weatherLoading) return <p>Loading...</p>;

  return (
    <WeatherCardLayout gradient="from-purple-600 to-blue-400">
      <h2 className="text-3xl font-extrabold text-gray-100 mb-2">City: {city}</h2>
      <h3 className="text-lg text-gray-200 mb-1">Date: {localTime.toLocaleDateString()}</h3>
      <h3 className="text-lg text-gray-200 mb-1">Time: {localTime.toLocaleTimeString()}</h3>
    </WeatherCardLayout>
  );
}
