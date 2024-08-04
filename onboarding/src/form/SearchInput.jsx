import { useState } from "react";
import { dummy } from "../data/data";
import "./input.css";

function SearchInput() {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(dummy);

  const handleInputChange = e => {
    const value = e.target.value;
    setInputValue(value);

    // 모든 옵션을 보여주고, 일치하는 항목은 bold 처리
    setFilteredOptions(dummy);
  };

  const highlightText = text => {
    const parts = text.split(new RegExp(`(${inputValue})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === inputValue.toLowerCase() ? (
        <strong key={index}>{part}</strong>
      ) : (
        part
      )
    );
  };

  return (
    <div>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search..."
        />
        <svg
          className="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          width="20"
          viewBox="0 0 512 512"
        >
          <path
            fill="#ffffff"
            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
          />
        </svg>
      </div>

      {filteredOptions.length > 0 && inputValue && (
        <div className="dropdown">
          {Object.entries(
            filteredOptions.reduce((acc, option) => {
              acc[option.type] = acc[option.type] || [];
              acc[option.type].push(option);
              return acc;
            }, {})
          )?.map(([type, options]) => (
            <div key={type}>
              <div className="typetitle">
                <strong>{type}</strong>
              </div>

              <ul>
                {options.map(option => (
                  <li key={option.key}>{highlightText(option.description)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchInput;
