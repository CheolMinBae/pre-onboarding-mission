import { useState, ChangeEvent } from 'react';
import { dummy } from '@/data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

interface DummyItem {
  description: string;
  key: string;
  type: string;
}

const App = () => {
  const [searchList] = useState<DummyItem[]>(dummy);
  const [query, setQuery] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value.toLowerCase());
  };

  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) {
      return text;
    }
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? <b key={index}>{part}</b> : <span key={index}>{part}</span>
    );
  };

  return (
    <div>
      <h1>사전미션</h1>
      <div style={{ display: 'flex' }}>
        <div style={{ position: 'relative', width: '300px' }}>
          <div>
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              value={query}
              onChange={handleInputChange}
              style={{ width: '90%', padding: '10px' }}
            />
          </div>
          {query.length > 0 &&
            <div style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              border: '1px solid #ccc',
              backgroundColor: '#fff',
              maxHeight: '150px',
              overflowY: 'auto',
              zIndex: 1000
            }}>
              {searchList.map((item: DummyItem) => (
                <div
                  key={item.key}
                  style={{
                    padding: '10px',
                    cursor: 'pointer',
                    backgroundColor: query && item.description.toLowerCase().includes(query) ? '#DAF5FF' : 'white'
                  }}
                  onClick={() => setQuery(item.description)}
                >
                  {highlightText(item.description, query)}
                </div>
              ))}
            </div>
          }
        </div>
        <button style={{ backgroundColor: 'transparent', border: 'none' }}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </div>
  );
};

export default App;
