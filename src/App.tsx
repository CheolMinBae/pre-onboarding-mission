import { useState, ChangeEvent } from 'react';
import './App.css';
import DropDown from './components/DropDown';

function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isOpened, setIsOpened] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    !isOpened && setIsOpened(true);
    setSearchTerm(event.target.value);
  };

  const onSelectDescription = (description: string) => {
    setSearchTerm(description);
    setIsOpened(false);
  };

  const onOpenList = () => {
    setIsOpened(true);
  };

  const onSearch = () => {
    setIsOpened(false);
  };

  return (
    <div className="App">
      <div className="search">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="검색어를 입력해주세요"
          onClick={onOpenList}
        />
        <img
          alt="검색"
          src="search.png"
          className="search-img"
          onClick={onSearch}
        />
        {isOpened && (
          <DropDown
            searchTerm={searchTerm}
            isOpened={isOpened}
            setIsOpened={setIsOpened}
            onSelectDescription={onSelectDescription}
          />
        )}
      </div>
    </div>
  );
}

export default App;
