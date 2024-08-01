import { useEffect, useState } from "react";
import "./App.css";
import { dummy } from "./assets/data";

function App() {
  const [searchList, setSearchList] = useState(dummy);
  const [searchKeyword, setSearchKeyword] = useState("");

  // useEffect(() => {
  //   let timer = setTimeout(() => {}, 333);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [searchKeyword]);

  const onChange = (e) => {
    setSearchKeyword(e.target.value);
    //   let timer = setTimeout(() => {
    //   setSearchKeyword(e.target.value);
    // }, 1000);
    // return () => {
    //   clearTimeout(timer);
    // };
  };

  return (
    <div id="container">
      <input onChange={(e) => onChange(e)}></input>
      {searchKeyword && (
        <div id="listContainer">
          <ul>
            {searchList.map((elem, idx) => {
              const regExp = new RegExp(searchKeyword, "g");
              const htmlIncludedStr = elem.description.replace(
                regExp,
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
                    dangerouslySetInnerHTML={{ __html: htmlIncludedStr }}
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
