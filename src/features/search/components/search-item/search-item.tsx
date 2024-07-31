import classNames from "classnames"
import styles from "./search-item.module.css"
import type { Keyword } from "@/features/search/types"

interface SearchItemProps {
  keyword: Keyword
}

export default function SearchItem({ keyword }: SearchItemProps) {
  return (
    <li className={classNames(styles["search-item"])}>{keyword.description}</li>
  )
}
