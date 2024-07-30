import React, { useState } from 'react';
import SearchBar from './components/SearchBar.js';
import SearchList from './components/SearchList.js';

const App = () => {
  const [search, setSearch] = useState('');
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  return (
    <div className="w-[250px]">
      <SearchBar value={search} onChange={handleInput} />
      {search && <SearchList search={search} />}
    </div>
  );
};

export default App;
