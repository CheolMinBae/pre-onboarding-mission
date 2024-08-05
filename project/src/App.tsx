import { useState } from 'react';
import GlobalStyle from './styles/globals';
import { SearchForm, SearchBox, RecommendList } from './styles/app';
import useDebounce from './hooks/useDebounce';
import SearchHighlight from './components/SearchHighlight';
import SearchButton from './components/SearchButton';
import { dummy } from './data';

interface SearchData {
  description: string;
  key: string;
  type: string;
}

const data: SearchData[] = [...dummy];
const groupedData = data.reduce(
  (acc, item) => {
    const { type } = item;
    if (!acc[type]) acc[type] = [];
    acc[type].push(item);
    return acc;
  },
  {} as { [type: string]: SearchData[] }
);
const dataTypeList = Object.keys(groupedData);

const App = () => {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 200);

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const selectRecommend = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const parent = (event.target as HTMLAnchorElement).closest('dd');
    setQuery(parent?.getAttribute('data-value') || '');
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
              {dataTypeList.map((type: string) => (
                <div key={type}>
                  <dt>{type}</dt>
                  {groupedData[type].map((el: SearchData) => (
                    <dd key={el.key} data-value={el.key}>
                      <SearchHighlight content={el.description} query={debouncedQuery} clickHandler={selectRecommend} />
                    </dd>
                  ))}
                </div>
              ))}
            </RecommendList>
          )}
        </SearchBox>
        <SearchButton search={printResult} />
      </SearchForm>
    </>
  );
};

export default App;
