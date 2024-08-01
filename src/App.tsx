import { useState } from "react";
import SearchForm from "./components/SearchForm";
import SearchResult from "./components/SearchResult";
import "./styles/reset.scss";
import "./styles/app.scss";

function App() {
  const [query, setQuery] = useState("");

  return (
    <article id='app-container'>
      <SearchForm query={query} setQuery={setQuery} />
      <SearchResult query={query} />
    </article>
  );
}

export default App;
