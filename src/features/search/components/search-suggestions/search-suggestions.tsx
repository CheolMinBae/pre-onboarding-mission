import classNames from "classnames"
import styles from "./search-suggestions.module.css"
import { SearchItem } from "@/features/search/components"
import { dummy } from "@/shared/@common/data"

export default function SearchSuggestions() {
  return (
    <ul className={classNames(styles["search-suggestions"])}>
      {dummy.map((keyword) => (
        <SearchItem key={keyword.key} keyword={keyword} />
      ))}
    </ul>
  )
}
