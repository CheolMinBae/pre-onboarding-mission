import SearchItem from './SearchItem';

const SearchResults = ({ groupedData, searchTerm }) => {
    return (
        <div className="search-results">
            {Object.entries(groupedData).map(([group, value]) => (
                <div key={group}>
                    <div className="group">{group}</div>
                    <ul className="group-list">
                        {value.map((item) => (
                            <SearchItem
                                key={item.key}
                                description={item.description}
                                searchTerm={searchTerm}
                            />
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default SearchResults;
