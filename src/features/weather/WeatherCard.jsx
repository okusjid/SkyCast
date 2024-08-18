import { useEffect, useRef } from "react";
import WeatherCardLayout from "./WeatherCardLayout";

export default function WeatherCard() {
  const dateRef = useRef();
  const timeRef = useRef();

  useEffect(() => {
    // Function to update the date and time
    const updateDateTime = () => {
      const now = new Date();
      dateRef.current.textContent = now.toLocaleDateString();
      timeRef.current.textContent = now.toLocaleTimeString();
    };

    // Initial update
    updateDateTime();

    // Update every second
    const intervalId = setInterval(updateDateTime, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <WeatherCardLayout gradient="from-blue-500 to-blue-800">
      <div className="flex flex-col items-center justify-center text-center space-y-4 p-6 bg-white/20 backdrop-blur-lg rounded-xl shadow-lg border border-white/30">
        <div className="text-white">
          <h2 className="text-3xl font-semibold tracking-wide" ref={dateRef}>
            Date: --
          </h2>
        </div>
        <div className="text-white">
          <h2 className="text-4xl font-bold tracking-wide" ref={timeRef}>
            Time: --:--
          </h2>
        </div>
      </div>
    </WeatherCardLayout>
  );
}
