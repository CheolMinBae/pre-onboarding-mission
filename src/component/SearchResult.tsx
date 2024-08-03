import type { GroupedSearchResults, KeywordType } from "../store/data.type"
import { highlightText } from "../utils/textUtil";

interface ParamsType {
  data: GroupedSearchResults
  keyword: string
}

export const SearchResult = ({ data, keyword }: ParamsType) => {
  return (
    <div>
      {Object.keys(data).map((type) => {
        const keywordType = type as KeywordType;
        return (
          <div key={keywordType}>
            <h3>{keywordType}</h3>
            <ul>
              {data[keywordType]?.map((item) => (
                <li key={item.key}>{highlightText(item.description, keyword)}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  )
}

