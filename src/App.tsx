import React, { useState } from 'react'
import styled from 'styled-components';
import SearchBar from './components/SearchBar';
import SearchBtn from './components/SearchBtn';
import SearchList from './components/SearchList';

const Layout = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const FlexLayout = styled.div`
  height: calc(100vh - 40px);
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SearchLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const App = () => {
  const [ word, setWord ] = useState("");

  return (
    <Layout>
      <FlexLayout>
        <SearchLayout>
          <SearchBar word={word} setWord={setWord} />
          <SearchBtn />
        </SearchLayout>
        { word.length && <SearchList word={word} setWord={setWord} />}
      </FlexLayout>
    </Layout>
  );
};

export default App;
