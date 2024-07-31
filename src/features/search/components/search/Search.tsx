import { useState } from "react"
import { SearchForm, SearchSuggestions } from "@/features/search/components"
import classNames from "classnames"
import styles from "./search.module.css"

export default function Search() {
  const [keyword, setKeyword] = useState("")

  return (
    <div className={classNames(styles.search)}>
      <SearchForm value={keyword} onChange={setKeyword} />
      {keyword && <SearchSuggestions />}
    </div>
  )
}
