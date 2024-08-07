import React, { useState } from 'react';
import { dummy } from '../data/data';

const Input = () => {
  const [inputValue, setInputValue] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  // 데이터를 타입별로 그룹화하는 함수
  const groupByType = (data) => {
    return data.reduce((acc, item) => {
      (acc[item.type] = acc[item.type] || []).push(item);
      return acc;
    }, {});
  };

  // 그룹화된 데이터를 반환하는 함수
  const renderGroupedDropdown = () => {
    if (!showDropdown) return null;

    const groupedData = groupByType(dummy);

    return (
      <div style={{ overflowY: 'auto', maxHeight: '150px', width: '200px' }}>
        {Object.keys(groupedData).map((type) => (
          <div key={type}>
            <div style={{ backgroundColor: 'gray', width: '100%', color: 'white', marginBottom: '10px', height: '25px' }}>
              <strong>{type}</strong>
            </div>
            {groupedData[type].map((item, index) => (
              <div key={index} onClick={() => handleItemClick(item)} style={{ marginBottom: '10px'}}>
                {item.description.split(new RegExp(`(${inputValue})`, 'gi')).map((part, index) =>
                  part.toLowerCase() === inputValue.toLowerCase() ? (
                    <strong key={index}>{part}</strong>
                  ) : (
                    part
                  )
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value) {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleItemClick = (item) => {
    setInputValue(item.key);
    setShowDropdown(false);
  };

  return (
    <div className="autocomplete-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onClick={() => setShowDropdown(!!inputValue)}
        style={{ width: '190px', marginRight: '10px' }}
      />
      <button>검색</button>
      {renderGroupedDropdown()}
    </div>
  );
};

export default Input;
