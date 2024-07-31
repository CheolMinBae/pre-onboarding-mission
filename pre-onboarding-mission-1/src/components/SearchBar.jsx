function SearchBar({ searchValue, setSearchValue }) {
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);

    // state 값 확인
    // console.log("########## searchValue의 값 : ", searchValue);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={handleInputChange}
      />
      <button>검색</button>
    </div>
  );
}

export default SearchBar;
