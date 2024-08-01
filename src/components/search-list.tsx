import { parseData } from '@/helpers/parse-data'
import { dummy } from '@/assets/data'

export default function SearchList() {
    const parsedData = parseData(dummy)

    return (
        <div className="search-list-container">
            {parsedData.map((category) => (
                <>
                    <div className="search-list-label" key={category.type}>
                        {category.type}
                    </div>
                    {category.data.map((item) => (
                        <div className="search-list-item" key={item.key}>
                            {item.description}
                        </div>
                    ))}
                </>
            ))}
        </div>
    )
}
