import { useEffect, useState, useRef } from "react";
import "./App.css";
import SearchList from "./SearchList";

function App() {
  const [searchKeyword, setSearchKeyword] = useState("");
  let timerRef = useRef(null);

  const onChange = (e) => {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setSearchKeyword(e.target.value);
    }, 260);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div id="container">
      <input onChange={onChange}></input>
      {searchKeyword && <SearchList searchKeyword={searchKeyword} />}
    </div>
  );
}

export default App;
