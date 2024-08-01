import { useRef, useState } from "react";
import { Dummy, dummy } from "./assets/data";
import SearchInput from "./components/SearchInput";
import SearchButton from "./components/SearchButton";
import SearchResult from "./components/SearchResult";

export default function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dataValue, setDataValue] = useState<string>("");
  const [resultValue, setResultValue] = useState<Dummy | null>(null);

  const handleSearch = () => {
    if (inputRef.current && inputRef.current.value.trim() === "") {
      setResultValue(null);
      return;
    }
    const selectedItem = dummy.find((item: Dummy) =>
      item.description.toLowerCase().includes(dataValue.toLowerCase())
    );
    setResultValue(selectedItem || null);
  };

  return (
    <div className="w-full flex flex-col">
      <div className="flex gap-2 items-center w-[500px]">
        <SearchInput
          dataValue={dataValue}
          setDataValue={setDataValue}
          onSearch={handleSearch}
          inputRef={inputRef}
        />
        <SearchButton onClick={handleSearch} />
      </div>
      <div className="w-[500px]">
        <SearchResult resultValue={resultValue} />
      </div>
    </div>
  );
}
