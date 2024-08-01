import { ChangeEvent, useState } from "react";
import searchIcon from "../assets/search.svg";
import { dummy } from "../data.ts";
import boldText from "../utils/boldText.tsx";

const Input = () => {
  const [text, setText] = useState("");
  const [selectedDescription, setSelectedDescription] = useState<string | null>(
    ""
  );

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleChangeDescription = (description: string) => {
    setText(description);
    setSelectedDescription(description);
  };

  return (
    <div>
      <div className="flex gap-1">
        <input
          type="text"
          className="w-60 h-8 border-black border-2 rounded-lg"
          value={text}
          onChange={handleChangeInput}
        />
        <button>
          <img src={searchIcon} className="h-8" alt="search icon" />
        </button>
      </div>
      {text && (
        <div className="w-60 h-[120px] border-2 overflow-scroll">
          {dummy.map((el, index) => (
            <div
              key={el.key}
              onClick={() => handleChangeDescription(el.description)}
            >
              {(index === 0 || el.type !== dummy[index - 1].type) && (
                <div className="bg-blue-600 text-white">{el.type}</div>
              )}
              <div
                tabIndex={0}
                className="cursor-pointer hover:bg-blue-300"
                onClick={() => handleChangeDescription(el.description)}
              >
                {boldText(el.description, text)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Input;
