import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SearchList from "./components/SearchList";

function App() {
  const [searchValue, setSearchValue] = useState();

  return (
    <>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      {searchValue && <SearchList searchValue={searchValue} />}
    </>
  );
}

export default App;
