import { useState } from "react";

function SearchBox() {
  const [keyWord, setKeyWord] = useState<string>('');
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyWord(e.target.value);
  }
  return (
    <input
      type="text"
      value={keyWord}
      onChange={handleSearch}
    />
  )
}

export default SearchBox;