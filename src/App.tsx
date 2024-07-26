import { ChangeEventHandler, useState } from 'react';
import './App.css';
import { dummy } from './data.ts';

function App() {
  const [search, setSearch] = useState('');
  console.log(dummy);
  const handleSearchInput: ChangeEventHandler<HTMLInputElement> = e => {
    setSearch(e.target.value);
  };

  return (
    <form>
      <input value={search} onChange={handleSearchInput} />
      <button>🔍</button>
    </form>
  );
}

export default App;
