import {dummy} from "@src/datas/data.js"
import SearchListItem, {IDummy} from "@src/components/SearchListItem.tsx";
import {useState} from "react";

const SearchList = () => {
    const [data,] = useState(dummy)
    return (
        <div>
            {data.map((v:IDummy) => <SearchListItem key={v.key} item={v}/>)}
        </div>
    )
};


export default SearchList;