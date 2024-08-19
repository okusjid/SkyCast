import { useDispatch, useSelector } from "react-redux";
import { useGetWeatherByCityQuery } from "../../services/weatherApi";
import WeatherCardLayout from "./WeatherCardLayout";
import { selectCity, selectIsCelsius, setIsCelsius } from "./WeatherSlice";
import { getWeatherIconUrl } from "../../utils/getWeatherIconUrl";

export default function WeatherDetails() {
  const dispatch = useDispatch();
  const city = useSelector(selectCity); // Access city from Redux store
  const isCelsius = useSelector(selectIsCelsius); // Access isCelsius from Redux store

  // Fetch weather data using city name
  const {
    data: weatherData,
    isLoading,
    isError,
  } = useGetWeatherByCityQuery(city);

  const handleToggle = () => {
    dispatch(setIsCelsius(!isCelsius)); // Dispatch action to update isCelsius in Redux store
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-xl font-bold text-gray-500">Loading...</p>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-xl font-bold text-red-500">
          City Not Found. Please try again.
        </p>
      </div>
    );
  }

  const temperature = isCelsius
    ? weatherData?.main.temp
    : (weatherData?.main.temp * 9) / 5 + 32;
  const unit = isCelsius ? "°C" : "°F";

  // Get the weather icon code
  const iconCode = weatherData?.weather[0]?.icon;
  getWeatherIconUrl(iconCode);

  return (
    <WeatherCardLayout gradient="from-teal-400 to-blue-600">
      <div className="relative">
        <h1 className="text-4xl font-extrabold text-gray-100 mb-2 uppercase">
          {city}
        </h1>
        <div className="absolute top-0 right-2">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isCelsius}
              onChange={handleToggle} // Handle toggle using Redux action
            />
            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer-focus:ring-4 peer-focus:ring-teal-300 peer-checked:bg-teal-600 dark:bg-teal-200 dark:peer-focus:ring-teal-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"></div>
            <span className="ml-3 text-xl text-gray-200 font-bold">{unit}</span>
          </label>
        </div>

        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-extrabold text-gray-100 mb-2">
            Temperature: {Math.round(temperature)} {unit}
          </h2>
          {iconCode && (
            <img
              src={getWeatherIconUrl(iconCode)}
              alt={weatherData?.weather[0]?.description}
              className="w-16 h-16"
            />
          )}
        </div>
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
      </div>
    </WeatherCardLayout>
  );
}
