import { useState } from 'react';

import '../SearchBar.css';
import { dummy } from '../data';
import groupByType from '../utils/groupByType';

const SearchBar = () => {
    const [searchTerm, setsearchTerm] = useState('');

    const groupedData = groupByType(dummy);

    const handleInputChange = (event) => {
        setsearchTerm(event.target.value);
    };

    const splitIntoChars = (str, term) => {
        if (!term) return str;
        const regex = new RegExp(
            `(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`,
            'gi'
        );
        const chars = str.split(regex);

        return (
            <span>
                {chars.map((char, index) =>
                    regex.test(char) ? (
                        <span key={index} className="point-char">
                            {char}
                        </span>
                    ) : (
                        <span key={index}>{char}</span>
                    )
                )}
            </span>
        );
    };

    return (
        <div className="search-bar">
            <div className="search-list">
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
                                        <li
                                            key={item.key}
                                            className="group-item"
                                        >
                                            {splitIntoChars(
                                                item.description,
                                                searchTerm
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="search-button">
                <button type="button">🔍</button>
            </div>
        </div>
    );
};

export default SearchBar;
