import { useCallback, useState } from "react";
import "./App.css";
import { dummy } from "./data";

function App() {
  const [inputData, setInputData] = useState("");
  const [typeList, setTypeList] = useState([]);

  const HandleInput = useCallback((e) => {
    const value = e.target.value.toLowerCase();
    setInputData(value);
    setTypeList([...new Set(dummy.map((i) => i.type))]);
  }, []);

  const HandleSearch = () => {
    setInputData("");
  };

  return (
    <div className="App">
      <div>
        <input value={inputData} onChange={HandleInput} />
        <button onClick={HandleSearch}>search</button>
        <div style={{ height: "80px", overflow: "auto" }}>
          {typeList.map((type) => (
            <div key={type}>
              <div style={{ backgroundColor: "blue", color: "white" }}>
                {type}
              </div>
              {dummy
                .filter((item) => item.type === type)
                .map((item) => (
                  <div key={item.key} style={{ border: "solid black 1px" }}>
                    {inputData ?? inputData
                      ? item.description.split("").map((char, index) =>
                          inputData
                            .toLowerCase()
                            .includes(char.toLowerCase()) &&
                          inputData.toLowerCase().indexOf(char.toLowerCase()) >=
                            0 ? (
                            <strong key={index} style={{ display: "inline" }}>
                              {char}
                            </strong>
                          ) : (
                            <span key={index} style={{ display: "inline" }}>
                              {char}
                            </span>
                          )
                        )
                      : item.description}
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
