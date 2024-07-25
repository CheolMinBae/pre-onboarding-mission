import { FaSearch } from "react-icons/fa";
import { dummy } from "./data";
import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="container">
      <div className="input-container">
        <input
          type="text"
          placeholder="검색어를 입력해주세요"
          value={value}
          onChange={handleChange}
        />
        <ul className={value && "show"}>
          {dummy.map((el) => (
            <li
              key={el.key}
              className={
                value && el.description.includes(value) ? "highlight" : ""
              }
            >
              {el.description}
            </li>
          ))}
        </ul>
      </div>
      <button>
        <FaSearch />
      </button>
    </div>
  );
}

export default App;
