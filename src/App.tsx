import { useState } from 'react';
import './App.css';
import { FaSearch } from 'react-icons/fa';
import { dummy } from './data/data.ts';

function App() {
  const [search, setSearch] = useState<string>('');
  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handleClickResult = (e: React.MouseEvent<HTMLLIElement>) => {
    setSearch(e.currentTarget.id);
  };
  return (
    <section className="m-4">
      {/* 검색창 영역 */}
      <div className="flex gap-2">
        <input
          type="text"
          value={search}
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
      {search && (
        <ul className="flex flex-col w-60 max-h-32 overflow-y-scroll overflow-x-hidden border-black border-[1px]">
          {dummy.map((data) => (
            <li
              key={data.key}
              id={data.description}
              onClick={handleClickResult}
              className="w-60 p-1 hover:bg-blue-800 hover:text-white hover:cursor-pointer"
            >
              {data.description}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default App;
