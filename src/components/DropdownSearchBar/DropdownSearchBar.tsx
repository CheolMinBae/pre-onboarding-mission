import React, { useState } from "react";

import styles from "./DropdownSearchBar.module.css";

import SearchBarDropdown from "./SearchBarDropdown";

import { ConvertedDataType, DataType } from "../../types/data";
import useThrottledValue from "../../hooks/useThrottledValue";

type Props = {
    onSelectItem: (value: DataType) => void;

    data: ConvertedDataType;
};

const DropdownSearchBar: React.FC<Props> = ({ onSelectItem, data }) => {
    const [searchValue, setSearchValue] = useState<string>("");
    const throttledValue = useThrottledValue(searchValue, 300);

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
                    searchValue={throttledValue}
                    data={data}

                    onSelect={onSelectItem}
                />
            }
        </div>
    )
}

export default DropdownSearchBar;