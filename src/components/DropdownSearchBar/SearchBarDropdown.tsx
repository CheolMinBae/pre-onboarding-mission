import React from 'react';

import styles from "./SearchBarDropdown.module.css";

import { ConvertedDataType, DataType } from '../../types/data';

type Props = {
    searchValue: string;
    data: ConvertedDataType;
    onSelect: (data: DataType) => void;
};

const SearchBarDropdown: React.FC<Props> = ({ searchValue, data, onSelect }) => {

    /*
        {
            data.type : [
                ...data
            ]
        }
    */

    return (
        <div className={styles.container}>
        </div>
    );
};


export default SearchBarDropdown;