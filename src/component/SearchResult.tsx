import type { GroupedSearchResults, KeywordType } from "../store/data.type"

interface ParamsType {
  data: GroupedSearchResults
}

export const SearchResult = ({ data }: ParamsType) => {
  return (
    <div>
      {Object.keys(data).map((type) => {
        const keywordType = type as KeywordType;
        return (
          <div key={keywordType}>
            <h3>{keywordType}</h3>
            <ul>
              {data[keywordType]?.map((item) => (
                <li key={item.key}>{item.description}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  )
}

