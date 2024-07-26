import React, { useState } from "react";

import styles from "./DropdownSearchBar.module.css";

import SearchBarDropdown from "./SearchBarDropdown";

import { ConvertedDataType } from "../../types/data";

import { dummy } from "../../datas/data";

type Props = {
    value: string;
    onChange: (value: string) => void;

    data: ConvertedDataType;
};

const DropdownSearchBar: React.FC<Props> = ({ value, onChange }) => {
    const [isFoucsed, setIsFocused] = useState<boolean>(false);

    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
    };

    return (
        <div className={styles.container}>
            <input
                className={styles.input}
                type="text"
                value={value}
                onChange={handleValueChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}

            />
            {
                isFoucsed &&
                <SearchBarDropdown
                    searchValue={value}
                    data={dummy}

                    onSelect={(e) => console.log(e)}
                />
            }
        </div>
    )
}

export default DropdownSearchBar;