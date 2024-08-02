import React, { useState } from "react";

const groupByType = (array) => {
    return array.reduce((acc, current) => {
        const { type, ...rest } = current;
        if (!acc[type]) {
            acc[type] = [];
        }
        acc[type].push(rest);
        return acc;
    }, {});
};

const highlightText = (text, highlight) => {
    if (!highlight.trim()) {
        return text;
    }

    // 공백을 포함한 문자열을 정규 표현식으로 변환
    const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // 정규 표현식 특수 문자 이스케이프
    const regex = new RegExp(`(${escapeRegExp(highlight)})`, "gi");

    return text.split(regex).map((part, index) => (regex.test(part) ? <b key={index}>{part}</b> : part));
};

export default function SelectBox({ data }) {
    const [searchStr, setSearchStr] = useState("");
    const groupedData = groupByType(data);

    const handleChange = (event) => {
        setSearchStr(event.target.value);
    };

    const selectStr = (str) => {
        setSearchStr(str);
    };

    return (
        <>
            <input name="searchStr" className="input" value={searchStr} onChange={handleChange} />
            <button className="btn">🔍</button>
            {searchStr.length > 0 && (
                <div className="options">
                    {Object.entries(groupedData).map(([type, items]) => (
                        <div key={type}>
                            <div className="type row">{type}</div>
                            {items.map((item) => (
                                <div key={item.key} className="item row" onClick={() => selectStr(item.description)}>
                                    {highlightText(item.description, searchStr)}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}
