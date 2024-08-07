import { useState } from 'react';
import './App.css';
import AutocompleteList from './components/AutocompleteList';
import useDebounce from './hooks/useDebounce';
import SearchButton from './components/SearchButton';
import SearchInput from './components/SearchInput';

function App() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);

  return (
    <main className='input-button-container'>
      <div className='input-container'>
        <SearchInput query={query} setQuery={setQuery} />
        <AutocompleteList query={debouncedQuery} setQuery={setQuery} />
      </div>

      <SearchButton />
    </main>
  );
}

export default App;
