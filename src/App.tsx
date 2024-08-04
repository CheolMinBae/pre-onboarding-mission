import { useEffect, useState } from "react";
import "./App.css";
import { dummy } from "./data";

function App() {
  const [value, setValue] = useState("");
  const [searchModal, setSearchModal] = useState(false);

  useEffect(() => {
    setSearchModal(value.length !== 0);
  }, [value]);

  const searchedValue = dummy.filter((corp) =>
    corp.key.toLowerCase().includes(value.toLowerCase())
  );

  const corpTypes = [...new Set(searchedValue.map((ele) => ele.type))];

  const highLightText = (text: string) => {
    return text
      .split(new RegExp(`(${value})`, "gi"))
      .map((part: string, index: number) =>
        part.toLowerCase() === value.toLowerCase() ? (
          <strong key={index}>{part}</strong>
        ) : (
          part
        )
      );
  };

  return (
    <form>
      <div className="flex h-[30px]">
        <input
          className="w-[200px] border-[1px] h-full border-black rounded-lg"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="bg-lime-600 text-white h-full w-[30px] rounded-full text-[13px]">
          검색
        </button>
      </div>
      {searchModal === true && (
        <div className="w-[200px] h-[120px] overflow-y-scroll text-[13px]">
          {searchedValue.length !== 0 ? (
            corpTypes.map((type) => (
              <div key={type}>
                <div className="bg-blue-900 text-white">{type}</div>
                <>
                  {searchedValue
                    .filter((corp) => corp.type === type)
                    .map((corp) => (
                      <div
                        className="hover:bg-blue-900 hover:text-white"
                        key={corp.key}
                      >
                        {highLightText(corp.description)}
                      </div>
                    ))}
                </>
              </div>
            ))
          ) : (
            <div className="w-flul h-full flex justify-center items-center">
              일치하는 검색어가 없습니다.
            </div>
          )}
        </div>
      )}
    </form>
  );
}

export default App;
