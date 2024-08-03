import { KeywordDataType } from "../store/data.type"

interface ParamsType {
  data: KeywordDataType[]
}

export const SearchResult = ({ data }: ParamsType) => {
  return (
    <ul className="result">
      {data.map(({ description, key, type }) => (
        <li key={key}>
          <p>{type}</p>
          <p>{description}</p>
        </li>
      ))}
    </ul>
  )
}

