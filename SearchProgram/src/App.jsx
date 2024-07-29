import { useState } from "react";
import "./App.css";
import { dummy } from "./assets/data";

function App() {
  const [searchList, setSearchList] = useState(dummy);
  const [searchKeyword, setSearchKeyword] = useState("");

  const onChange = (e) => {
    console.log("hi");
    setSearchKeyword(e.target.value);
  };

  return (
    <div id="container">
      <input onChange={(e) => onChange(e)}></input>
      {searchKeyword && (
        <div id="listContainer">
          <ul>
            {searchList.map((elem) => (
              <li>{elem.description}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
