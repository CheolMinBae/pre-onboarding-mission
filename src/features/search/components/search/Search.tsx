import { useState } from "react"
import { SearchForm, SearchSuggestions } from "@/features/search/components"
import styles from "./search.module.css"

export default function Search() {
  const [value, setValue] = useState("")

  return (
    <div className={styles.search}>
      <SearchForm value={value} onChange={setValue} />
      {value && <SearchSuggestions value={value} />}
    </div>
  )
}
