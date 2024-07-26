import { useState } from 'react';

import '../SearchBar.css';
import { dummy } from '../data';
import groupByType from '../utils/groupByType';

const SearchBar = () => {
    const [searchTerm, setsearchTerm] = useState('');

    const groupedData = groupByType(dummy);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setsearchTerm(value);
    };

    const splitIntoChars = (str) => {
        const chars = str.split('');

        return (
            <div>
                {chars.map((char, index) => (
                    <span key={index}>{char}</span>
                ))}
            </div>
        );
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                className="search-input"
            />
            {searchTerm && (
                <div className="search-results">
                    {Object.entries(groupedData).map(([group, value]) => (
                        <div>
                            <div className="group">{group}</div>
                            <ul className="group-list">
                                {value.map((item) => (
                                    <li key={item.key} className="group-item">
                                        {splitIntoChars(item.description)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
            <button type="button">검색</button>
        </div>
    );
};

export default SearchBar;
