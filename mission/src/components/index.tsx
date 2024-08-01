import { ChangeEvent, useState } from "react";
import searchIcon from "../assets/search.svg";
import SearchBox from "../SearchBox/index.tsx";

const Input = () => {
  const [text, setText] = useState("");
  // const [selectedDescription, setSelectedDescription] = useState<string | null>(
  //   ""
  // );

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // const handleChangeDescription = (description: string) => {
  //   setText(description);
  //   setSelectedDescription(description);
  // };

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
      {text && <SearchBox />}
    </div>
  );
};

export default Input;
