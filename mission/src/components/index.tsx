import { ChangeEvent, useState } from "react";

const Input = () => {
  const [text, setText] = useState("");

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        className="w-60 h-8 border-black border-2 rounded-lg"
        value={text}
        onChange={handleChangeInput}
      />
    </div>
  );
};

export default Input;
