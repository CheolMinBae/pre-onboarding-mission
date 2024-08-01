// src/Autocomplete.js
import { useState } from "react";
import Autocomplete from "react-autocomplete";
import { dummy } from "./data";

function AutocompleteComponent() {
  const [value, setValue] = useState("");
  const [filteredItems, setFilteredItems] = useState(dummy);

  const handleChange = (e) => {
    const userInput = e.target.value;
    setValue(userInput);

    // 필터링 로직
    const filtered = dummy.filter((item) =>
      item.description.toLowerCase().includes(userInput.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <div>
      <h1>사전미션 안내</h1>
      <Autocomplete
        getItemValue={(item) => item.description}
        items={filteredItems}
        renderItem={(item, isHighlighted) => (
          <div
            key={item.key}
            style={{ background: isHighlighted ? "lightgray" : "white" }}
          >
            {item.description}
          </div>
        )}
        value={value}
        onChange={handleChange}
        onSelect={(val) => setValue(val)}
      />
    </div>
  );
}

export default AutocompleteComponent;
