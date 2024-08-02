import { useState } from "react";
import SearchForm from "./components/SearchForm";
import SearchResult from "./components/SearchResult";
import "./styles/reset.scss";
import "./styles/app.scss";

function App() {
  const [query, setQuery] = useState("");

  return (
    <main id="app-container">
      <article>
        <SearchForm query={query} setQuery={setQuery} />
        <SearchResult query={query} />
      </article>
    </main>
  );
}

export default App;
