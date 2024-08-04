import './App.css';
import { useState, useEffect } from 'react';
import { dummy } from '../data.js';

function App() {
  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState();

  useEffect(() => {
    console.log(dummy);
  }, []);

  useEffect(() => {
    searchKeyword(keyword);
  }, [keyword]);

  const handleChangeInput = (e) => {
    setKeyword(e.target.value);
  };

  const searchKeyword = (keyword) => {
    if (!keyword || keyword.length < 3) {
      setResult(null);
      return;
    }
    const searched = dummy.filter((el) => el.key.toLowerCase().includes(keyword.toLowerCase()))[0];
    if (searched) {
      setResult(searched);
    } else {
      setResult(null); // Add this line to handle cases where no match is found
    }
  };

  return (
    <div className="container">
      <div>
        <input value={keyword} onChange={handleChangeInput} />
        <button>검색</button>
      </div>
      {result && (
        <div className="recommend_list">
          <div className="recommend_item type">{result.type}</div>
          {dummy
            .filter((el) => el.type === result.type)
            .map((el) => {
              if (el.key === result.key) {
                return (
                  <div key={el.key} className="recommend_item result">
                    {el.description}
                  </div>
                );
              }

              return (
                <div key={el.key} className="recommend_item">
                  {el.description}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default App;
