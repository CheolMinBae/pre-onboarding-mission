import { useState } from "react";
import { dummy } from "../data/data.js";

const SearchBox = () => {
  const [searchText, setSearchText] = useState("");
  const categoryList = [...new Set(dummy.map((data) => data.type))];

  const highlightText = (description) => {
    if (searchText === "") return description;

    // g: 글로벌 검색 i: 대소문자 구분 없이 검색
    // split seperator에 ()를 포함하는 정규표현식이 들어가면 해당 text포함하여 나눈 배열 반환
    const parts = description.split(new RegExp(`(${searchText})`, "gi"));

    return parts.map((part, index) =>
      part.toLowerCase() === searchText.toLowerCase() ? (
        <strong key={index}>{part}</strong>
      ) : (
        part
      )
    );
  };

  return (
    <div className="flex gap-2 text-[14px]">
      <div className="w-[200px]">
        <input
          className="border-2 border-black rounded-lg px-2 py-1 h-[35px] w-full"
          type="text"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        {searchText !== "" && (
          <div className="h-[120px] border-2 border-black overflow-auto mt-1 scrollBar">
            {categoryList.map((category) => (
              <div key={category}>
                <p className="bg-gray-200 p-1">{category}</p>
                <ul>
                  {dummy.map((data) => {
                    if (data.type === category)
                      return (
                        <li key={data.key} className="p-1">
                          {highlightText(data.description)}
                        </li>
                      );
                    return null;
                  })}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
      <button className="rounded-xl bg-black text-white h-[35px] w-[60px]">
        검색
      </button>
    </div>
  );
};

export default SearchBox;
