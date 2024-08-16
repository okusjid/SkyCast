function Search() {
  return (
    <>
      {/* Search bar */}
      <div className="flex justify-center pt-8">
        <input
          type="text"
          placeholder="Enter city name"
          className="bg-white rounded-md p-2 w-1/3"
        />
        <button className="bg-blue-500 text-white p-2 rounded-md ml-2 w-1/10">
          Search
        </button>
      </div>
    </>
  );
}

export default Search;
