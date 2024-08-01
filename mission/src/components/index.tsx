import useInput from "../hooks/useInput.ts";
import searchIcon from "../assets/search.svg";
import SearchBox from "../SearchBox/index.tsx";

const Input = () => {
  const { text, handleChangeInput, handleChangeDescription } = useInput();

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
        <SearchBox
          text={text}
          handleChangeDescription={handleChangeDescription}
        />
      )}
    </div>
  );
};

export default Input;
