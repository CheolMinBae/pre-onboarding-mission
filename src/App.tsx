import { useState } from "react";
import SearchForm from "./components/SearchForm";
import SearchResult from "./components/SearchResult";
import "./styles/reset.scss";

function App() {
  const [query, setQuery] = useState("");

  return (
    <>
      <SearchForm query={query} setQuery={setQuery} />
      <SearchResult query={query} />
    </>
  );
}

export default App;
