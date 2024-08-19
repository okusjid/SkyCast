export default function WeatherCardLayout({ children, gradient }) {
  // Weather card layout component
  return (
    <div
      className={`bg-white rounded-lg p-6 w-96 shadow-lg bg-gradient-to-bl ${gradient}`}
    >
      {children}
    </div>
  );
}
