import { useSelector } from "react-redux";

export default function RecentSearches() {
  const recentSearches = useSelector((state) => state.recentSearches);

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-gray-100 mb-2">Recent Searches</h3>
      <div className="space-y-1">
        {recentSearches.map((search, index) => (
          <div key={index} className="text-gray-200">
            {search}
          </div>
        ))}
      </div>
    </div>
  );
}
