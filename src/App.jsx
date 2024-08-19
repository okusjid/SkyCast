import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import Search from "./components/Search";
import WeatherDetails from "./Features/Weather/WeatherDetails";
import RecentSearches from "./features/recentSearches";
import Footer from "./components/Footer";
import { selectCity, setCity } from "./Features/Weather/WeatherSlice";
import { useGetWeatherByCityQuery } from "./services/weatherApi";
import { addSearch } from "./features/recentSearches/recentSearchesSlice";

export default function App() {
  const dispatch = useDispatch();
  const city = useSelector(selectCity);

  // Fetch weather data based on the selected city
  const {
    data: weatherData,
    isLoading,
    isError,
  } = useGetWeatherByCityQuery(city, {
    refetchOnMountOrArgChange: true,
  });

  // Handle search and update city state
  const handleSearch = (searchedCity) => {
    dispatch(setCity(searchedCity));
    if (!isLoading && weatherData && !isError) {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      const searchData = {
        city,
        time: formattedTime,
        temperature: Math.round(weatherData.main.temp),
        weather: weatherData.weather[0].description,
        humidity: weatherData.main.humidity,
      };

      dispatch(addSearch(searchData));
    }
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
          <div className="flex flex-col items-center pt-4 space-y-8">
            <Search onSearch={handleSearch} />
            <div className="flex justify-center items-center space-x-8">
              <WeatherDetails />
            </div>
            <RecentSearches />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
