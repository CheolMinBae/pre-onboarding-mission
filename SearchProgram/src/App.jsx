import { useEffect, useState } from "react";
import "./App.css";
import { dummy } from "./assets/data";

function App() {
  const [searchList, setSearchList] = useState(dummy);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    let timer = setTimeout(() => {}, 333);
    return () => {
      clearTimeout(timer);
    };
  }, [searchKeyword]);
  
  const onChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  return (
    <div id="container">
      <input onChange={(e) => onChange(e)}></input>
      {searchKeyword && (
        <div id="listContainer">
          <ul>
            {searchList.map((elem, idx) => {
              const test = elem.description.replace(
                searchKeyword,
                `<strong>${searchKeyword}</strong>`
              );
              return (
                <>
                  {(idx == 0 ||
                    (idx > 0 && searchList[idx - 1].type != elem.type)) && (
                    <li className="type" key={elem.type}>
                      {elem.type}
                    </li>
                  )}
                  <li
                    className="notAType"
                    key={idx}
                    dangerouslySetInnerHTML={{ __html: test }}
                  ></li>
                </>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
