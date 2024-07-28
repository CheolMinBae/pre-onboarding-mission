import React from 'react';

import styles from "./SearchBarDropdown.module.css";

import { ConvertedDataType, DataType } from '../../types/data';

type Props = {
    searchValue: string;
    data: ConvertedDataType;
    onSelect: (data: DataType) => void;
};

const SearchBarDropdown: React.FC<Props> = ({ searchValue, data, onSelect }) => {

    return (
        <div className={styles.container}>
            {
                Object.entries(data).map(([type, datas]) => {
                    return (
                        <div key={type}>
                            <DropdownSectionTitle
                                title={type}
                            />
                            {
                                datas.map((data) => {
                                    return (
                                        <DropdownSectionItem
                                            searchValue={searchValue}
                                            key={data.description}
                                            title={data.description}
                                            onClick={() => onSelect(data)}
                                        />
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    );
};

const DropdownSectionTitle: React.FC<{ title: string }> = ({ title }) => {
    return (
        <div
            className={styles.sectionTitle}
            children={title}
        />
    )
}

type DropdownSectionItemProps = {
    title: string,
    onClick: () => void;
    searchValue: string;
}

const DropdownSectionItem: React.FC<DropdownSectionItemProps> = (props) => {
    const { title, onClick, searchValue } = props;

    const splitedTitle = title.split(new RegExp(`(${searchValue})`, 'gi'));

    return (
        <div className={styles.sectionItem} onClick={onClick}>
            {
                splitedTitle.map((text, idx) => {
                    const iS_HIGHLIGHT = text.toLowerCase() === searchValue.toLowerCase();

                    return (
                        <span
                            key={text + idx.toString() + title}
                            className={iS_HIGHLIGHT ? styles.highlightedText : ""}
                            children={text}
                        />
                    )
                })
            }

        </div>
    )
}


export default SearchBarDropdown;