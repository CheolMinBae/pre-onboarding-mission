import { FaSearch } from "react-icons/fa";
import { dummy } from "./data";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="input-container">
        <input type="text" placeholder="검색어를 입력해주세요" />
        <ul>
          {dummy.map((el) => (
            <li key={el.key}>{el.description}</li>
          ))}
        </ul>
      </div>
      <button>
        <FaSearch />
      </button>
    </div>
  );
}

export default App;
