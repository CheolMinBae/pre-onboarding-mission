import { ChangeEvent, useState } from "react";
import { dummy } from "../data.ts";

const Input = () => {
  const [text, setText] = useState("");

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
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
        <div className="w-60 h-32 border-2 overflow-scroll">
          {dummy.map((el, index) => (
            <div key={el.key}>
              {(index === 0 || el.type !== dummy[index - 1].type) && (
                <div>{el.type}</div>
              )}
              <div>{el.description}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Input;
