import type { Suggestion } from "@/features/search/types"
import styles from "./search-item.module.css"

interface SearchItemProps {
  suggestion: Suggestion
  value: string
}

export default function SearchItem({ suggestion, value }: SearchItemProps) {
  const searchValue = value.toLowerCase()
  const chars = suggestion.description.split("")
  const isHighlighted = (char: string): boolean =>
    searchValue.includes(char.toLowerCase())

  return (
    <li className={styles["search-item"]}>
      {chars.map((char, index) => (
        <span key={index} className={isHighlighted(char) ? styles.bold : ""}>
          {char}
        </span>
      ))}
    </li>
  )
}
