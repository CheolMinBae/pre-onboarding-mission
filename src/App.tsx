import { useState } from "react";
import "./App.css";
import { dummy } from "./data";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const getHighlightedText = (text: string, highlight: string) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));

    return (
      <span>
        {parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <b key={index}>{part}</b>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  return (
    <>
      <div className="search-bar">
        <div className="input-container">
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Search..."
          />
          <div className={`search-results ${searchTerm ? "visible" : ""}`}>
            {dummy.map((item, index) => (
              <ul key={index}>
                {getHighlightedText(item.description, searchTerm)}
              </ul>
            ))}
          </div>
        </div>
        <div className="search-button">
          <button type="button">🔍</button>
        </div>
      </div>
    </>
  );
}

export default App;
