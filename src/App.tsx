import { useState } from "react"
import { SearchForm } from "./component/SearchForm"
import store from "./store/Store"
import type { GroupedSearchResults } from "./store/data.type";
import { SearchResult } from "./component/SearchResult";

function App() {
  const [searhResult, setSearhResult] = useState<GroupedSearchResults>({});

  const handleChangeInput = (searchKeyword: string) => {
    if (searchKeyword.length <= 0) {
      setSearhResult({})
      return
    }
    setSearhResult(store.search(searchKeyword));
  }

  return (
    <div>
      <SearchForm onChange={(value) => handleChangeInput(value)} />
      <SearchResult data={searhResult} />
    </div>
  )
}

export default App
