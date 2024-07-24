import React, { useState } from "react";
import { dummy } from "./data";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const highlightMatch = (text, highlight) => {
    if (!highlight.trim()) {
      return text;
    }
    const regex = new RegExp(`(${highlight})`, "gi");
    return text
      .split(regex)
      .map((part, index) =>
        regex.test(part) ? <strong key={index}>{part}</strong> : part
      );
  };

  const handleItemClick = (description) => {
    setSearchTerm(description);
  };

  const groupedData = dummy.reduce((acc, item) => {
    if (!acc[item.type]) {
      acc[item.type] = [];
    }
    acc[item.type].push(item);
    return acc;
  }, {});

  return (
    <>
      <div className="line" />
      <div className="app">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="search-icon">🔍</div>
        </div>
        {searchTerm && (
          <div className="results">
            <div className="scrollable-results">
              {Object.entries(groupedData).map(([type, items]) => (
                <div key={type}>
                  <div className="category">{type}</div>
                  {items.map((item, index) => (
                    <div
                      key={index}
                      className="result-item"
                      onClick={() => handleItemClick(item.description)}
                    >
                      {highlightMatch(item.description, searchTerm)}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
