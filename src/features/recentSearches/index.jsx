import { useSelector } from "react-redux";

export default function RecentSearches() {
  const recentSearches = useSelector((state) => state.recentSearches);

  return (
    <div className="flex justify-center items-center space-x-8 p-4">
      {recentSearches.length === 0 ? (
        <h1 className="text-gray-200">No recent searches</h1>
      ) : (
        recentSearches.slice(0, 5).map((search, index) => (
          <div
            key={index}
            className="flex flex-col space-y-2 p-4 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-lg shadow-md text-center relative"
          >
            <div className="text-lg font-semibold text-gray-100 mb-2">{search.city}</div>
            <div className="text-sm text-gray-400 mb-4">Searched at: {search.time}</div>
            <div className="text-gray-200 space-y-1">
              <p>Temp: {search.temperature} °C</p>
              <p>Weather: {search.weather}</p>
              <p>Humidity: {search.humidity}%</p>
            </div>

          
          </div>
        ))
      )}
    </div>
  );
}
