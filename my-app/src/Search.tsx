import React, { useState } from 'react';
import { FcSearch } from 'react-icons/fc';

const Search = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex items-center gap-2">
        <input
          name="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border border-gray-500 rounded px-2 p-3 text-2xl w-7/10 h-100"
        />
        <button
          type="button"
          className="hover:opacity-80"
        >
        <FcSearch size="3rem" />
        </button>
      </div>
    </div>
  );
};

export default Search;
