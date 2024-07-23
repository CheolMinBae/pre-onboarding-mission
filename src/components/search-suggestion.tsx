import { Fragment } from 'react'

import { dummy } from '~/constants/data'

const DUMMY = dummy.reduce(
  (acc, { type, ...item }) => {
    if (!acc[type]) acc[type] = []
    acc[type].push(item)
    return acc
  },
  {} as Record<string, { description: string; key: string }[]>,
)

export function SearchSuggestion({
  query,
  onClickSuggestion,
}: {
  query: string
  onClickSuggestion: (suggestion: string) => void
}) {
  // 구분자 보존을 위해 Regular Expression으로 split
  const highlightQuery = (text: string) =>
    text.split(new RegExp(`(${query})`, 'gi')).map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <strong key={index} className="font-semibold text-blue-500">
          {part}
        </strong>
      ) : (
        part
      ),
    )

  return (
    <ul className="card absolute top-14 left-0 max-h-40 w-full space-y-1 overflow-y-scroll *:p-2">
      {Object.entries(DUMMY).map(([type, data]) => (
        <Fragment key={type}>
          <div className="rounded bg-blue-200">{type}</div>
          {data.map((data) => (
            <li
              key={data.key}
              className="cursor-pointer rounded hover:bg-gray-100"
              onClick={() => onClickSuggestion(data.description)}
            >
              <span>{highlightQuery(data.description)}</span>
            </li>
          ))}
        </Fragment>
      ))}
    </ul>
  )
}
