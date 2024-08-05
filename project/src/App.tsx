import { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from 'styles/globals';
import { ReactComponent as IconSearch } from 'assets/iconSearch.svg';
import { dummy } from './data';

interface SearchData {
  description: string;
  key: string;
  type: string;
}

const App = () => {
  const [query, setQuery] = useState('');

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const goSearch = () => {
    console.log(query);
  };

  return (
    <>
      <GlobalStyle />
      <SearchForm>
        <SearchBox>
          <input type="search" onChange={changeInput} />
          {query && (
            <RecommendList>
              {dummy.map((el: SearchData, idx: number) => {
                return (
                  <li key={idx} value={el.key} data-type={el.type}>
                    {el.description}
                  </li>
                );
              })}
            </RecommendList>
          )}
        </SearchBox>
        <SearchButton type="button" onClick={goSearch}>
          <IconSearch width={50} height={50} />
        </SearchButton>
      </SearchForm>
    </>
  );
};

const SearchForm = styled.form`
  display: flex;
  flex-direction: row;
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
  list-style-type: none;
  max-height: 100px;
  overflow-y: scroll;
  padding: 0;
  > li {
    text-align: left;
  }
`;

const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  > svg {
    pointer-events: none;
  }
`;

export default App;
