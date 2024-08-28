import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { dummy } from "./data";
import { useState } from "react";

// interface DummyItem {
//   description: string;
//   key: string;
//   type: string;
// }

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) return text;

    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} className="font-bold text-black">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div>
      <div className="border-t-2 border-black my-4 w-1/2">
        <form className="flex gap-2 mt-5 ml-4">
          <input
            type="text"
            className="border-2 border-black px-4 rounded-lg focus:border-3 focus:border-blue-700 focus:outline-none max-w-[13rem] w-full"
            value={searchTerm}
            onChange={changeHandler}
          />
          <button type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
        {searchTerm && (
          <ul className="border-2 border-blue-900 max-h-[8rem] overflow-y-auto ml-4 max-w-[13rem]">
            <li className="bg-blue-600">COMPANY</li>
            {dummy.map((item, index) => (
              <li key={index} className="hover:bg-blue-600">{highlightText(item.description, searchTerm)}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

// {dummy.map((data) => (
//   <p>
//     {data.description} - {data.key} - {data.type}
//   </p>
// ))}

export default App;
