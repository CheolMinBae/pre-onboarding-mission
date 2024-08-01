import { useEffect, useState } from "react";
import "./index.css";
import { dummy } from "./data";

interface Dummy {
  description: string;
  key: string;
  type: string;
}
enum Types {
  COMPANY = "COMPANY",
  JOB = "JOB",
  PEOPLE = "PEOPLE",
  COUNTRY = "COUNTRY",
}
function App() {
  const [text, setText] = useState<string>("");
  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const renderData = (data: Dummy[], type: Types) => {
    const filter = data.filter((el) => el.type === type);

    return (
      <>
        <li className="bg-blue-400 text-white">{type}</li>
        {filter.map((el, i) => boldText(el.description, text))}
      </>
    );
  };
  const boldText = (description: string, inputText: string) => {
    if (!inputText) return <li>{description}</li>;
    const bold = description.split(new RegExp(`(${inputText})`, "gi"));

    return (
      <li>
        {bold.map((el, i) =>
          el.toLowerCase() === inputText.toLowerCase() ? (
            <b key={i + el}>{el}</b>
          ) : (
            el
          )
        )}
      </li>
    );
  };
  return (
    <div className="flex items-center justify-center gap-3 p-10">
      <div className="relative">
        <input
          onChange={change}
          value={text}
          type="text"
          className="p-2 border-2 border-black"
        />
        {text.length !== 0 && (
          <ul className="max-h-32 overflow-y-auto mt-2 absolute">
            {renderData(dummy, Types.COMPANY)}
            {renderData(dummy, Types.COUNTRY)}
            {renderData(dummy, Types.JOB)}
            {renderData(dummy, Types.PEOPLE)}
          </ul>
        )}
      </div>
      <button className="text-2xl relative">🔍</button>
    </div>
  );
}

export default App;
