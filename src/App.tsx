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

  const highlightResults = (text: string): string[] => {
    // debouncedSearchText가 빈 문자열이라면 그대로 text return
    if (!debouncedSearchText) return [text];

    // text, debouncedSearchText를 소문자로 함
    const lowerText = text.toLowerCase();
    const lowerSearchText = debouncedSearchText.toLowerCase();

    // text안에 searchText가 위치한 인덱스를 indexOf로 찾기
    let startIdx = 0;
    const parts: string[] = [];
    while (startIdx < lowerText.length) {
      let matchIdx = lowerText.indexOf(lowerSearchText, startIdx);
      if (matchIdx === -1) break;

      parts.push(text.slice(startIdx, matchIdx));
      parts.push(text.slice(matchIdx, matchIdx + lowerSearchText.length));

      startIdx = matchIdx + lowerSearchText.length;
    }

    // 마지막 부분 넣어주기
    if (startIdx < text.length) {
      parts.push(text.slice(startIdx));
    }

    return parts;
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
            const results = highlightResults(data.description);
            console.log(results);
            return (
              <li
                key={data.key}
                id={data.description}
                onClick={handleClickResult}
                className="w-60 p-1 hover:bg-blue-800 hover:text-white hover:cursor-pointer"
              >
                {results?.map((item, index) =>
                  item.toLowerCase() === debouncedSearchText.toLowerCase() ? (
                    <span key={index} className="font-bold">
                      {item}
                    </span>
                  ) : (
                    item
                  )
                )}
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

export default App;
