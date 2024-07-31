import SearchItem from "../search-item/SearchItem"
import classNames from "classnames"
import styles from "./SearchSuggestions.module.css"

export default function SearchSuggestions() {
  return (
    <ul className={classNames(styles["search-suggestions"])}>
      <SearchItem />
    </ul>
  )
}
