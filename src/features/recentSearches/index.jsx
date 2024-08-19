import { useSelector } from "react-redux";

export default function RecentSearches() {
  // Get the recent searches from the Redux store
  const recentSearches = useSelector((state) => state.recentSearches);

  // Get the temperature unit preference from the Redux store
  const isCelsius = useSelector((state) => state.weather.isCelsius); // Fixed typo: isCelcius -> isCelsius

  return (
    <div className="flex justify-center items-center space-x-8 p-4">
      {recentSearches.length === 0 ? (
        <h1 className="text-gray-200">No recent searches</h1>
      ) : (
        recentSearches.slice(0, 5).map((search, index) => {
          // Calculate the temperature based on the unit preference
          const temperature = isCelsius
            ? search.temperature
            : (search.temperature * 9) / 5 + 32;
          const unit = isCelsius ? "°C" : "°F";

          return (
            <div
              key={index}
              className="flex flex-col space-y-2 p-4 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-lg shadow-md text-center relative"
            >
              <div className="text-lg font-semibold text-gray-100 mb-2 capitalize">
                {search.city}
              </div>
              <div className="text-sm text-gray-400 mb-4">
                Searched at: {search.time}
              </div>
              <div className="text-gray-200 space-y-1 text-left">
                <p>
                  Temp: {Math.round(temperature)} {unit}
                </p>
                <p>Weather: {search.weather}</p>
                <p>Humidity: {search.humidity}%</p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
