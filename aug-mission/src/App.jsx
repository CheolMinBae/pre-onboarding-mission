import './App.css';
import { dummy } from '../../data';
import { useMemo, useState } from 'react';

const App = () => {
  const [value, setValue] = useState('');

  // 리스트 만들기
  const dummyList = useMemo(() => {
    return dummy.reduce((acc, item) => {
      if (!acc[item.type]) {
        acc[item.type] = [];
      }

      acc[item.type].push(item);
      return acc;
    }, {});
  }, []);

  const getInputText = (e) => {
    const text = e.target.value.trim().toUpperCase();
    setValue(text);
  };

  // 매칭되는 문자 강조
  const highlightText = (description, value) => {
    if (!value) return description;

    const parts = description.split(new RegExp(`(${value})`, 'gi'));

    return parts.map((part, index) =>
      part.toUpperCase() === value ? (
        <span key={index} className='bold'>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const viewList = () => {
    return Object.entries(dummyList).map(([type, items]) => (
      <div key={type}>
        <div id='type'>{type}</div>
        {items.map((item) => (
          <div key={item.key}>{highlightText(item.description, value)}</div>
        ))}
      </div>
    ));
  };

  return (
    <div id='container'>
      <div id='header'>
        <input type='text' onChange={(e) => getInputText(e)} />
        <button>search</button>
      </div>
      <div id='list'>{value && viewList()}</div>
    </div>
  );
};

export default App;
