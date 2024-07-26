import { useState } from 'react';
import './App.css';
import { FaSearch } from 'react-icons/fa';
import { dummy as result } from './data/data.ts';
import useDebounce from './hooks/useDebounce.ts';

function App() {
  const [searchText, setSearchText] = useState<string>('');
  const debouncedSearchText = useDebounce(searchText, 500);

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  const handleClickResult = (e: React.MouseEvent<HTMLLIElement>) => {
    setSearchText(e.currentTarget.id);
  };

  const searchedResult = (text: string) => {
    const arr = text.split(debouncedSearchText);
    return arr;
  };

  return (
    <section className="m-4">
      {/* 검색창 영역 */}
      <div className="flex gap-2">
        <input
          type="text"
          value={searchText}
          onChange={handleChangeSearch}
          className="w-60 h-8 p-1 border-black border-[1px] rounded-lg"
        />
        <button
          type="submit"
          aria-label="검색 버튼"
          className="flex justify-center items-center w-8 h-8 rounded-full bg-lime-600 text-lg text-white"
        >
          <FaSearch />
        </button>
      </div>

      {/* 검색 결과 영역 */}
      {searchText && (
        <ul className="flex flex-col w-60 max-h-32 overflow-y-scroll overflow-x-hidden border-black border-[1px]">
          {result.map((data) => {
            const result = searchedResult(data.description);

            return (
              <li
                key={data.key}
                id={data.description}
                onClick={handleClickResult}
                className="w-60 p-1 hover:bg-blue-800 hover:text-white hover:cursor-pointer"
              >
                {result?.map((item, index) => (
                  <span key={index}>
                    <span>{item}</span>
                    {index < result.length - 1 && (
                      <span className="font-bold">{debouncedSearchText}</span>
                    )}
                  </span>
                ))}
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

export default App;
