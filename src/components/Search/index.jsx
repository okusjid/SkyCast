import { useState } from "react";

export default function Search({ onSearch }) {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const handleSearch = () => {
    if (input.trim()) {
      onSearch(input);
      setInput(""); // Clear input after search
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Search City"
        className="bg-gray-200 text-gray-800 rounded-lg p-2 focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md"
      >
        Search
      </button>
    </div>
  );
}
