import { useEffect, useState } from 'react';
import { dummy, Item } from './data';
import { FcSearch } from 'react-icons/fc';

const SearchTable = ({ results, highlight }: { results: Item[], highlight: string }) => {
  return (
    <table className="mt-2 w-full border-collapse">
      <thead>
        <tr>
          <th className="border p-2">Name</th>
          <th className="border p-2">Type</th>
        </tr>
      </thead>
      <tbody>
        {results.map((item: Item) => {
          const parse = item.description.split(new RegExp(`(${highlight})`, 'gi'));

          return (
            (
              <tr key={item.key}>
                <td className="border p-2">
                  {
                    parse.map((char, index) => 
                      char.toLowerCase() === highlight.toLowerCase() ? (
                        <strong key={index}>{char}</strong>
                      ) : (
                        <>{char}</>
                      )
                    )
                  }
                </td>
                <td className="border p-2">{item.type}</td>
              </tr>
            )
          )
        })}
      </tbody>
    </table>
  );
};

export const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const [results, setResults] = useState<Item[]>([]);

  useEffect(() => {
    const filterResults = dummy.filter((item) =>
      item.key.toLowerCase().includes(inputValue.toLowerCase())
    );
    setResults(filterResults);
  }, [inputValue]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="flex flex-col items-center gap-2 mb-2 w-7/10">
        <div className="flex items-center gap-2 mb-2 w-full">
          <input
            name="search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="border border-gray-500 rounded px-2 py-3 text-2xl w-full h-12"
            placeholder="Search..."
          />
          <button type="button" className="hover:opacity-80">
            <FcSearch size="3rem" />
          </button>
        </div>
        <SearchTable results={results} highlight={inputValue}/>
      </div>
    </div>
  );
};
