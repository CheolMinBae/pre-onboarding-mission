import {dummy} from "@src/datas/data.js"
import SearchListItem, {IDummy} from "@src/components/SearchListItem.tsx";
import {useState} from "react";
import styled from "styled-components";

interface ISearchList {
    value: string
}

const SearchList = ({value}: ISearchList) => {
    const [data,] = useState<IDummy[]>(dummy)

    return (
        <Container>
            <ItemTop>Company</ItemTop>
            {data && data.map((v) => (<SearchListItem key={v.key} item={v} value={value} />))}
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