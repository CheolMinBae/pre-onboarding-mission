import { useState } from "react"
import { SearchForm } from "./component/SearchForm"
import store from "./store/Store"
import { KeywordDataType } from "./store/data.type";

function App() {
  const [searhResult, setSearhResult] = useState<KeywordDataType[]>();

  const handleChangeInput = (searchKeyword: string) => {
    if (searchKeyword.length <= 0) {
      return
    }
    setSearhResult(store.search(searchKeyword));
  }

  return (
    <div>
      <SearchForm onChange={(value) => handleChangeInput(value)} />
    </div>
  )
}

export default App
