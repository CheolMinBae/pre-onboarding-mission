'use client'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { dummy } from '@/data'; // 데이터 import

function MyInputComponent() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log('Submitted value:', inputValue);
    // 여기에 추가적인 로직을 추가할 수 있습니다.
  };

  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) return text;

    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} className="font-bold">{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="flex flex-col items-center mt-12">
      <form onSubmit={handleSubmit} className="flex justify-center">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Search..."
          className="border-2 border-black p-1 mr-2 rounded-xl"
        />
        <button type="submit" className="p-2 bg-green-300 rounded-xl">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
      {/* 입력값이 있을 때만 스크롤 가능한 dummy 데이터 목록 표시 */}
      {inputValue && (
        <ul className="mt-2 w-[300px] max-h-60 overflow-y-auto border border-gray-300 rounded-lg bg-white">
          {dummy.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
            >
              {highlightText(item.description, inputValue)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MyInputComponent;
