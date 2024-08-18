import { useState } from "react";
import { useDispatch } from "react-redux";
import Header from "./components/Header";
import Search from "./components/Search";
import WeatherCard from "./features/weather/WeatherCard";
import WeatherDetails from "./features/weather/WeatherDetails";
import RecentSearches from "./features/recentSearches";
import Footer from "./components/Footer";

import { addSearch } from "./features/recentSearches/recentSearchesSlice";

export default function App() {
  const [city, setCity] = useState("Lahore"); // Default city
  const dispatch = useDispatch();

  const handleSearch = (searchedCity) => {
    setCity(searchedCity);
    dispatch(addSearch(searchedCity));
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        src="/Background-Main.mp4"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60">
        <div className="relative h-full backdrop-blur-md">
          <Header />
          <div className="flex flex-col items-center pt-20 space-y-8">
            <Search onSearch={handleSearch} />
            <div className="flex justify-center items-center space-x-8">
              <WeatherCard />
              <WeatherDetails city={city} />
            </div>
            <RecentSearches />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
