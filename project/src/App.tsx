import { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/globals';
import { ReactComponent as IconSearch } from './assets/iconSearch.svg';
import { dummy } from './data';

interface SearchData {
  description: string;
  key: string;
  type: string;
}

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const goSearch = () => {
    console.log(inputValue);
  };

  return (
    <>
    <GlobalStyle />
    <SearchForm>
      <div>
        <input type='text' onChange={changeInput}/>
        {inputValue &&
          <RecommendList>
            {dummy.map((el: SearchData) => {
              return ( <li value={el.key} data-type={el.type}>{el.description}</li> )
            })}
          </RecommendList>
        }
      </div>
      <SearchButton type='button' onClick={goSearch}><IconSearch width={60} height={60} /></SearchButton>
    </SearchForm>
    </>
  )
};

const SearchForm = styled.form`
  display: flex;
  flex-direction: row;
`;

const RecommendList = styled.ul`
  list-style-type: none;
  max-height: 100px;
  overflow-y: scroll;
  padding: 0;
`;

const SearchButton = styled.button`
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: none;
  background: none;
`;

export default App;
