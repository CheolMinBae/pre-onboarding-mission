import { useState, ChangeEvent, useCallback } from 'react';
import useDebounceText from '../hooks/useDebounceText';
import SearchList from './SearchList';

function SearchBar() {
  const [text, setText] = useState('');

  const handleSearchText = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value),
    []
  );

  const debouncedValue = useDebounceText(text.trim(), 0);
  const lowerCaseValue = debouncedValue.toLocaleLowerCase();

  return (
    <>
      <label htmlFor='searchBar'>검색어</label>

      <input
        id='searchBar'
        type='search'
        name='searchBar'
        placeholder='검색어를 입력하세요'
        value={text}
        onChange={handleSearchText}
        autoFocus
      />

      {lowerCaseValue !== '' && <SearchList searchText={lowerCaseValue} />}
    </>
  );
}

export default SearchBar;
