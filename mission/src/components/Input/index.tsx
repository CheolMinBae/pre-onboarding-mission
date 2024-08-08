import searchIcon from "../../assets/search.svg";
import { useInputProps } from "../../hooks/useInput";

const Input = ({ text, handleChangeInput }: useInputProps) => {
  return (
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
  );
};

export default Input;
