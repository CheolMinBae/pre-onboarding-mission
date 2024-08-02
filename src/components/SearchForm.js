import React, { useState } from "react";
import { dummy } from "../data";
import { groupByType } from "../util/group";

const SearchForm = () => {
  const [inputText, setInputText] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const dropdownBox = () => {
    const groupedItems = groupByType(dummy);
    const escapeRegExp = inputText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(${escapeRegExp})`, "i");

    return Object.keys(groupedItems).map((type) => (
      <div key={type} className="flex flex-col w-full text-sm">
        <div className="bg-purple-200 text-white px-2 ">{type}</div>
        {groupedItems[type].map((item, index) => {
          const parts = item.description.split(regex);
          return (
            <div
              key={index}
              className="flex flex-row w-full px-2"
              onClick={() => setInputText(item.description)}
            >
              <p>
                {parts.map((part, i) =>
                  inputText && regex.test(part) ? <b key={i}>{part}</b> : part
                )}
              </p>
            </div>
          );
        })}
      </div>
    ));
  };

  const handleSearch = () => {
    window.alert(`검색어는 ${inputText} 입니다.`);
  };

  return (
    <div className="flex flex-row w-full gap-2 justify-center items-center relative">
      <div className="w-52">
        <input
          type="text"
          className="input input-bordered input-sm focus-within:outline-none w-full"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setTimeout(() => setIsFocus(false), 100)} // 2번
        />
        {isFocus && (
          <div className="w-52 h-28 overflow-scroll border-[1px] rounded-md mt-1 absolute">
            {dropdownBox()}
          </div>
        )}
      </div>
      <button
        className="btn btn-sm bg-purple-400 text-white border-none"
        onClick={handleSearch}
      >
        검색
      </button>
    </div>
  );
};

export default SearchForm;
