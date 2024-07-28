import React from 'react';

import styles from "./SearchBarDropdown.module.css";

import { ConvertedDataType, DataType } from '../../types/data';

type Props = {
    searchValue: string;
    data: ConvertedDataType;
    onSelect: (data: DataType) => void;
};

const SearchBarDropdown: React.FC<Props> = React.memo(({ searchValue, data, onSelect }) => {
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
                                            key={data.description}
                                            title={data.description}

                                            onClick={() => onSelect(data)}
                                            highlightValue={searchValue}
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
});

const DropdownSectionTitle: React.FC<{ title: string }> = React.memo(({ title }) => {
    return (
        <div
            className={styles.sectionTitle}
            children={title}
        />
    )
})

type DropdownSectionItemProps = {
    title: string,
    onClick: () => void;
    highlightValue: string;
}

const DropdownSectionItem: React.FC<DropdownSectionItemProps> = React.memo((props) => {
    const { title, onClick, highlightValue } = props;

    const splitedTitle = title.split(new RegExp(`(${highlightValue})`, 'gi'));

    return (
        <div className={styles.sectionItem} onClick={onClick}>
            {
                splitedTitle.map((text, idx) => {
                    const iS_HIGHLIGHT = text.toLowerCase() === highlightValue.toLowerCase();

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
})


export default SearchBarDropdown;