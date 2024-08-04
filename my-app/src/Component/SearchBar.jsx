import React, { useState } from "react";
import { dummy } from "../datas/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Header, Input } from "../style/searchBar";
import SelectBox from "./SelectBox";

const SearchBar = () => {
  const [word, setWord] = useState("");
  return (
    <Header className="appHeader">
      <div className="searchBox">
        <Input
          value={word}
          onChange={(e) => setWord(e.target.value)}
          type="text"
        />

        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      {word.length > 0 && <SelectBox searchWord={word} dataList={dummy} />}
    </Header>
  );
};

export default SearchBar;
