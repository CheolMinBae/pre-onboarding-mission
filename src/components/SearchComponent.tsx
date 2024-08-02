import { useState } from 'react';

import SearchBox from './SearchBox';
import SearchBtn from './SearchBtn';
import SearchResults from './SearchResults';

function SearchComponent() {
  const [keyWord, setKeyWord] = useState<string>('');

  return (
    <div>
      <SearchBox
        value={keyWord}
        onChange={setKeyWord}
      />
      <SearchBtn />
      <SearchResults
        keyWord={keyWord}
      />
    </div>
  )
}

export default SearchComponent;