import { ChangeEvent, useState } from "react";
import { dummy } from "../data.ts";

const boldText = (text: string, query: string) => {
  if (!query.trim()) return text;

  const parts = text.split(new RegExp(`(${query})`, "gi"));
  return parts.map((part, index) =>
    query.toLowerCase() === part.toLowerCase() ? (
      <strong key={index} className="font-bold">
        {part}
      </strong>
    ) : (
      part
    )
  );
};

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
    <>
      <div>
        <input
          type="text"
          className="w-60 h-8 border-black border-2 rounded-lg"
          value={text}
          onChange={handleChangeInput}
        />
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
    </>
  );
};

export default Input;
