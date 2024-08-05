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
      <SearchArea>
        <input type='text' onChange={changeInput}/>
        {inputValue &&
          <RecommendList>
            {dummy.map((el: SearchData, idx: number) => {
              return (
                <li key={idx} value={el.key} data-type={el.type}>{el.description}</li>
              )
            })}
          </RecommendList>
        }
      </SearchArea>
      <SearchButton type='button' onClick={goSearch}><IconSearch width={50} height={50} /></SearchButton>
    </SearchForm>
    </>
  )
};

const SearchForm = styled.form`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const SearchArea = styled.div`
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
