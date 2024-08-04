import type { GroupedSearchResults, KeywordType } from "../store/data.type"
import { highlightText } from "../utils/textUtil";
import styles from "./SearchResult.module.css"

interface ParamsType {
  data: GroupedSearchResults
  keyword: string
}

export const SearchResult = ({ data, keyword }: ParamsType) => {
  return (
    <div className={styles["result-box"]}>
      {Object.keys(data).map((type) => {
        const keywordType = type as KeywordType;
        return (
          <ul className={styles["result-section"]}>
            <li className={styles.category}>{keywordType}</li>
            {data[keywordType]?.map((item) => (
              <li key={item.key} className={styles.list}>{highlightText(item.description, keyword)}</li>
            ))}
          </ul>

        );
      })}
    </div>
  )
}

