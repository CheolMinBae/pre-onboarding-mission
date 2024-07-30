import React, { useState } from 'react';
import { dummy } from '../data.js';
import { FaSearch } from 'react-icons/fa';

type TDummy = {
  type: string;
  description: string;
};

const App = () => {
  const [search, setSearch] = useState('');
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  const searchBold = (text: string, search: string) => {
    if (!search) return text;
    const parts = text.split(new RegExp(`(${search})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === search.toLowerCase() ? (
        <b key={index}>{part}</b>
      ) : (
        part
      )
    );
  };

  return (
    <div className="w-[250px]">
      <form
        action=""
        className="w-[100%] h-auto flex items-center justify-center">
        <input
          type="text"
          value={search}
          onChange={handleInput}
          className="border border-gray-950 p-1"
        />
        <button type="button" className="p-2 ml-2 bg-blue-500 text-white ">
          <FaSearch />
        </button>
      </form>
      {search && (
        <ul className="p-2">
          {dummy.map((item: TDummy, index: number) => {
            const cur = item;
            const before = dummy[index - 1] || { type: null };

            return (
              <React.Fragment key={index}>
                {(cur.type !== before.type || index === 0) && (
                  <li className="bg-blue-400">{item.type}</li>
                )}
                <li className="bg-blue-100">
                  {searchBold(item.description, search)}
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default App;
