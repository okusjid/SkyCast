import React from "react";

export default function WeatherCardLayout({ children, gradient }) {
  return (
    <div
      className={`bg-white rounded-lg p-6 w-96 shadow-lg bg-gradient-to-bl ${gradient}`}
    >
      {children}
    </div>
  );
}
