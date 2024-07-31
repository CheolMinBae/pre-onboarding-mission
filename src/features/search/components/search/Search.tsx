import { useState } from "react"
import { SearchInput, SearchSuggestions } from "@/features/search/components"
import classNames from "classnames"
import styles from "./Search.module.css"

export default function Search() {
  const [keyword, setKeyword] = useState("")

  return (
    <div className={classNames(styles.search)}>
      <SearchInput value={keyword} onChange={setKeyword} />
      {keyword && <SearchSuggestions />}
    </div>
  )
}
