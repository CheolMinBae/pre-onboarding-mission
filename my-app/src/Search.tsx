import React, { useState } from 'react';

const Search = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <input
        name="search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default Search;
