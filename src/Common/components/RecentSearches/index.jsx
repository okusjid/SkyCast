export default function Index() {
    return (
      <div className="flex justify-center pt-10">
        <div className="bg-gradient-to-bl from-purple-600 to-blue-400 rounded-lg shadow-lg p-8 text-gray-100 w-2/3">
          <div className="grid grid-cols-5 gap-8 divide-x divide-gray-300 px-16">
            <div className="text-center px-4">
              <h3 className="text-xl font-bold">City: Lahore</h3>
              <p>Weather: Sunny</p>
              <p>Temp: 30°C</p>
            </div>
            <div className="text-center px-4">
              <h3 className="text-xl font-bold">City: Karachi</h3>
              <p>Weather: Cloudy</p>
              <p>Temp: 25°C</p>
            </div>
            <div className="text-center px-4">
              <h3 className="text-xl font-bold">City: Islamabad</h3>
              <p>Weather: Sunny</p>
              <p>Temp: 30°C</p>
            </div>
            <div className="text-center px-4">
              <h3 className="text-xl font-bold">City: Peshawar</h3>
              <p>Weather: Cloudy</p>
              <p>Temp: 25°C</p>
            </div>
            <div className="text-center px-4">
              <h3 className="text-xl font-bold">City: Quetta</h3>
              <p>Weather: Sunny</p>
              <p>Temp: 30°C</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  