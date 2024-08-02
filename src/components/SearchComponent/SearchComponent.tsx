import { useState } from 'react';

import SearchBox from '../SearchBox';
import SearchBtn from '../SearchBtn';
import SearchResults from '../SearchResults';
import styles from './SearchComponent.module.css';


function SearchComponent() {
  const [keyWord, setKeyWord] = useState<string>('');

  return (
    <div className={styles.container}>
      <div className={styles.searchWrapper}>
        <SearchBox
          value={keyWord}
          onChange={setKeyWord}
        />
        <SearchBtn />
      </div>
      <SearchResults
        keyWord={keyWord}
      />
    </div>
  )
}

export default SearchComponent;