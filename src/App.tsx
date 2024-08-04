import { useState } from "react";
import SearchForm from "./components/SearchForm";
import SearchResult from "./components/SearchResult";
import "./styles/reset.scss";
import "./styles/app.scss";

function App() {
  const [query, setQuery] = useState("");
  const [focusedListIndex, setFocusedListIndex] = useState(-1);

  return (
    <main id='app-container'>
      <article>
        <SearchForm
          query={query}
          setQuery={setQuery}
          focusedListIndex={focusedListIndex}
          setFocusedListIndex={setFocusedListIndex}
        />
        <SearchResult
          query={query}
          setQuery={setQuery}
          focusedListIndex={focusedListIndex}
          setFocusedListIndex={setFocusedListIndex}
        />
      </article>
    </main>
  );
}

export default App;
