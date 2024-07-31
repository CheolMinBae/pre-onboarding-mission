import classNames from "classnames"
import styles from "./SearchItem.module.css"

export default function SearchItem() {
  return <li className={classNames(styles["search-item"])}>SearchItem</li>
}
