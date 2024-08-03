import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { dummy } from "../data";
function App() {
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const new_dummy = {};
  dummy.forEach((el) => {
    if (el.type in new_dummy) {
      new_dummy[el.type].push({ key: el.key, description: el.description });
    } else {
      new_dummy[el.type] = [{ key: el.key, description: el.description }];
    }
  });

  const highlightText = (description, query) => {
    if (!query) {
      return description;
    }
    const parts = description.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <strong key={index}>{part}</strong>
      ) : (
        part
      )
    );
  };

  return (
    <div className="flex w-full justify-center mt-10">
      <div className="flex flex-col items-center w-[250px]">
        <input
          value={text}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="rounded-md border-2 border-black w-full"
        />
        {text.trim().length > 0 && isFocused && (
          <div className="h-[120px] w-full overflow-y-scroll border-2 border-blue-800">
            {Object.keys(new_dummy).map((key) => {
              return (
                <div key={key} className="flex flex-col w-full">
                  <div className="text-white bg-blue-800 pl-1">{key}</div>
                  {new_dummy[key].map((v) => {
                    return (
                      <div key={v.key} className="pl-1 hover:bg-blue-200">
                        {highlightText(v.description, text)}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        )}
      </div>
      <IoIosSearch style={{ width: 30, height: 30 }} />
    </div>
  );
}

export default App;
