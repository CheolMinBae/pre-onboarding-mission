import { FC, useState } from "react";
import InputField from "./InputField";
import SearchBtn from "./SearchBtn";
import DropBox from "./DropBox";
import { InputFieldCover } from "./style";

interface Props {}

const SearchBar: FC<Props> = () => {
  const [onFocus, setOnFocus] = useState(false);
  const [value, setOnValue] = useState("");

  const isDrop = value.length > 0 && onFocus;

  return (
    <div style={{ display: "flex" }}>
      <InputFieldCover>
        <InputField
          value={value}
          onValueChange={setOnValue}
          onFocusChange={setOnFocus}
        />
        <DropBox isDrop={isDrop} onValueChange={setOnValue} value={value} />
      </InputFieldCover>
      <SearchBtn value={value} />
    </div>
  );
};

export default SearchBar;
