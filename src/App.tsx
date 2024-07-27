import { ChangeEventHandler, useState } from 'react';
import S from './App.module.css';
import { dummy } from './data.ts';

function App() {
  const [search, setSearch] = useState('');

  const handleSearchInput: ChangeEventHandler<HTMLInputElement> = e => {
    setSearch(e.target.value);
  };

  const highlightWords = (text: string, word: string) => {
    const parts = text.split(new RegExp(`(${word})`, 'gi'));
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === word.toLowerCase() ? (
            <b key={index}>{part}</b>
          ) : (
            part
          )
        )}
      </>
    );
  };

  return (
    <main>
      <form>
        <input
          className={S.input}
          value={search}
          onChange={handleSearchInput}
        />
        <button>🔍</button>
      </form>
      {search && (
        <div className={S.recommend}>
          <ul>
            <li className={S.listLabel}>COMPANY</li>
            {dummy.map(({ key, description }) => {
              return <li key={key}>{highlightWords(description, search)}</li>;
            })}
          </ul>
        </div>
      )}
    </main>
  );
}
export default App;
