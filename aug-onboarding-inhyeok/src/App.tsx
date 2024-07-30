import { useState } from 'react';
import SearchButton from './components/SearchButton';
import Autocomplete from './components/Autocomplete';
import '../assets/index.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const isVisibleAutoComplete = searchQuery.length;

  const handleSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = () => {
    alert('submit');
  };

  return (
    <div className="app-container">
      <div className="search-bar">
        <input
          style={{ width: '200px', borderRadius: '8px' }}
          type="text"
          value={searchQuery}
          onChange={handleSearchQueryChange}
        />
        <SearchButton onSubmit={handleSubmit} />
      </div>
      {isVisibleAutoComplete ? <Autocomplete searchQuery={searchQuery} /> : <></>}
    </div>
  );
}

export default App;
