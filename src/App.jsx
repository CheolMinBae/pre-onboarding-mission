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
          {dummy.map((el) => {
            const { description } = el;
            const regex = new RegExp(`(${value})`, "gi");
            const parts = description.split(regex);

            return (
              <li key={el.key}>
                {parts.map((part, index) =>
                  part.toLowerCase() === value.toLowerCase() ? (
                    <span className="highlight" key={index}>
                      {part}
                    </span>
                  ) : (
                    <span key={index}>{part}</span>
                  )
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <button>
        <FaSearch />
      </button>
    </div>
  );
}

export default App;
