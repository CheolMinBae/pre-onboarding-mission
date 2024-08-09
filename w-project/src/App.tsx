import { ChangeEvent, useState } from "react";
import "./App.scss";
import search from "./assets/search.png";
import SearchList from "./components/SearchList";

function App() {
  const [keyWord, setKeyWord] = useState("");

  const searchKeyWord = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyWord(e.target.value);
  };

  return (
    <>
      <div className="app">
        <header className="app-header">
          <div className="input-area">
            <div className="input-box">
              <input type="text" value={keyWord} onChange={(e) => searchKeyWord(e)} />
              {keyWord && <SearchList keyWord={keyWord}></SearchList>}
            </div>
            <div className="search-icon">
              <img src={search} alt="" />
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
