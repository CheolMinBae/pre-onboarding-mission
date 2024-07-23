import { useState } from 'react';
import SearchForm from './components/molecules/SearchForm';
import SearchResultList from './components/molecules/SearchResultLists';

function App() {
  const [query, setQuery] = useState('');

  return (
    <section className="p-16pxr">
      <h1 className="text-18pxr font-bold mb-16pxr">사전 미션</h1>
      <SearchForm query={query} setQuery={setQuery} />
      <SearchResultList query={query} />
    </section>
  );
}

export default App;
