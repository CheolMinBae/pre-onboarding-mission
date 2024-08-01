import { useEffect, useRef, useState } from "react";
import { dummy } from "./data";

export const App = () => {
  const inputRef = useRef(null);
  const selectRef = useRef(null);
  const [search, setSearch] = useState("");

  const setSearchInputValue = () => {
    const value = inputRef.current?.value;
    setSearch(value);
  };

  useEffect(() => {
    // input값 있으면 selectRef 보여주기
    if (search.length) {
      selectRef.current.style.cssText = `
				display: block;
			`;
    } else {
      selectRef.current.style.cssText = `
				display: none;
			`;
    }

    // option에서 input값 검사 후 있으면 bold처리
    if (search) {
      const upperValue = search.toUpperCase();

      selectRef.current.childNodes.forEach((node) => {
        if (node.innerText.toUpperCase().includes(upperValue)) {
          node.style.cssText = `font-weight: bold;`;
        } else {
          node.style.cssText = `font-weight: normal;`;
        }
      });
    }
  }, [search]);
	
  return (
    <div className="app">
      <div className="search-box">
        <input className="search-input" ref={inputRef} onChange={setSearchInputValue}></input>
        <button className="search-button">검색</button>
      </div>
      <select className="search-select" ref={selectRef} size={4}>
        {dummy.map((data) => (
          <option className="search-option" key={data.key}>
            {data.description}
          </option>
        ))}
      </select>
    </div>
  );
};
