import {IoMdSearch} from "react-icons/io";
import {Dispatch, SetStateAction} from "react";

interface ISearchBar {
    value: string
    setValue: Dispatch<SetStateAction<string>>
}

const SearchBar = ({value, setValue}:ISearchBar) => {

    return (
        <div>
            <input value={value} onChange={e => setValue(e.target.value)}/>
            <button><IoMdSearch/></button>
        </div>
    );
};

export default SearchBar;