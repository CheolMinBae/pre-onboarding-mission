import useInput from "../hooks/useInput.ts";
import SearchBox from "../components/SearchBox/index.tsx";
import Input from "../components/Input/index.tsx";

const SearchPage = () => {
  const { text, handleChangeInput, handleChangeDescription } = useInput();

  return (
    <div>
      <Input
        text={text}
        handleChangeInput={handleChangeInput}
        handleChangeDescription={handleChangeDescription}
      />
      {text && (
        <SearchBox
          text={text}
          handleChangeInput={handleChangeInput}
          handleChangeDescription={handleChangeDescription}
        />
      )}
    </div>
  );
};

export default SearchPage;
