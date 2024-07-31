import { SearchItem } from "@/features/search/components"
import styles from "./search-suggestions.module.css"
import { dummy } from "@/shared/@common/data"

interface SearchSuggestionsProps {
  value: string
}

export default function SearchSuggestions({ value }: SearchSuggestionsProps) {
  return (
    <ul className={styles["search-suggestions"]}>
      {dummy.map((suggestion) => (
        <SearchItem
          key={suggestion.key}
          value={value}
          suggestion={suggestion}
        />
      ))}
    </ul>
  )
}
