import React, { useState } from "react";

import styles from "./DropdownSearchBar.module.css";

import SearchBarDropdown from "./SearchBarDropdown";

import { ConvertedDataType, DataType } from "../../types/data";

type Props = {
    onSelectItem: (value: DataType) => void;

    data: ConvertedDataType;
};

const DropdownSearchBar: React.FC<Props> = ({ onSelectItem, data }) => {
    const [searchValue, setSearchValue] = useState<string>("");

    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    };

    return (
        <div className={styles.container}>
            <input
                className={styles.input}
                type="text"

                value={searchValue}
                onChange={handleValueChange}
            />
            {
                searchValue &&
                <SearchBarDropdown
                    searchValue={searchValue}
                    data={data}

                    onSelect={onSelectItem}
                />
            }
        </div>
    )
}

export default DropdownSearchBar;