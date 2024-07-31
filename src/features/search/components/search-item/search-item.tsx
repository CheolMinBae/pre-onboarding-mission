import type { Suggestion } from "@/features/search/types"
import styles from "./search-item.module.css"

interface SearchItemProps {
  suggestion: Suggestion
  value: string
}

export default function SearchItem({ suggestion, value }: SearchItemProps) {
  const words = suggestion.description.split(/\s+/)
  const searchValue = value.toLowerCase()

  const isHighlighted = (word: string) =>
    word.toLowerCase().includes(searchValue)

  return (
    <li className={styles["search-item"]}>
      {words.map((word, index) => (
        <span key={index} className={isHighlighted(word) ? styles.bold : ""}>
          {word}
        </span>
      ))}
    </li>
  )
}
