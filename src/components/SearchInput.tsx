import DataList from "./DataList";
import { useEffect, useState, useRef } from "react";

interface Props {
  dataValue: string;
  setDataValue: (value: string) => void;
  onSearch: () => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

export default function SearchInput({
  dataValue,
  setDataValue,
  onSearch,
  inputRef,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isListVisible, setIsListVisible] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataValue(e.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onSearch();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsListVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex-grow" ref={containerRef}>
      <input
        type="text"
        className="w-full p-2 rounded-lg focus:border-2 focus:border-blue-800 focus:outline-none bg-slate-100 text-slate-800 "
        placeholder="Search.."
        ref={inputRef}
        value={dataValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsListVisible(true)}
        aria-controls="search-results"
      />
      <DataList
        dataValue={dataValue}
        setDataValue={setDataValue}
        isListVisible={isListVisible}
      />
    </div>
  );
}
