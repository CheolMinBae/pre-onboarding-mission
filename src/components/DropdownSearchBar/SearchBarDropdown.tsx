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

    console.log(Object.entries(data))

    return (
        <div className={styles.container}>
            {
                Object.entries(data).map(([type, data]) => {
                    return (
                        <div onClick={() => console.log(type)}>
                            {type}
                            <div>
                                {
                                    data.map(data => {
                                        const { description } = data

                                        return (
                                            <div onClick={() => console.log(data)}>{description}</div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};


export default SearchBarDropdown;