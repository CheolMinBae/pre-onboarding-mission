import {dummy} from "@src/datas/data.js"
import SearchListItem, {IDummy} from "@src/components/SearchListItem.tsx";
import {useState} from "react";

interface ISearchList {
    value: string
}

const SearchList = ({value}: ISearchList) => {
    const [data,] = useState<IDummy[]>(dummy)

    return (
        <div>
            {data && data.map((v) => (<SearchListItem key={v.key} item={v} value={value} />))}
        </div>
    )
};


export default SearchList;