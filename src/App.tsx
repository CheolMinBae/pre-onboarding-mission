import { useState } from 'react';
import './App.css';
import { FcSearch } from 'react-icons/fc';

function App() {
  const [search, setSearch] = useState<string>('');
  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <input type="text" value={search} onChange={handleChangeSearch} />
      <button type="submit" aria-label="검색 버튼">
        <FcSearch />
      </button>
    </>
  );
}

export default App;
