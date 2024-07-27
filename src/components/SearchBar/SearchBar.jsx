import { useState } from 'react';
import '../../SearchBar.css';
import { dummy } from '../../data';
import groupByType from '../../utils/groupByType';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const groupedData = groupByType(dummy);

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="search-bar">
            <div className="search-list">
                <SearchInput value={searchTerm} onChange={handleInputChange} />
                {searchTerm && (
                    <SearchResults
                        groupedData={groupedData}
                        searchTerm={searchTerm}
                    />
                )}
            </div>
            <div className="search-button">
                <button type="button">🔍</button>
            </div>
        </div>
    );
};

export default SearchBar;
