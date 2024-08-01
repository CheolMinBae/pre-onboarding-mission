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
                            {item.description}
                        </div>
                    ))}
                </Fragment>
            ))}
        </div>
    )
}
