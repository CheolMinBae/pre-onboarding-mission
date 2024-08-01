import { Fragment } from 'react'

import { parseData } from '@/helpers/parse-data'
import { dummy } from '@/assets/data'

export default function SearchList({ search }) {
    const parsedData = parseData(dummy)

    return (
        <div className="search-list-container">
            {parsedData.map((category, index) => (
                <Fragment key={index}>
                    <div className="search-list-label" key={category.type}>
                        {category.type}
                    </div>
                    {category.data.map((item) => (
                        <div
                            className="search-list-item"
                            key={item.key}
                            onClick={() => search.selectItem(item.key)}
                        >
                            <EmphasizedText
                                text={item.description}
                                keyword={search.keyword}
                            />
                        </div>
                    ))}
                </Fragment>
            ))}
        </div>
    )
}

function EmphasizedText({ text, keyword }) {
    const caseFreeRegExp = new RegExp(keyword, 'gi')
    const boldTextIterator = text.matchAll(caseFreeRegExp)
    const normalTextArray = text.split(caseFreeRegExp)

    return normalTextArray.map((text, index) => (
        <Fragment>
            {!!index && <strong>{boldTextIterator.next().value}</strong>}
            {text}
        </Fragment>
    ))
}
