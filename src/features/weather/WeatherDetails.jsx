import { useState } from "react";
import { useGetWeatherByCityQuery } from "../../services/weatherApi";
import WeatherCardLayout from "./WeatherCardLayout";

export default function WeatherDetails({ city }) {
  const [isCelsius, setIsCelsius] = useState(true);

  // Fetch weather data using city name
  const { data: weatherData, isLoading } = useGetWeatherByCityQuery(city);

  const handleToggle = () => {
    setIsCelsius(!isCelsius);
  };

  if (isLoading) return <p>Loading...</p>;

  const temperature = isCelsius
    ? weatherData?.main.temp
    : (weatherData?.main.temp * 9) / 5 + 32;
  const unit = isCelsius ? "°C" : "°F";

  return (
    <WeatherCardLayout gradient="from-teal-400 to-blue-600">
      <div className="relative">
      {/* show city name */}
        <h1 className="text-4xl font-extrabold text-gray-100 mb-2">
          {city}
        </h1>
        {/* Toggle Button */}
        <div className="absolute top-20 right-2">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isCelsius}
              onChange={handleToggle}
            />
            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer-focus:ring-4 peer-focus:ring-teal-300 peer-checked:bg-teal-600 dark:bg-teal-200 dark:peer-focus:ring-teal-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"></div>
            <span className="ml-3 text-xl text-gray-200 font-bold">{unit}</span>
          </label>
        </div>

        {/* Weather Details */}
        <h2 className="text-3xl font-extrabold text-gray-100 mb-2">
          {/* round of temp value */}
          Temperature: {Math.round(temperature)} {unit}
        </h2>
        <h3 className="text-lg text-gray-200 mb-1">
          Weather: {weatherData?.weather[0]?.description || "N/A"}
        </h3>
        <h3 className="text-lg text-gray-200 mb-1">
          Humidity: {weatherData?.main.humidity}%
        </h3>
        <h3 className="text-lg text-gray-200 mb-1">
          Wind: {weatherData?.wind.speed} m/s
        </h3>
        <h3 className="text-lg text-gray-200 mb-1">
          Visibility: {weatherData?.visibility / 1000} km
        </h3>
        <h3 className="text-lg text-gray-200">
          Precipitation: {weatherData?.rain ? weatherData.rain["1h"] : "0"} mm
        </h3>

        {/* Display JSON data for debugging or further details */}
        {/* <pre className="text-sm text-gray-300 mt-4 p-2 bg-gray-800 rounded-lg">
          {JSON.stringify(weatherData, null, 2)}
        </pre> */}
      </div>
    </WeatherCardLayout>
  );
}
