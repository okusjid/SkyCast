import WeatherCardLayout from "./WeatherCardLayout";

export default function WeatherCard() {
  return (
    <WeatherCardLayout gradient="from-purple-600 to-blue-400">
      <h2 className="text-3xl font-extrabold text-gray-100 mb-2">
        Date: 16/08/2024
      </h2>
      <h3 className="text-lg text-gray-200 mb-1">Time: 5:14 PM</h3>
      <h3 className="text-lg text-gray-200 mb-1">City: Lahore</h3>
      <h3 className="text-lg text-gray-200">Weather: Sunny</h3>
    </WeatherCardLayout>
  );
}
