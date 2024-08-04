import {dummy} from "@src/datas/data.js"
import SearchListItem, {IDummy} from "@src/components/SearchListItem.tsx";
import {useEffect, useState} from "react";
import styled from "styled-components";

interface ISearchList {
    value: string
}

const SearchList = ({value}: ISearchList) => {
    const [data, setData] = useState<IDummy[]>([]);

    useEffect(() => {
        const types = ["COMPANY", "PEOPLE", "JOB"];
        setData(types.flatMap(v => [
            { key: v, type: v, description: v },
            ...dummy.filter(item => item.type === v) as IDummy[] // 타입 캐스팅
        ]));

    }, []);

    return (
        <Container>
            {data && data.map((v) => (
                (v.description === "COMPANY" || v.description === "PEOPLE" || v.description === "JOB") ?
                    <ItemTop key={v.key}>{v.description}</ItemTop> :
                    <SearchListItem key={v.key} item={v} value={value} />
            ))}
        </Container>
    )
};


export default SearchList;

const Container = styled.div`
    overflow-y: scroll;
    height: 180px;
    border: 1px solid #d2d2d2;
    margin-top: 10px;
`

const ItemTop = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    height: 36px;
    background-color: #f2f2f2;
`;