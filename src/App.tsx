import { useState } from "react"
import { SearchForm } from "./component/SearchForm"
import store from "./store/Store"
import type { GroupedSearchResults } from "./store/data.type";
import { SearchResult } from "./component/SearchResult";

function App() {
  const [searhResult, setSearhResult] = useState<GroupedSearchResults>({});
  const [searhKeyword, setSearhKeyword] = useState("")

  const handleChangeInput = (searchKeyword: string) => {
    setSearhKeyword(searchKeyword)
    if (searchKeyword.length <= 0) {
      setSearhResult({})
      return
    }
    setSearhResult(store.testSearch())
    // setSearhResult(store.search(searchKeyword));
  }

  return (
    <div>
      <SearchForm onChange={(value) => handleChangeInput(value)} />
      {searhKeyword && <SearchResult data={searhResult} keyword={searhKeyword} />}
    </div>
  )
}

export default App
