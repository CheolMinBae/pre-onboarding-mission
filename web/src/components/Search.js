import React from 'react';
import classes from '../style/Search.module.css';
import {dummy} from "../data/data";

const Search = () => {
    const [searchValue, setSearchValue] = React.useState('');
    const changeSearchValue = (value) => {
        const escapeString = escapeRegExp(value);
        // console.log(escapeString);
        setSearchValue(escapeString);
    }
    const highlightText = (text, highlight) => {
        if (!highlight) return text;
        const parts = text && text.split(new RegExp(`(${highlight})`, 'gi'));
        return parts.map((item, index) =>
            item.toLowerCase() === highlight.toLowerCase() ? (
                <span key={index} className={classes.highlight}> {item} </span>
            ) : (
                item
            ));
    };
    // 특수 문자를 이스케이프 처리하는 함수
    const escapeRegExp = (string) => {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '');
    };

    const onClickSearch = () => {
        if (searchValue.trim().length !== 0) {
            window.alert("입력한 값은 " + searchValue + "입니다");
        }
        setSearchValue(''); // 초기화
    }
    return (
        <div>
            <div className={classes.header}></div>
            <div className={classes.searchBox}>
                <input
                    className={classes.searchInput}
                    type="text"
                    placeholder="Search..."
                    value={searchValue}
                    onChange={(e) => changeSearchValue(e.target.value)}
                />
                <img className={classes.searchIco} src={'./search.svg'} alt="Search" onClick={onClickSearch} />
            </div>
            <div className={classes.option}>
                {/*{searchValue && dummy.filter((item) => item.description.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (*/}
                {searchValue && dummy.map((item, index) => (
                    <div key={index} className={classes.optionBox} onClick={() => changeSearchValue(item.description)}>
                        {highlightText(item.description, searchValue)}
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Search;
