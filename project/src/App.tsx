import { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/globals';
import useDebounce from './hooks/useDebounce';
import { dummy } from './data';
import SearchHighlight from './components/SearchHighlight';
import SearchButton from './components/SearchButton';

interface SearchData {
  description: string;
  key: string;
  type: string;
}

const App = () => {
  const [query, setQuery] = useState('');

  const debouncedQuery = useDebounce(query, 200);

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const printResult = () => {
    console.log(query);
  };

  return (
    <>
      <GlobalStyle />
      <SearchForm>
        <SearchBox>
          <input type="search" value={query} onChange={changeInput} />
          {query && (
            <RecommendList>
              {dummy.map((el: SearchData, idx: number) => {
                return (
                  <li key={idx} data-key={el.key} data-type={el.type}>
                    <SearchHighlight content={el.description} query={debouncedQuery} />
                  </li>
                );
              })}
            </RecommendList>
          )}
        </SearchBox>
        <SearchButton search={printResult} />
      </SearchForm>
    </>
  );
};

const SearchForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;
`;

const SearchBox = styled.div`
  width: 250px;

  > input {
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    padding: 0 15px 0 15px;
  }
`;

const RecommendList = styled.ul`
  width: 100%;
  max-height: 200px;
  list-style-type: none;
  overflow-y: scroll;
  padding: 0;

  > li {
    text-align: left;
    padding: 10px;
  }
`;

export default App;
