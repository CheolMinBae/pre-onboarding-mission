import { useEffect, useState, useRef } from "react";
import "./App.css";
import { dummy } from "./assets/data";

function App() {
  const [searchList, setSearchList] = useState(dummy);
  const [searchKeyword, setSearchKeyword] = useState("");
  let timerRef = useRef(null);

  const onChange = (e) => {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setSearchKeyword(e.target.value);
    }, 260);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div id="container">
      <input onChange={onChange}></input>
      {searchKeyword && (
        <div id="listContainer">
          <ul>
            {searchList.map((elem, idx) => {
              const regExp = new RegExp(searchKeyword, "gi");
              const htmlIncludedStr = elem.description.replace(
                regExp,
                `<strong>$&</strong>`
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
