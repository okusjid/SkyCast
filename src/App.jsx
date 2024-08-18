import Header from "./Common/components/Header";
import Search from "./Common/components/Search";
import WeatherCard from "./Common/components/Weather Cards/WeatherCard";
import WeatherDetails from "./Common/components/Weather Cards/WeatherDetails";
import RecentSearches from "./Common/components/RecentSearches";
import Footer from "./Common/components/Footer";

export default function App() {
  return (
    <div className="relative h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        src="/Background-Main.mp4"
      >
        {/* Fallback image or content can be placed here */}
        <div className="w-full h-full bg-fallback-bg bg-cover"></div>
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-60">
        <div className="relative h-full backdrop-blur-md">
          <Header />
          <Search />
          <div className="flex flex-col items-center pt-20 space-y-8">
            {/* Weather Cards */}
            <div className="flex justify-center items-center space-x-8">
              <WeatherCard />
              <WeatherDetails />
            </div>
            {/* Recent Searches */}
            <RecentSearches />
          </div>
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
