import Header from "./Common/components/Header/Header";
import Search from "./Common/components/Search/Search";
import WeatherCard from "./Common/components/Weather Cards/WeatherCard";
import WeatherDetails from "./Common/components/Weather Cards/WeatherDetails";
import Footer from "./Common/components/Footer/Footer";

export default function App() {
  return (
    <div className="bg-cloud-bg bg-cover h-screen backdrop-blur-md">
      <Header /> {/* Header */}
      <Search /> {/* Search bar */}
      <div className="flex justify-center items-center pt-8 space-x-8">
        {" "}
        {/* Top Card */}
        <WeatherCard /> {/* Left Card */}
        <WeatherDetails /> {/* Right Card */}
      </div>
      {/* Bottom Cards */}
      <div className="flex justify-center pt-8">
        <div className="bg-gradient-to-bl from-purple-600 to-blue-400 rounded-lg shadow-lg p-6 text-gray-100 w-2/3">
          <div className="grid grid-cols-5 gap-4 divide-x divide-gray-300">
            <div className="text-center">
              <h3 className="text-xl font-bold">City: Lahore</h3>
              <p>Weather: Sunny</p>
              <p>Temp: 30°C</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold">City: Karachi</h3>
              <p>Weather: Cloudy</p>
              <p>Temp: 25°C</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold">City: Islamabad</h3>
              <p>Weather: Sunny</p>
              <p>Temp: 30°C</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold">City: Peshawar</h3>
              <p>Weather: Cloudy</p>
              <p>Temp: 25°C</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold">City: Quetta</h3>
              <p>Weather: Sunny</p>
              <p>Temp: 30°C</p>
            </div>
          </div>
        </div>
      </div>
      <Footer /> {/* Footer */}
    </div>
  );
}
