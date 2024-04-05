function Search({ handleSearch, searchText }) {
  return (
    <div className="flex justify-center my-4">
      <input
        onChange={(e) => handleSearch(e)}
        placeholder="Search Movies"
        value={searchText}
        className="h-[3rem] w-[18rem] bg-gray-200 outline-none rounded-lg px-4"
        type="text"
      />
    </div>
  );
}

export default Search;
