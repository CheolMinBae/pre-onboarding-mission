import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SearchList from "./components/SearchList";
import { groupByData } from "../utils/groupByData";
import { dummy } from "../data/data";

function App() {
  const [searchValue, setSearchValue] = useState();

  const groupData = groupByData(dummy);
  // console.log(groupData);

  return (
    <>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      {searchValue && <SearchList searchValue={groupData} />}
    </>
  );
}

export default App;
